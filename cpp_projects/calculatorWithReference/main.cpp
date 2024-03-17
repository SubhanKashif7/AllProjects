#include <iostream>
#include <math.h>
using namespace std;


void sum(int digit1, int digit2 , int &pointTo){
    double result = digit1+digit2;
    pointTo = (int) result;
};
void min(int digit1 , int digit2 , int &pointTo){
    double result = digit1-digit2;
    pointTo = (int) result;
};
void mul(int digit1 ,int digit2 , int &pointTo){
    double result = digit1*digit2;
    pointTo = (int) result;
};
void div(int digit1 , int digit2 , int &pointTo){
    double result = digit1/digit2;
    pointTo = (int) result;
};
void powerTo(int digit1 , double digit2 , int &pointTo){
    double result = pow(digit1,digit2);
    pointTo = (int) result;
};






int main(int argc, char const *argv[])
{
    int result;
    int dg1;
    int dg2;
    string operational;

    cout << "Enter the first digit:  ";
    cin >> dg1;

    cout << "Enter the second digit:  ";
    cin >> dg2;

    cout << "Enter the operation :  ";
    cin >> operational;
    
    if (operational=="+"){
        sum(dg1,dg2,result);
        cout << result << endl;
    }else if (operational=="-"){
        min(dg1,dg2,result);
        cout << result << endl;
    }else if (operational=="*"){
        mul(dg1,dg2,result);
        cout << result << endl;
    }else if (operational=="/"){
        div(dg1,dg2,result);
        cout << result << endl;
    }else if (operational=="**"){
        powerTo(dg1,dg2,result);
        cout << result << endl;
    }else{
        cout << "Operation not found Error";
    };
    return 0;
}