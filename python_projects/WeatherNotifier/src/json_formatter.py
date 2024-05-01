
def json_formatter(json_data):
    print("*"*100)
    print("Name: ",json_data["name"])
    print("-"*100)
    print("Weather Type",json_data["weather"][0]["main"])
    print("-"*100)
    print("Weather Description: ",json_data["weather"][0]["description"])
    print("-"*100)
    print("Temperature: ",json_data["main"]["temp"])
    print("-"*100)
    print("Humidity: ",json_data["main"]["humidity"])
    print("-"*100)
    print("Pressure: ",json_data["main"]["pressure"])
    print("-"*100)
    print("Feels like: ",json_data["main"]["feels_like"])
    print("-"*100)

