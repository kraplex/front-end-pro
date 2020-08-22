// 1 Написать функцию copy(target, origin), которая копирует свойства из объекта origin в объект target и возвращает новый объект со всеми свойствами.
function copy(target, origin) {
    for (let key in origin) {
        target[key] = origin[key]
    } return target
}

// 2 Напишите функцию, принимающую и сравнивающую два объекта. 
//Если объекты содержат одинаковые ключи и значения, то функция возвращает true, если нет - false. 
//Функция должна учитывать, что количество свойств в двух объектах может отличаться.

function isSame(a, b) {
    for (let key in a) {
        if (!(key in b) || a[key] !== b[key]) {
            return false;
        }
    }
    for (let key in b) {
        if (!(key in a) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

//3 Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква.
//Например, если передали строку “aaabbc”, то функция должна сообщить, что буква “a” встретилась 3 раза, буква “b” встретилась 2 раза, а буква “c” - 1 раз. 
//Функция не должна использовать console.log

function counter(str) {
    const result = {};
    const array = str.split("");
    for (var i = 0; i < array.length; i++) {
        let count;
        if (result[array[i]]) {
            count = result[array[i]]
        } else { count = 0 }
        result[array[i]] = count + 1;
    }
    return result
}