// CONSTS ---------------------------------------------------------
function getFee(isMember) {
  return "The fee is " + (isMember ? "$2.00" : "$10.00");
}
// FUNCTIONS ---------------------------------------------------------

function get_count(sentence) {
  var counter = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(sentence[i])) {
      counter++;
    }
  }
  return counter;
}

function disemvowel(str) {
  var newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (vovels.includes(str[i])) {
    } else {
      newstr = newstr + str[i];
    }
  }
  return newstr;
}

function squareDigits(num) {
  let split_num = String(num).split("");
  for (let i = 0; i < split_num.length; i++) {
    split_num[i] = String(Number(String(num).split("")[i]) ** 2);
  }
  return Number(split_num.join(""));
}

function descendingOrder(n) {
  return Number(String(n).split("").sort().reverse().join(""));
}

function highAndLow(numbers) {
  let max = Math.max(...numbers.split(" "));
  let min = Math.min(...numbers.split(" "));
  return `${max} ${min}`;
}

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// целочисленное деление. остаток. тернарный операторю индекс массива
function getMiddle(s) {
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

// подстрока String.prototype.substring()
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//форматированная строка. цикл for if
function accum(s) {
  result = "";
  for (let i = 0; i < s.length; i++) {
    result += `${s.split("")[i].toUpperCase()}${s
      .split("")
      [i].repeat(i)
      .toLowerCase()}`;
    if (i + 1 != s.length) result += "-";
  }
  return result;
}

// разобрать функцию map
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

// определить тип number or string
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((elem) => typeof elem === "number");
}

//оператор И, квадратный корень, деление нацело
var isSquare = function (n) {
  return n >= 0 && Math.pow(n, 0.5) % 1 == 0;
};

function isSquare_2(n) {
  return Math.sqrt(n) % 1 === 0;
}

// сколько раз встречается буква в строке с помощтю split
function XO(str) {
  // конкретно в этом примере -1 не имеет значения для сравнения
  return (
    str.toLowerCase().split("o").length - 1 ===
    str.toLowerCase().split("x").length - 1
  );
}

// больше ли одного раза встречается буква в строке с помощтю split
function isIsogram(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase().split(str[i]).length - 1 > 1) {
      return false;
    }
  }
  return true;
}

// больше ли одного раза встречается буква в строке с помощтю set
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

String.prototype.toJadenCase_or = function () {
  const word = "freecodecamp";

  const firstLetter = word.charAt(0);

  const firstLetterCap = firstLetter.toUpperCase();

  const remainingLetters = word.slice(1);

  const capitalizedWord = firstLetterCap + remainingLetters;
};

//Capitalize the string
//странное требование через prototype this
function toJadenCase(str) {
  return str
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
}

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
};

function dnaStrand(dna) {
  pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  // return ''.join([pairs[x] for x in dna])
  return dna
    .split("")
    .map((x) => pairs[x])
    .join("");
}

// замена символов в строке
function maskify(cc) {
  result = "";
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      result += "#";
    } else {
      result += cc[i];
    }
  }
  return result;
}

// Разобрать регулярки и padStart
function maskify_r1(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

function maskify_r2(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

function maskify_r3(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

//минимальное значение массива через оператор расширения ...
function findShort(s){
  let numbers = s.split(' ').map((x) => x.length)
  return Math.min(...numbers);
}


// factorial
function GetSum_test(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}


//sort reduce slice
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a, b) => a - b).slice(0,2).reduce((a, b)=> a+b)
}


function friend(friends){
  for (let i = 0; i < friends.length; i++) {
    if ((friends[i]).length  === 4) {
      return false;
    }
  }
  return true;
}
function accum1(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

// filter
function accum(s) {
  return s.filter((c) => c.length ===4)
}

// перевод set в массив. sort
function longest(s1, s2) {
  let a =new Set(s1 + s2)
  let b = [...a]
  return b.sort().join('')
}

// EXEC ----------------------------------------------------------------

console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));
