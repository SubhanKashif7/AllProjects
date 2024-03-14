#include <iostream>
#include <string>
#include <cmath>

int main(){
    int digit1;
    int digit2;
    std::string operation;
    
    std::cout << "Enter First Digit :  ";
    std::cin >> digit1;
    std::cout << "Enter Second Digit :  ";
    std::cin >> digit2;
    std::cout << "Enter Operation :  ";
    std::cin >> operation;

    if (operation=="-"){
        std::cout << digit1-digit2;
    }else if (operation=="+"){
        std::cout << digit1+digit2;
    }else if (operation=="*"){
        std::cout << digit1*digit2;
    }else if (operation=="/"){
        std::cout << digit1/digit2;
    }else if (operation=="%"){
        std::cout << digit1%digit2;
    }else if (operation=="**"){
        std::cout << pow(digit1,digit2);
    };



    return 0;
}