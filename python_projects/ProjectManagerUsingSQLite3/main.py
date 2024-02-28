import sqlite3

import arrow
conn = sqlite3.connect("projects.db")

c = conn.cursor()

c.execute("""CREATE TABLE IF NOT EXISTS projects (
          project_id INTEGER PRIMARY KEY,
          project_name STRING NOT NULL,
          project_difficulty STRING NOT NULL)
 """)

def get_all_project_from_db():
    c.execute("SELECT * FROM projects")
    projects = c.fetchall()
    for row in projects:
            print("\n")
            print("Projects are : ")
            print("*"*50)
            print(f"Index : {row[0]}  |  Project Name : {row[1]}  |  Project_difficulty : {row[2]} ")

def add_project_to_db(projectname,difficulty):
    c.execute("INSERT INTO projects (project_name,project_difficulty) VALUES (?,?)",(projectname,difficulty))
    conn.commit()

def update_project(index,projectname,difficulty):
    c.execute("UPDATE projects SET project_name=?,project_difficulty=? WHERE project_id=?",(projectname,difficulty,index))
    conn.commit()

def del_project(index):
    c.execute("DELETE FROM projects WHERE project_id=?",(index,))
    conn.commit()

def main():
    while True:
        print("\n Project Manger (Choose Any Option)")
        print("1. Add Project")
        print("2. Update Project")
        print("3. Delete Project")
        print("4. Get All Projects")
        print("5. Exit")

        choice = int(input("Enter your choice: "))

        match choice:
            case 1:
                projectName = input("Enter Project Name : ")
                projectDifficutly = input("Enter Project Difficutly : ")
                add_project_to_db(projectName,projectDifficutly)
            case 2:
                index = int(input("Enter Project Index : "))
                projectName = input("Enter Project Name : ")
                projectDifficutly = input("Enter Project Difficutly : ")
                update_project(index,projectName,projectDifficutly)
            case 3:
                get_all_project_from_db()
                index = int(input("Enter Project Index : "))
                del_project(index)
                print("Project Deleted")
            case 4:
                get_all_project_from_db()
            case 5:
                break
            case _:
                print("INVALID CHOICE")





if __name__ == "__main__":
    main()
    conn.close()