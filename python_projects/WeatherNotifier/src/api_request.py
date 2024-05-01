import requests
def apiRequest(city_name):
    apiKey = "edb0c43a1009e11f1194671febb7ad83"
    proper_url = f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={apiKey}&units=metric"
    jsonData = requests.get(proper_url).json()
    return  jsonData
