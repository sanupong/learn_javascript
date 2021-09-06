//เพิ่มลบสมาชิกใน array
// push, pop, shift, unshift

const data = [10,20,30]
console.log(data)
data.push(...[500,1000,2000]); //ใช้ Spread Operator ด้วย push จะเพิ่มสมาชิกใน array ต่อท้าย
console.log(data)

data.pop() //จะ remove สมาชิกใน Array ตัวหลังสุดออก
console.log(data)

data.shift()  //จะ remove สมาชิกใน array ตัวหน้าสุดออก
console.log(data)

data.unshift(...[1,5])  // จะ Add สมาชิกใน array เข้าไปด้านหน้า
console.log(data)







