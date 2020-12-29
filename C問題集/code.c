#include <stdio.h>

int main(void)
{
    int no;
    while (1)
    {
        scanf("%d", &no);
        if (no > 0)
            printf("+");
        else
            printf("-");

        printf("\n");
    }
}
