{
let num = 1223;
let temp = Math.abs(num);
let revnum = 0;

while (temp > 0) {
    let digit = temp % 10;
    revnum = revnum * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log(Math.sign(num) * revnum);
}