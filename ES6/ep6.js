/* Rest Parameter
    ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function
    โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...  (คล้าย ๆ spread operator)
*/

summation=(x,y)=>{
    return x+y
}

summation2=(...numberArr)=>{
    let total=0
    for( let number of numberArr) total+=number
    return total
}


console.log(summation(2,3));

console.log(summation2(500,1000,2000))