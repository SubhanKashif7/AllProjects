from api_request import  apiRequest
from json_formatter import json_formatter
import time
from notifier import notify
def main():
    while True:
        print("*"*100)
        print("\n Welcome to Weather App")
        print("-"*100)
        print("1. Set Notification")
        print("2. Get Weather Info")
        print("3. Exit")
        choice = int(input("Enter Your Choice:  "))

        match choice:
            case 1:
                city_weather_to_notify = input("Enter City Name: ")
                interval = int(input("Enter Seconds for break of notification:  "))
                while True:
                    time.sleep(interval)

                    notify(f"Weather for {city_weather_to_notify}",f"Temp : {jsonData["main"]["temp"]} Weather type : {jsonData["weather"][0]["main"]}")
                break
            case 2:
                city_name = input("Enter City name: ")
                jsonData = apiRequest(city_name)
                json_formatter(jsonData)

if __name__ == '__main__':
    main()