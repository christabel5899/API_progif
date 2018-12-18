import urllib.request
import json


f = open("recipes.txt","w+")
allRecipe = []
for i in range(5):
    url = "http://api.yummly.com/v1/api/recipes?_app_id=d083101f&_app_key=c41cf127a9c6e5d7cff88b7a57005b65&maxResult=20&start=" + str(int(i)*20)
    requestResult = urllib.request.urlopen(url).read()
    jsonObj = json.loads(requestResult)
    recipeResult = jsonObj['matches']
    for recipe in recipeResult:
        allRecipe.append(recipe)
        
f.write(json.dumps(allRecipe))
f.close()


