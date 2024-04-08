import random
keywords = [
    "7e4$%9)-","9er-/",":iu~","<o0>-\"[]/","03e:`=+3",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","x","y","z","Ae","Et"
    "A","B","C","D","E","F","G","H","IJK","LMNO","PQRS","TUVWXYZ",
    "1","2","3","4","5","6","7","&","*","(","!","@","#","$","%","^","&",
    "*","(",')',"_","+"
]

def passwordGen(length):
    passw = ""
    while len(passw) < length:
        randomInt = random.randrange(0, len(keywords))
        passw += keywords[randomInt]
    return passw[:length]

mypass = passwordGen(13)
print(mypass)