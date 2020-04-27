from __future__ import absolute_import, print_function

import json
import pymongo
import tweepy
from tweepy import OAuthHandler, Stream, StreamListener
from textblob import TextBlob
from textblob.sentiments import NaiveBayesAnalyzer
from textblob import Word
from textblob.np_extractors import ConllExtractor
import sys
import requests
import os

# Go to http://apps.twitter.com and create an app.
# The consumer key and secret will be generated for you after
consumer_key = "BlO5mzzPPAUgL3yeGqZkGinK2"
consumer_secret = "Z7TI0mHTx8SBUcZiQiw4FPzUR13FKGCVyVgy0W8VWFDQPo3sdW"

# After the step above, you will be redirected to your app's page.
# Create an access token under the the "Your access token" section
access_token = "197307734-W8ymSKyYlTV5aLoBDrWLFk6sliATJ32a3gIiwpMl"
access_token_secret = "19xziJrA55IMq3XAzND3nlAsK6TDlikN5uENCDEk2osFm"

class StdOutListener(StreamListener):
    """ A listener handles tweets that are received from the stream.
    This is a basic listener that just prints received tweets to stdout.
    """
    def __init__(self, api):
        self.api = api
        super(tweepy.StreamListener, self).__init__()
        
        # Connecting to MongoDB and use the database twitter.
        self.db = pymongo.MongoClient().twitter
        
    def on_status(self, data):
        #print(data.text)
        analysis = TextBlob(data.text, analyzer=NaiveBayesAnalyzer(), np_extractor= ConllExtractor())
        #print ("Confidence :  Positive score: " ,analysis.sentiment.p_pos*100, "  Negative score: ", analysis.sentiment.p_neg*100 )
        self.db.traveltrek.insert({"name":data.user.name,"text":data.text,"created_at":data.created_at,"positive_score:":analysis.sentiment.p_pos*100,"negative_score:":analysis.sentiment.p_neg*100})
        return True
        
    def on_error(self, status):
        print(status)

if __name__ == '__main__':

    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)
    l = StdOutListener(api)
    stream = Stream(auth, l)
    stream.filter(languages=["en"],track=['travel','travelling','trekking','gopro','mountain trek','snow trek','tourism','world tour','tour','trip','vacations','holiday plan','Himalayas','Himachal Pradesh trek','khipsi pass','fort','mountain','bon fire','beach','sea','ocean','family trip','family vacation','family trek','friends trek','friends travelling','friends vacation'])
