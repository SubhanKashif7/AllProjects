videos = []
def update_videos(video):
    videos.append(video)

def see_all_vid():
    for key,val in enumerate(videos):
        print(key,val)
    
def del_vid(index):
    del videos[index]

while True:
    print("1. List All VIDS")
    print("2. del  VIDS")
    print("3. add VIDS")
    print("4. exit All VIDS")
    choice = int(input("What You Want to Do"))

    if choice==1:
        see_all_vid()
    elif choice==2:
        see_all_vid()
        delChoice = int(input("Which Vid you want to del"))
        del_vid(delChoice)
    elif choice==3:
        add_vid = input("Enter Video Link")
        update_videos(add_vid)
    elif choice==4:
        break


