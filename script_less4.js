//Голынцев Андрей
// ДЗ 4 урока
'use strict'

// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function get_Min(a, b){
    if (a < b) return ('a < b, a = ' + a); else return ('a > b, b = ' + b);
}
//Или так
function get_Min1(a, b){
    return Math.min(a, b);
}

/*
Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом 
с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного 
символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа 
позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов 
будут 0 и 1.
Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, 
содержащихся в строке.
*/
// var str = prompt('Enter string', 'BbcsBlvuqpVcquyQQcvaiwQlmqpQowiQejnclBB'), symb = '';

function countBs(str){
    var boofer = 0;
    for (var i = --str.length; i >= 0; i--)// for (var i = 0; i < str.length; i++)
        if (str.charAt(i) === 'B') boofer++;
    return boofer;
}
// console.log('В строке: \n' + str + '\nCодержится ' + countBs(str) + ' "B"');

/*
Затем напишите функцию countChar, которая работает примерно как countBs, только принимает 
второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). 
Для этого переделайте функцию countBs. 
*/
function countChar(str, symb){
    if (str && symb){ //Зачем счетать то чего нет
        var boofer = 0;
        for (var i = --str.length; i >= 0; i--) // for (var i = 0; i < str.length; i++)
            if (str.charAt(i) === symb) boofer++;
        return boofer;
    } else {
        return 0;
    }

}

// symb = prompt('String: ' + str + '\nEnter symbol', 'B');
// console.log('В строке: \n' + str + '\nCодержится ' + countChar(str, symb) + ' "' + symb + '"');


/*
* Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.
Напишите рекурсивную функцию isEven согласно этим правилам. 
Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. 
Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?
*/

function isEven(x){
    var xBool
    switch(x) {
        case 0: xBool = true; break;
        case 1: xBool = false; break;
        default: xBool = x > 0 ? isEven(x - 2) : isEven(x + 2); break;
    }
    return xBool;
}

for (var i = -100; i <= 100; i++) {
    console.log(i + '->' + isEven(i));
}