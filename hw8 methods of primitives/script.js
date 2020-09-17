//1  Написать функцию isSymbolPresentInString(str,symbol) - возвращает true если символ найден в строке и false если нет.
//isSymbolPresentInString("abc","a") // true
//isSymbolPresentInString("abc","e") // false 

function isSymbolPresentInString(str, symbol) {
    const array = Array.from(str);

    const result = array.some((item) => {
        return item === symbol
    })
    return result
}

//2 Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого найденного символа в строке, или -1 если символ не найден
//getSymbolIndex("hello lol","h") // 0
//getSymbolIndex("hello lol","l") // 2
//getSymbolIndex("hello lol","v") // -1

function getSymbolIndex(str, symbol) {
    const array = Array.from(str);
    const result = array.indexOf(symbol)
    return result
}

//3 Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе
//getNumberOfEven(223344) // 4
//getNumberOfEven(111) // 0

function getNumberOfEven(n) {
    const string = String(n);
    const array = Array.from(string);
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result = result + 1
        } else result = result
    } return result
} 

