//splice & slice
// splice (ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สามาชิกที่ต้องการแทรกเข้าไปแทนตำแหน่งที่ลบ)
// slice (ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1)

const data = [10,20,30,40,50]

console.log(data)

data.splice(1,1,15)  
console.log(data)

const result = data.slice(2,3)
console.log(result)
