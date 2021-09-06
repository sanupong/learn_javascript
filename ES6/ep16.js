//Array Reduce

const data = [10,20,30,40]

const mapData = data.map(e=>e)
console.log(mapData);

const filterData = data.filter(e=>e>20)
console.log(filterData)

//array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น) //

// const summation = data.reduce((value,e)=>{
//     const total = e+value
//     return total
// },0)

//เขียนแบบลดรูป
const summation = data.reduce((value,e)=>e+value,0)

console.log(summation)

//Reduce กับ Object
const cart =[
    {name:"Bag", price:2000},
    {name:"Book", price:900},
    {name:"Camera", price:5000}
]

const summation2 = cart.reduce((value2,e2)=>e2.price+value2,0)
console.log(`ลูกค้าต้องชำระเงิน = ${summation2} บาท`);







