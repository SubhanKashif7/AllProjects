import sqlite3
connection = sqlite3.connect("contact_book.db")
cursor = connection.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY,
        name STRING NOT NULL,
        ph_no STRING NOT NULL
)""")
connection.commit()

def get_all_contacts():
    contacts_arr = []
    cursor.execute("SELECT * FROM contacts")
    contacts = cursor.fetchall()
    for contact in contacts:
        contacts_arr.append(contact)
    return contacts_arr


def get_contact(name):
    cursor.execute("SELECT * FROM contacts WHERE name = ?", (name,))
    contact = cursor.fetchone()
    return contact

def add_contact(name , ph_no):
    cursor.execute("INSERT INTO contacts (name,ph_no) VALUES (?,?)",(name,ph_no))
    connection.commit()

def delete_contact(name):
    # Assuming cursor is a valid cursor object connected to your database
    try:
        # Execute the SQL query to delete the contact
        cursor.execute("DELETE FROM contacts WHERE name = ?", (name,))
        # Commit the transaction
        connection.commit()
        print(f"Contact {name} deleted successfully.")
    except Exception as e:
        # Handle any errors that may occur during deletion
        print("Error deleting contact:", e)


def update_contact(oldname, newname, url_no):
    try:
        # Execute the SQL query to update the contact
        cursor.execute("UPDATE contacts SET name = %s, url_no = %s WHERE name = %s", (newname, url_no, oldname))
        # Commit the transaction
        connection.commit()
        print(f"Contact {oldname} updated successfully.")
    except Exception as e:
        # Handle any errors that may occur during update
        print("Error updating contact:", e)

def clear_database():
    cursor.execute("DELETE FROM contacts")
    connection.commit()