function camelize(str) {
    return str
        .split('-')
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
        .join('');
}

let result = camelize("hello-world");
console.log(result)