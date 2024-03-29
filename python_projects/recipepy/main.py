import requests
import sqlite3
import re

conn = sqlite3.connect("recipe.db")
c = conn.cursor()

c.execute("""CREATE TABLE IF NOT EXISTS recipe (
          id INTEGER PRIMARY KEY,
          title STRING NOT NULL,
          ingredients STRING NOT NULL,
          instructions STRING NOT NULL
)""")
conn.commit()


def get_recipe(recipe_title):
    c.execute("SELECT * FROM recipe WHERE title = ?", (recipe_title,))
    conn.commit()
    recipe = c.fetchone()
    return recipe


def removeWhiteSpace(text):
    cleaned_text = re.sub(r'\s+', '', text)
    return cleaned_text


def get_all_recipes():
    c.execute("SELECT * FROM recipe")
    conn.commit()
    recipes = c.fetchall()
    for idx, recipe in enumerate(recipes, start=1):
        spacer()
        print(f"Recipe {idx}:")
        print(f"ID: {recipe[0]}")
        print(f"Title: {recipe[1]}")
        print(f"Ingredients: {recipe[2]}")
        print(f"Instructions: {recipe[3]}\n")
        spacer()


def add_recipe(title, ingredients, instructions):
    c.execute("INSERT INTO recipe (title, ingredients, instructions) VALUES (?, ?, ?)",
              (title, ingredients, instructions))
    conn.commit()


def delete_recipe(recipe_id):
    c.execute("DELETE FROM recipe WHERE id = ?", (recipe_id,))
    conn.commit()


def clear_database():
    c.execute("DELETE FROM recipe")
    conn.commit()


def spacer():
    print("-" * 90)


def formatter(jsonData):
    spacer()
    print(f"Title : {jsonData['title']} \n")
    spacer()
    print(f"Ingredients : {jsonData['ingredients']} \n")
    spacer()
    print(f" Instructions : {jsonData['instructions']} \n")
    spacer()
    print(f"Servings : {jsonData['servings']}")
    spacer()


def apiReq(recipe):
    url = f"https://api.api-ninjas.com/v1/recipe?query={recipe}"
    jsonData = requests.get(url, headers={
        "X-Api-Key": "WvN7UBmzmUbNYSMYEGqNdg40eJ3p199mYTwHnc1J"
    })
    return jsonData


while True:
    spacer()
    print("\nRecipe Finder Application")
    print("1. Get Recipe")
    print("2. Exit")
    print("3. Database Management (Add Recipe, Clear DB, get all recipe etc...)")
    choice = int(input("Enter Your Choice: "))

    if choice == 1:
        recipeInput = str(input("Enter Recipe..."))
        checkFromDb = get_recipe(removeWhiteSpace(recipeInput.upper()))
        if checkFromDb:
            print("Recipe found in the database:")
            spacer()
            print(f"Title: {checkFromDb[1]}")
            print(f"Ingredients: {checkFromDb[2]}")
            print(f"Instructions: {checkFromDb[3]}\n")
            spacer()
        else:
            recipeJson = apiReq(recipeInput).json()
            if recipeJson:
                for idx, recipe in enumerate(recipeJson, start=1):
                    spacer()
                    print(f"{idx}: {recipe['title']}")
                    spacer()
                recipeChoice = int(input("Select a recipe by entering its number: "))
                selectedRecipe = recipeJson[recipeChoice - 1]
                formatter(selectedRecipe)
                add_recipe(
                    removeWhiteSpace(selectedRecipe["title"].upper()),
                    selectedRecipe["ingredients"],
                    selectedRecipe["instructions"],
                )
            else:
                print("Recipe not found.")

    elif choice == 2:
        print("Exiting...")
        break

    elif choice == 3:
        while True:
            print("\n Welcome To Database Management System Of RecipePy")
            print("1. Get All Recipe ")
            print("2. Delete Recipe")
            print("3. Clear Database")
            print("4. Exit Db System")
            print("5. Add Recipe")
            dbChoice = int(input("What you want to do num?... "))
            if dbChoice == 1:
                get_all_recipes()
            elif dbChoice == 2:
                pass
            elif dbChoice == 3:
                clear_database()
            elif dbChoice == 4:
                break
            elif dbChoice == 5:
                userInput_title = str(input("Enter Recipe Title...: "))
                userInput_ingredients = str(input("Enter Recipe Ingredients...: "))
                userInput_instructions = str(input("Enter instructions...:  "))
                add_recipe(removeWhiteSpace(userInput_title.upper()), userInput_ingredients, userInput_instructions)
                print("Recipe Added")

conn.close()
