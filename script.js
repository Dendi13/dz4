//1
let arr = [1, 2, 3]
for(let key of arr){
    console.log(key)
}
//2
let arr2 = [1, 2, 3]
let sum = 0;
arr2.map((item) => sum += item);
console.log(sum); 
//3
let arr3 = [1, 2, 3]
arr3.push(4, 5)
console.log(arr3);
//4
let box = prompt('Введите ваше имя, фамилию и возраст без запятых');
let array = box.split(' ');

let [userName, name, old] = array;
console.log(name);
console.log(userName);
console.log(old);