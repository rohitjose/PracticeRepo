#!/bin/python3

import sys


n = int(input().strip())
a = []
for a_i in range(n):
    a_t = [int(a_temp) for a_temp in input().strip().split(' ')]
    a.append(a_t)

diag1 = sum([a[n][n] for n in range(len(a))])
diag2 = sum([a[len(a)-n-1][n] for n in range(len(a))])
abs_diff = abs(diag1-diag2)
print(abs_diff)
