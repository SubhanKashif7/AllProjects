import sqlite3
import time

conn = sqlite3.connect("note.db")

c = conn.cursor()

c.execute("""CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          password TEXT NOT NULL
)""")

c.execute("""CREATE TABLE IF NOT EXISTS notes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          body TEXT NOT NULL,
          date TEXT NOT NULL,
          user_id INTEGER,
          FOREIGN KEY (user_id) REFERENCES users(id)
)""")

conn.commit()


def register():
    username = input("Enter username: ")
    password = input("Enter password: ")
    c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
    conn.commit()
    print("User registered successfully!")


def login():
    username = input("Enter username: ")
    password = input("Enter password: ")
    c.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    user = c.fetchone()
    if user:
        print(f"Welcome, {username}!")
        return user[0]  # Return user_id
    else:
        print("Invalid username or password.")
        return None


def get_all_notes(user_id):
    c.execute("SELECT * FROM notes WHERE user_id = ?", (user_id,))
    for row in c.fetchall():
        print("-" * 80)
        print(f"Id {row[0]}   -   Title {row[1]}   -   Body {row[2]}  -  addedAt {row[3]} ")


def add_note(user_id, title, body):
    c.execute("INSERT INTO notes (title, body, date, user_id) VALUES (?,?,?,?)",
              (title, body, time.strftime("%Y-%m-%d %H:%M:%S"), user_id))
    conn.commit()


def delete_note(user_id, note_id):
    c.execute("DELETE FROM notes WHERE id = ? AND user_id = ?", (note_id, user_id))
    conn.commit()


def update_note(user_id, note_id, title, body):
    c.execute("UPDATE notes SET title =?, body =? WHERE id =? AND user_id =?", (title, body, note_id, user_id))
    conn.commit()


def main():
    user_id = None
    while not user_id:
        print("\n NOTE MANAGER USING SQLITE3 FOR SHIFA KA MOO BAND KARO")
        print("-" * 50)
        print("1. Login")
        print("2. Register")
        print("3. Exit")
        print("-" * 50)
        choice = input("Enter your choice: ")
        if choice == "1":
            user_id = login()
        elif choice == "2":
            register()
        elif choice == "3":
            return
        else:
            print("Invalid choice.")

    while True:
        print("\n NOTE MANAGER USING SQLITE3 FOR SHIFA KA MOO BAND KARO")
        print("-" * 50)
        print("1. GET ALL NOTES")
        print("2. ADD NOTE")
        print("3. DELETE NOTE")
        print("4. UPDATE NOTE")
        print("5. LOGOUT")
        print("-" * 50)
        choice = input("Enter your choice: ")
        if choice == "1":
            get_all_notes(user_id)
        elif choice == "2":
            title = input("Enter note title: ")
            body = input("Enter note body: ")
            add_note(user_id, title, body)
        elif choice == "3":
            note_id = int(input("Enter note id: "))
            delete_note(user_id, note_id)
        elif choice == "4":
            note_id = int(input("Enter note id: "))
            title = input("Enter note title: ")
            body = input("Enter note body: ")
            update_note(user_id, note_id, title, body)
        elif choice == "5":
            return
        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()
    conn.close()
    # and me
