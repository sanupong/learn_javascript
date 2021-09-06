//Object

//Variable เก็บข้อมูล
const username = "Pong";
const age=25;
const address="Bangkok"

//การสร้าง Object
/*
const customer = {
    customerName : username,
    age, //กรณีชื่อตัวแปร และชื่อ propety เป็นชื่อเดียวกัน ยุบเขียนแค่ตัวเดียวได้
    address //กรณีชื่อตัวแปร และชื่อ propety เป็นชื่อเดียวกัน ยุบเขียนแค่ตัวเดียวได้
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า ="+this.customerName)
    }
}
*/
// หรือจะรวบเหลือบรรทัดเดียวก็ได้
const customer ={customerName: username, age, address, showData(){console.log("ข้อมูลลูกค้าชื่อว่า ="+this.customerName)}}

//console.log(customer);
customer.showData();