const arrayNums = [1, 2, 3, 4];

function multiplicarPor10(num) {
    return num*10;
}

const result = arrayNums.map(multiplicarPor10)

console.log(result);