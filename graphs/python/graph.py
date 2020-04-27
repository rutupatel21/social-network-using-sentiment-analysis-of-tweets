from flask import Flask, Markup, render_template
import pymongo


app = Flask(__name__)


myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["twitter"]

##Technology
mycoltech = mydb["technology"]
mycoltech_1=mydb["technology_possitive"]

##new_value = 15
y = mycoltech.aggregate([{"$group": {"_id": None , "positive_score":{"$avg": "$positive_score:"}}},{"$out":"technology_possitive"}]);
result_tech = []
for x in mycoltech_1.find({},{ "_id": 0, "positive_score":1}):
	result_tech.append(x["positive_score"])
	print(x)
print(result_tech)
##c = 100 - result[0];
result_tech.append(100 - result_tech[0])
print(result_tech)
labels_tech = ['Negative','Possitive']
values_tech = [result_tech[1],result_tech[0]]
colors = ["#F7464A","#46BFBD"]

@app.route('/graph_technology')
def pie():
    pie_labels = labels_tech
    pie_values = values_tech
    return render_template('pie_chart.html', title='Analysis: Technology', max=17000, set=zip(values_tech, labels_tech, colors))


##SPORTS
mycolsport = mydb["sports"]
mycolsport_1=mydb["sports_possitive"]

##new_value = 15
y = mycolsport.aggregate([{"$group": {"_id": None , "positive_score":{"$avg": "$positive_score:"}}},{"$out":"sports_possitive"}]);
result_sport = []
for x in mycolsport_1.find({},{ "_id": 0, "positive_score":1}):
	result_sport.append(x["positive_score"])
	print(x)
print(result_sport)
##c = 100 - result[0];
result_sport.append(100 - result_sport[0])
print(result_sport)
labels_sport = ['Negative','Possitive']
values_sport = [result_sport[1],result_sport[0]]
colors = ["#F7464A","#46BFBD"]

@app.route('/graph_sport')
def pie_b():
    pie_labels_a = labels_sport
    pie_values_a = values_sport
    return render_template('pie_chart.html', title='Analysis: Sports', max=17000, set=zip(values_sport, labels_sport, colors))

##Food and Fashion
mycolfoodFahion = mydb["foodFahion"]
mycolfoodFahion_1=mydb["foodFahion_possitive"]

##new_value = 15
y = mycolfoodFahion.aggregate([{"$group": {"_id": None , "positive_score":{"$avg": "$positive_score:"}}},{"$out":"foodFahion_possitive"}]);
result_foodFahion = []
for x in mycolfoodFahion_1.find({},{ "_id": 0, "positive_score":1}):
	result_foodFahion.append(x["positive_score"])
	print(x)
print(result_foodFahion)
##c = 100 - result[0];
result_foodFahion.append(100 - result_foodFahion[0])
print(result_foodFahion)
labels_foodFahion = ['Negative','Possitive']
values_foodFahion = [result_foodFahion[1],result_foodFahion[0]]
colors = ["#F7464A","#46BFBD"]

@app.route('/graph_foodFashion')
def pie_c():
    pie_labels_b = labels_foodFahion
    pie_values_b = values_foodFahion
    return render_template('pie_chart.html', title='Analysis: Food and Fahion', max=17000, set=zip(values_foodFahion, labels_foodFahion, colors))

##Travel and Trek
mycoltraveltrek = mydb["traveltrek"]
mycoltraveltrek_1=mydb["traveltrek_possitive"]

##new_value = 15
y = mycoltraveltrek.aggregate([{"$group": {"_id": None , "positive_score":{"$avg": "$positive_score:"}}},{"$out":"traveltrek_possitive"}]);
result_traveltrek = []
for x in mycoltraveltrek_1.find({},{ "_id": 0, "positive_score":1}):
	result_traveltrek.append(x["positive_score"])
	print(x)
print(result_traveltrek)
##c = 100 - result[0];
result_traveltrek.append(100 - result_traveltrek[0])
print(result_traveltrek)
labels_traveltrek = ['Negative','Possitive']
values_traveltrek = [result_traveltrek[1],result_traveltrek[0]]
colors = ["#F7464A","#46BFBD"]

@app.route('/graph_traveltrek')
def pie_d():
    pie_labels_d = labels_traveltrek
    pie_values_d = values_traveltrek
    return render_template('pie_chart.html', title='Analysis: Travel and Trek', max=17000, set=zip(values_traveltrek, labels_traveltrek, colors))


##Politics
mycolpolitics = mydb["politics"]
mycolpolitics_1=mydb["politics_possitive"]

##new_value = 15
y = mycolpolitics.aggregate([{"$group": {"_id": None , "positive_score":{"$avg": "$positive_score:"}}},{"$out":"politics_possitive"}]);
result_politics = []
for x in mycolpolitics_1.find({},{ "_id": 0, "positive_score":1}):
	result_politics.append(x["positive_score"])
	print(x)
print(result_politics)
##c = 100 - result[0];
result_politics.append(100 - result_politics[0])
print(result_politics)
labels_politics = ['Negative','Possitive']
values_politics = [result_politics[1],result_politics[0]]
colors = ["#F7464A","#46BFBD"]

@app.route('/graph_politics')
def pie_e():
    pie_labels_e = labels_politics
    pie_values_e = values_politics
    return render_template('pie_chart.html', title='Analysis: Politics', max=17000, set=zip(values_politics, labels_politics, colors))



if __name__ == '__main__':
    app.run(host='localhost', port=8000)
