// ค้นหาข้อมูลใน array
// indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["Red", "Green", "Blue", "Purple", "White"]

console.log(colors);

const index = colors.indexOf("White");
console.log(index);

const result = colors.find(element=>element==="Green");
console.log(result);

const searchIndex = colors.findIndex(element=>element==="Blue");
console.log(searchIndex);



