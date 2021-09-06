//Arrow Function
//Syntax : [variabl]=(parameter,..)=>[return value]

//แบบเดิม
/* function fullname(fname,lname){
    return fname+lname;
} */
fullname=(fname,lname)=>{return fname+" "+lname}

setAge=(age)=>"อายุ ="+age

console.log(fullname("Pong", "Le"));

console.log(setAge(20));

//Ex1
let arrowFunc1 = value => {
    return value;
};
console.log(arrowFunc1(111));

//Ex2
let arrowFunc2 = value => console.log(value);
arrowFunc2(122);

//Ex3 ถ้าไม่มี Parameter ให้ใส่ () เข้าไปแทน
let arrowFunc3 = () => 133;
console.log(arrowFunc3())

//Ex4  ถ้า function จะต้อง return object ให้ครอบ object ด้วย ()
let getFont = () => ({color: "red", size: 200});
console.log(getFont());

//Ex5 ถ้า parameter มีตั้งแต่ 2 ตัวขึ้นไป จะต้องมี () และคั่นด้วย ,
let sum = (val1, val2, val3) => val1 + val2 + val3;
console.log(sum(1,2,3));

//Ex6 ประการใช้ Parameter แบบ Rest
let max = (...value) => Math.max(...value);
console.log(max(1,2,3,7));
/* จะเหมือนกับเขียน
let max = function(...value){       //parameter แบบ rest
    return Math.max(...value);      // operator สเปรด
}; */

//Ex7 เทคนิค IIFE
let printItem = (
    (item) => function() { console.log(item); }
) ("IIFE Test");
printItem();
/*
   ตัวอย่างนี้เป็นการใช้เทคนิค IIFE กับ ArrowFunction โดยใช้ () ครอบ Arrow Function
   จากนั้นจึงค่า Argument ให้ทีหลัง ซึ่งผลลัพธ์ที่ได้จะ Return Function ออกมากำหนดให้กับตัวแปร
   printItem และก็สามารถเรียก printItem() ได้ตามปกติ
   * แล้ว IIFE คืออะไรล่ะ?
    IIFE (Immediately Invoked Function Expression) การประกาศฟังก์ชั่นที่ไม่ได้ขึ้นต้นด้วยคำว่า
    “function” และทำงานทันทีที่ถูกประกาศ จะเรียกใช้ครั้งเดียวแล้วคืน memory ทันที ซึ่งเป็นรูปแบบของ
    IIFE Design Pattern โดยจะใช้สำหรับครอบชุดของตัวแปรและฟังก์ชั่นเอาไว้ จะไม่สามารถเข้าถึง
    ตัวแปรและฟังก์ชั่นจากภายนอกได้
*/

/* จะเหมือนกับเขียน
var printItem = function(item) {
    return function() { console.log(item); };
}("IIFE Test");
printItem();
*/

//Ex8 Call back Function
/* ArrowFunction สามารถใช้เป็น Call Back Function แล้วส่งมันเป็น Argument ให้กับ Function ตัวอื่น
   โดยตัวอย่างจะแสดงการใช้งาน Method ของ array รับค่า Argument ที่เป็น Arrow Function
*/
var array = [1,2,3,4];
array.forEach( (value, index, arr) => arr[index] = value* 2);
console.log(array);

/* จะเหมือนกับเขียน
var array =[1,2,3,4];
array.forEach(function(value, index, arr){
    return arr[indx] = value * 2;
});
console.log(array);
*/



