/* Spread Operator  
   ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติมเครื่องหมาย ... 
   ด้านหน้าตัวแปร Array
*/

const newArr = [100,200,300]

const data = [10,20,...newArr]

console.log(data)
console.log(data.length)

const colors = ["Gree","Blue","White"]
const allColors = ["Red","Yellow",...colors]

const newColors = ["Black", "Gray"]

allColors.push(...newColors)

console.log(allColors);




