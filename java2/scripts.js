//1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  
d = b++; alert(d);           // 1
c = (2 + ++a); alert(c);      // 5
d = (2 + b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

// Почему код даёт именно такие результаты?
//1) Сначала мы увеличиваем значение a, а потом c присваивается это значение для c. (a в итоге равняется 2)
//2) Сначала мы присваиваем d значение b, а потом увеличиваем значение b (b в итоге равняется 2).
//3) Сначала a увеличивается на 1 (было 2, теперь 3), затем складывается с 2. После этого c присваивается значение 5.(a = 3)
//4) Сначала мы складываем 2 и b(2). Получаем значение 4. Присваиваем это значение c. После этого увеличиваем b (b = 3)



//2
//Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
alert("x = " + x);

//x = 5. Запись a *= 2 равноценна записи a = a * 2 (Получилось 4). После чего к этому прибавили единицу, и ответ стал 5.


//3
//Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
a = -4;
b = 3;
if (a > 0 & b > 0)
    alert(a - b);
//если а и b отрицательные, вывести их произведение;
if (a < 0 & b < 0)
    alert(a * b);
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
if ((a >= 0 & b < 0) ^ (a < 0 & b >= 0))
    alert(a + b)
//### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
a = 10
switch (a) {
    case 10:
        alert(a);
        a = a + 1;
    case 11:
        alert(a);
        a = a + 1;
    case 12:
        alert(a);
        a = a + 1;
    case 13:
        alert(a);
        a = a + 1;
    case 14:
        alert(a);
        a = a + 1;
    case 15:
        alert(a);
        break;
}
//### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function numbers_plus(x, y) {
    return x + y;
}

caller = numbers_plus(1, 5);
alert("Сложение 1 и 5: " + caller);

function numbers_minus(x, y) {
    return x - y;
}
caller = numbers_minus(3, 4);
alert("Вычитание 3 и 4: " + caller);


function numbers_multiply(x, y) {
    return x * y;
}
caller = numbers_multiply(3, 4);
alert("Умножение 3 и 4: " + caller);


function numbers_divide(x, y) {
    return x / y;
}

caller = numbers_divide(3, 4);
alert("Деление 3 и 4: " + caller);
//### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "*":
            return arg1 * arg2;
        case "/":
            if (arg2 == 0)
                break;
            return arg1 / arg2;
        case "+":
            return arg1 + arg2;
        case "-":
            return arg1 - arg2;
    }
}

caller = mathOperation(3, 5, "-");
alert("mathoperation 3, 5 и '-': " + caller);
//### 7. *Сравнить null и 0. Попробуйте объяснить результат. ### 
a = null;
b = 0;
if (a == b)
    alert("0 = null!");
else
    alert("0 != null");

//Null является пустым значением. 0 же является числом, определяющим ничего. 
//Иными словами: 0 является цифрой, а не самим пустым значением. Поэтому они не равны.

//8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
function numbers_exponentiation(number, exponenta) {
    if (exponenta == 1) {
        return number;
    } else {
        return number * numbers_exponentiation(number, exponenta - 1);
    }
}




caller = numbers_exponentiation(3, 3);
alert(caller);