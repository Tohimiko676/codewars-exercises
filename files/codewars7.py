def square_digits(num):
    b = list(str(num))
    result = []
    for i in b:
        result.append(str(int(i) ** 2))

    c = int(''.join(result))
    print(c)


def square_digits_2(num):
    a = int(''.join([str(int(x) ** 2) for x in str(num)]))
    print(a)


def disemvowel(string_):
    asd = ''.join([l for l in string_ if l not in 'euioaEUIOA'])
    print(asd)


def get_count(sentence):
    v = 0
    for l in sentence:
        if l in [a, e, i, o, u]:
            v += 1
    return v


def descending_order(num):
    lst = (sorted([int(x) for x in [*(str(num))]], reverse=True))
    return int(''.join(str(x) for x in lst))


def Descending_Order_2(num):
    return int("".join(sorted(str(num), reverse=True)))


def high_and_low(numbers):
    lst = [int(x) for x in numbers.split()]
    print(str(max(lst)), str(min(lst)))
    return (str(max(lst)), str(min(lst)))


def accum(st: str):  # st "abcd"
    return ('-'.join([(x[1] * (x[0] + 1)).title() for x in enumerate(st)]))


def get_middle(s):
    return s[len(s) // 2] if len(s) % 2 else s[len(s) // 2 - 1:len(s) // 2 + 1]


# filter_list([1,2,'a','b']) == [1,2]
def filter_list(l):
    'return a new list with the strings filtered out'
    return [x for x in l if type(x) != str]


def is_square(n):
    if n == 0:
        return True
    return (n ** (0.5)).is_integer() if n > 0 else False


def is_square_2(n):
    # return n >= 0 and (n ** 0.5) % 1 == 0
    return 2.0 % 1 == 0


# diff count in a string  methods ------------------------------
def is_isogram(string):
    check_dict = {}
    for l in string.lower():
        if check_dict.get(l):
            return False
        else:
            check_dict[l] = 1
    return True


def is_isogram_set(string):
    return len(string) == len(set(string.lower()))


def is_isogram_count(string):
    string = string.lower()
    for letter in string:
        if string.count(letter) > 1: return False
    return True


def xo(s):
    return s.lower().count('o') == s.lower().count('x')


# Методы капитализации строки -------------------------------------------------
def to_jaden_case(string):
    return ' '.join([x[0].upper() + x[1:] for x in string.split()])


def to_jaden_case_2(string):
    return ' '.join(word.capitalize() for word in string.split())


import string


def to_jaden_case_3(sentence):
    formatted = string.capwords(sentence, sep=None)
    return formatted


# замена символов в строке ------------------------------------------------------------
# через map
def DNA_strand(dna):
    dna_dict = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C',

    }

    def changer(l):
        for n, v in dna_dict.items():
            if l == n:
                return v

    dna = ''.join(list(map(changer, dna)))
    return dna


# через генератор
def DNA_strand_2(dna):
    pairs = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    return ''.join([pairs[x] for x in dna])


# через хитрожопую функцию translate python 3.4
import string
def DNA_strand_3(dna):
    return dna.translate(string.maketrans("ATCG","TAGC"))
    # Python 3.4 solution || you don't need to import anything :)
    # return dna.translate(str.maketrans("ATCG","TAGC"))
    # import string работает странно поэтому требует допиливания

def maskify(cc):
    result = ''
    for i in range(0,len(cc)):
        if i < len(cc)-4: result +='#'
        else: result += cc[i]
    return result

def maskify_short(cc):
    return "#"*(len(cc)-4) + cc[-4:]


def find_short(s):
    result = ''
    for word in s.split():
        if result:
            if len(word)<len (result):
                result = word
        else:
            result = word
    return len(result)

def find_short_generator(s):
    return min(len(x) for x in s.split())

# EXEC ----------------------------------------------------------


print(find_short('ABC DEFG H'))
