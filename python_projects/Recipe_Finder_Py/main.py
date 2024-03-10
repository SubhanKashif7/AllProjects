import requests
import time

def req(rec):
    req = requests.request("https://api.api-ninjas.com/v1/recipe?query=biryani",{
        
    })
    

def main():
    while True:
        print("\n Recipe Finder Using Recipe Api")
        print("1. Search Recipe")
        print("2. Exit")
        choice = int(input("Enter Your Choice"))

        