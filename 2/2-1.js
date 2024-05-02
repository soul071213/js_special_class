// document.write("환영합니다."); //출력

// var 변수명; 또는 var 변수명=값;

// var 변수="사용할 문자나 숫자";
// var 변수=숫자; 또는 Numver("문자형숫자");
// var 변수=true or false; 또는 Boolean(데이터);


// var box;
// box =100;
// box=30;
// document.write(box);

// var a = true;
// var b = false;
// var c = 10 > 5; //true
// var d = Boolean(null); //false 
// document.write(a, "<br>");
// document.write(b, "<br>");
// document.write(c, "<br>");
// document.write(d, "<br>");

// var s;      //undefined
// var t=hello;
// t=null;

// typeof 변수 또는 데이터;

// var num=20;
// var str="kimpembe";

// document.write(typeof num,"<br>");
// document.write(typeof str,"<br>");

// var result;
// var num1=15;
// var num2=2;

// result = num1 + num2;
// document.write(result, "<br>"); // 17
// result = num1 - num2;
// document.write(result, "<br>"); // 13
// result = num1 * num2;
// document.write(result, "<br>"); // 30
// result = num1 / num2;
// document.write(result, "<br>"); // 7.5
// result = num1 % num2;
// document.write(result, "<br>"); // 1

// let t1="kim";
// let t2="pem";
// let t3="be";
// let t4=" is king";

// result = t1 + t2 + t3 + t4; 
// document.write(result);

// Var : 중복 선언 가능
// let : 중복 선언 불가능, 재할당 가능
// const : 중복 선언 불가능, 재할당 불가능

// var num1=10;
// var num2=3;

// num1 += num2;
// document.write(num1, "<br>"); // 13
         
// num1 -= num2;
// document.write(num1, "<br>"); // 10
         
// num1 *= num2;
// document.write(num1, "<br>"); // 30
         
// num1 %= num2;
// document.write(num1, "<br>"); // 0
// let num1=10;
// num1--; //9
// document.write(num1, "<br>");

// num1++; //10
// document.write(num1, "<br>");    
// let result;
// let num2=20;
// result = num2++;  //result: 20, num2: 21  
// document.write(result, "<br>"); 

// result = ++num2;  //result: 22, num2: 22  
// document.write(result, "<br>"); 


// var a = 10;
// var b = 20;
// var c = 10;
// var f = "20";
// var result;

// result = a > b;  // false
// document.write(result, "<br>");
// result = a < b;  // true
// document.write(result, "<br>");
// result = a <= b; // true
// document.write(result, "<br>");
// result = b == f;  // true
// document.write(result, "<br>");
// result = a != b;   // true
// document.write(result, "<br>");
// result = b === f;  // false
// document.write(result, "<br>");

// var a = 10, 
//     b= 20, 
//     c = 0, 
//     d = "hello";
//     //변수 타입 변수명, 변수명; 을하면 여러개 가능
// var result;
// result = b > a || b <= c || a > c;
// document.write(result, "<br>");

// result = a > b || b < c || d;
// document.write(result, "<br>");

// result = a <= b && b >= c && c > a;
// document.write(result, "<br>");

// result = a <= b && c && b >= c;
// document.write(result, "<br>");

// result= !(a > b);
// document.write(result, "<br>");
// var a = 10;
// var b = 3;
// var result = a > b ? "javascript" : "hello";
// document.write(result); //jvaascript

// let height=171;
// let weight=66;

// let health = (height-100)*0.9;
// let iff = health > weight ? "적중체중 이상입니다" : "적중체중이하입니다."
// document.write("당신의 몸무게는 "+weight+"이고","<br>");
// document.write("당신의 적중 몸무게는 "+health+"이고"+iff);

// // prompt("질문", "기본 응답");
// let height = prompt("당신의 키는 ?","0");
// let weight = prompt("당신의 몸무게는 ?","0");

// let health = (height-100) * 0.9;
// alert("적중 몸무게는 "+health+"이고");
// alert(health > weight? "적중 체중이상입니다":"적중 체중이하입니다.");

// 진영이의 하루 지출 내역은 교통비 3,000원, 식비 6,000원, 음료비 3,000원입니다. 삼항 조건 연산자를 사용하여 하루 적정 지출 비용인 1만 원을 초과했을 경우에는 "000원 초과"라고 출력하고, 아닐 경우에는 "돈 관리 잘 했어요!"라고 출력하세요.

// var price1 = 3000;
// var price2 = 6000;
// var price3 = 3000;

// document.write(price1+price2+price3>=10000?"돈 관리 못했노":"돈관리 잘했노");

// 질의응답 창을 이용하여 4분기 판매량을 입력하고, 전 분기 평균 판매량보다 판매량이 높거나 같을 경우에는 '판매량이 평균 이상입니다.'라고 출력하고, 낮을 경우에는 '판매량이 평균 미달입니다.'라고 화면에 출력하세요.
let sum=3300;
let avg=3300/3;

let kim=prompt("4분기 평균 매출을 입력하시오","0");s
document.write(kim>=avg?"열심히 했노":"더 열심히 해라e");

