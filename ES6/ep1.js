// Block Scope (let/constant)

//การเขียนแบบเดิม
//var x = 10
//var y = 50
let x = 10
let y = 50 //เขียนแบบใหม่โดยใช้ let

if (x===10) {
    //var y = 500
    let y = 500 //เขียนแบบใหม่โดยใช้ let
    console.log("y ใน = " + y);
}
console.log("y นอก = " + y);

const i = 50 //ต้องมีการประกาศค่าเริ่มต้นด้วย
i = 100; //จะเปลี่ยนแปลงค่าไม่ได้
console.log(i);







