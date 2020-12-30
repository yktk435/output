#include <stdio.h>

#define NU 7

// 学生の点数のデータ
int point[NU];
// 合格者を表示
void print_passed_student(void);

int main(void)
{
    int i;
    extern int point[NU];
    puts("7人の点数を入力");
    for (i = 0; i < NU; i++)
    {
        printf("%d: ", i + 1);
        scanf("%d", &point[i]);
    }
    print_passed_student();
    return 0;
}

void print_passed_student(void)
{
    int i;
    extern int point[NU];
    puts("合格者一覧表");
    puts("----------");
    for (i = 0; i < NU; i++)
    {
        if (point[i] >= 60)
            printf("%d番目 %d\n", i + 1, point[i]);
    }
    puts("----------");
}