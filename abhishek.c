#include<stdio.h>
#include<stdlib.h>
#include <iostream>

using namespace std;
double exp(double a, double b){
    double t(1);
    for(int i = 0;i<b;++i)
        t *= a;
    return t;
} 

long long int root(long long int num, double n_){
    double x;
    double A(num);
    double dx;
    double eps(10e-6);
    double n(n_);
    x = A * 0.5;
    dx = (A/exp(x,n-1)-x)/n;
    while(dx >= eps || dx <= -eps){
        x = x + dx;
        dx = (A/exp(x,n-1)-x)/n;
    }
   if(x == abs(x)){
       return 1;
   }
   else{
       return 0;
   }
}

long long int quadra(long long int num){
    int flag = 1;
    for(long int i=1;i<(num/2);i++){
        if(root(num-i,4)==1 && root(i,4)==1){
            printf("1\n");
        }
        else{
            printf("0\n");
        }
    }
}
int main(){
    int T;
    long long int N[100];
    scanf("%d",&T);
    for(int i=0;i<T;i++){
        scanf("%d",&N[i]);
    }
    for(int i=0;i<T;i++){
        quadra(N[i]);
    }
    return 0;
}