#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
    double marks;
    

    cout << "Enter Your Marks";
    cin >> marks;

    if (marks>90){
        cout << "You got an A+";
    }else if (marks>=95){
        cout << "You got an A";
    }else if (marks>=80){
        cout << "You got a B+";
    }else if (marks>=70){
        cout << "You got a B";
    }else if (marks>=55){
        cout << "You got C+";
    }else if (marks>=45){
        cout << "You got D+";
    }else if (marks>=48){
        cout << "You got a D";
    }else {
        cout << "You are Fail";
    };
    
    return 0;
}
