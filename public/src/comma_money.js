'use strick';

const money =  prompt("숫자를 입력해주세요");//'1000000';
const money_arr = money.split("");

money_arr.reverse();

let result_arr = money_arr.map((value, idx) => {
    if ( idx != 0 && idx % 3 == 0) {
        return `${value},`;
    }
    return value;
});

const result_text = result_arr.reverse().join("");
document.body.innerHTML = `${result_text}`;

console.log(result_text);

