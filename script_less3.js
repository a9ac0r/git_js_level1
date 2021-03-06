'use strict'
/*Забегая немного вперед. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
 Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
 Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.*/

// Вариант №1
for (var i=0; i<100; i++){
    var boofer = '';
    boofer = ( (i % 3) == 0) ? 'Fizz' : ( boofer = (i % 5) == 0 ) ? 'Buzz' : i;
    if (i%3==0 && i%5==0) boofer= 'FizzBuzz';
    console.log(boofer);
}

// Вариант №2
for (var i=0; i<100; i++){
    var boofer = '';
    boofer = ( (i % 3 == 0) && (i % 5 == 0) ) ? 'FizzBuzz' : (boofer =  (i % 3 == 0) ? 'Fizz' : ( boofer = (i % 5 == 0)  ? 'Buzz' : i) );
    console.log(boofer);
}

// Вариант №3 
for (var i=0; i<100; i++){
    var boofer = '';
    console.log(boofer = (i % 15 == 0) ? 'FizzBuzz' : (boofer =  (i % 3 == 0) ? 'Fizz' : ( boofer = (i % 5 == 0)  ? 'Buzz' : i) ));
}

// Напишите цикл,  выводит такой треугольник
/*
#
##
###
####
#####
######
#######
*/
var boofer = '';
for (var i=0; i < 8; i++){
    console.log( boofer += '#');
}

/*
* Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
*/

// Вариант №1
for (var a=0; a < 8; a++){
    var boofer = '';
    for (var b=0; b < 4; b++){
        boofer += (a % 2 == 0) ? '# ': ' #'; 
    }
    console.log(boofer);
}

// Вариант № 2
var boofer = '';
for (var a = 0; a < 8; a++){
    boofer += (a % 2 == 0) ? '# # # # \n': ' # # # #\n';
}
console.log(boofer);