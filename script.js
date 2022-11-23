//1
let arr = [1, 2, 3]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
//2
let arr2 = [1, 2, 3]
let sum = arr2[0] + arr2[1] + arr2[2];
console.log(sum);
//3
let arr3 = [1, 2, 3]
arr3.push(4, 5)
console.log(arr3);
//4
let names = prompt('Как ваз зовут?');
let userNames = prompt('Какая у вас фамилия?');
let olds = prompt('Сколько вам лет?');

let box = names.split(' ');
let [name] = box;

let box2 = userNames.split(' ');
let [userName] = box2;

let box3 = olds.split(' ');
let [old] = box3;
console.log(name);
console.log(userName);
console.log(old);