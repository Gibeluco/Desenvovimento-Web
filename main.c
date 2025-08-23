#include <stdio.h>
#include <stdlib.h>

int main()
{

int n1, n2;
printf("informe o primeiro numero inteiro:");
scanf("%d", &n1);
printf("informe o segundo numero inteiro:");
scanf("%d", &n2);

if(n1 % 2 == 0 && n2 % 2 == 0) {
    printf("Os dois numeros sao pares!");
}
else if (n1 % 2 == 0 || n2 % 2 == 0){
    printf("Um dos dois numeros sao pares!");
}
return 0;

}
