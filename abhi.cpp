#include<stdio.h>
#include<stdlib.h>
#include <iostream>
#include<math.h>
using namespace std;

int quadra( long int num){
    int flag = 1;
    for(long int i=1;i<(num/2);i++){
        long long int a = sqrt(sqrt(num-i))*1000 ,b =sqrt(sqrt(i))*1000 ;
        if(a== abs(sqrt(sqrt(num-i)))*1000  && b== abs(sqrt(sqrt(i)))*1000 ){
            printf("1\n");
            flag =0;
            break;
        }
    }
    if(flag ==1){
        printf("0\n");
    }
    return 0;
}
int main(){
    int T;
    long int N[100];
    scanf("%d",&T);
    for(int i=0;i<T;i++){
        scanf("%d",&N[i]);
    }
    for(int i=0;i<T;i++){
        quadra(N[i]);
    }
    return 0;
}