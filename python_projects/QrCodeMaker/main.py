import qrcode

data = input("ADD DATA : ")
filename = input("FILENAME TO SAVE THE QR CODE  : ");

qr = qrcode.make(data);
qr.save(filename)


print(f"QR CODE SAVED AS {filename}")