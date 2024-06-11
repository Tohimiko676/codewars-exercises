from icecream import ic

# сумма списка
def solution(number):
    lst = []
    for i in range (0, number):
        if i%3 == 0 or i% 5 == 0:
            lst.append(i)
    return (sum(lst))



def spin_words(sentence):
    """"Hey fellow warriors"  --> "Hey wollef sroirraw" """

    return ' '.join([x[::-1] if len (x) >5 else x for x in sentence.split(' ')])


def find_it(seq):
    'number of copy in array if odd'
    num_dict = {}
    for i in seq:
        if i in num_dict:
            num_dict[i] +=1
        else:
            num_dict[i] =1
    for k, v in num_dict.items():
        if v%2 !=0:
            return k

def likes(names):
    n0 = names[0:1] if names[0:1] else ' '
    n1 = names[1:2] if names[1:2] else ' '
    n2 = names[2:3] if names[2:3] else ' '
    fin_lst = [
        "no one likes this",
        f"{n0[0]} likes this",
        f"{n0[0]} and {n1[0] } like this",
        f"{n0[0]}, {n1[0]} and {n2[0]} like this",
        f"{n0[0]}, {n1[0]} and {len(names) - 2} others like this",
        ]


    return fin_lst[-1] if len(names) > 4 else fin_lst[len(names)]



def digital_root(n):
    while len(str(n)) >1:
        n = sum([int(dig) for dig in str(n)])
    return n





# exec ------------------------------------------------------------------


a=10
def fff():
    a =20
    ic(a)

fff()
ic(a)



