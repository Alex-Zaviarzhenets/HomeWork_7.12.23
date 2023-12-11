


// Дано натуральное число N. Выведите слово YES, если число 
// N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


function powerOfTwo (n){

    if(n<=0){
        return "No!!!";
    }

    while (n % 2 === 0){
        n /=2;
    }
    
    if (n === 1){
        return "Yes!!!"
    } else { return "No!!!"}

}

const number = 4;
const result = powerOfTwo(number);
console.log(result);


// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).


function sumDigitsNumber(number){
    let sum = 0;
    while(number){
        sum += number % 10;
        number = Math.floor(number/10);
    }
    return sum;
}

const number1 = 11111;
const result1 = sumDigitsNumber(number1);
console.log(result1);


//Напишите рекурсивный метод, который выводит на экран числа Фибоначчи до N-ого элемента.

function fibinucci( n, a = 0,  b = 1){
    if( n > 0 ){
        console.log(a);
        fibinucci( n -1, b, a + b)
    }
}

const n = 10;
fibinucci(n);


// Напишите рекурсивный метод, 
// который проверяет, является ли строка палиндромом.

.........не понимаю как сделать эту функцию.........
