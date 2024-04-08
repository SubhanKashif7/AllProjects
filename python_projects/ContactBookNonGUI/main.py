from sql_operations import get_contact , add_contact , get_all_contacts , delete_contact , clear_database
import  re
def main():
    while True:
        print("\n Welcome to ContactBook")
        print("1. Get Contact")
        print('2. Add Contact')
        print("3. Get All Contact")
        print("4. Delete Contact")
        print("5. Clear DB")
        print("6. Exit")
        choice = int(input("Enter Your Choice:  "))
        if choice==1:
            name = input('Enter Contact name: ').upper().replace(" ","")
            try:
                contact = get_contact(name)
                formattedCn = f"id : {contact[0]}  |  name : {contact[1]}  |  ph_no : {contact[2]}"
                print(formattedCn)
            except:
                print("Error Occured , Something Went Wrong Or User {} not found".format(name))
        elif choice==2:
            name = input("Enter Contact name:  ").upper().replace(" ","")
            ph_no = input("Enter ph_no:  ")

            phone_pattern = re.compile(r'^(\+\d{1,3}\s?)?(\d{10,12})$')

            # Check if the phone number matches the pattern
            if phone_pattern.match(ph_no):
                add_contact(name,ph_no)
                print("Contact Added...")
            else:
                print("Invalid phone number. Please enter a 11 or 12 digit number.")
        elif choice==3:
            contacts = get_all_contacts()
            for contact in contacts:
                print(contact)
        elif choice==4:
            contactname = input("Enter Contact name:  ").upper().replace(" ","")
            delete_contact(contactname)
        elif choice==5:
            clear_database()
        elif choice==6:
            break




main()