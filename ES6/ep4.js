/* String
 - MultiLine String สามารถทำงานกับข้อความยาว ๆ ได้ 
   โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้ `
 - Interpolation สามารถแทรกตัวแปรลงในพื้นที่ String โดยใช้
   ${ชื่อตัวแปร} ร่วมกับ `
*/

let customerName = "เด็กชายโจ้"
let tel = "080-000-0000"
let city = "ระยอง"

const address = 
`ชื่อลูกค่า : ${customerName}
ที่อยู่ ${city} 
เบอร์โทร: ${tel}`

console.log(address);
