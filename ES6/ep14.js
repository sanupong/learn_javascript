//Array map

const numbers = [10,20,30,40]
console.log(`number = ${numbers}`)
const result = numbers.map(e=>e*2)

console.log(`Array Map = ${result}`)



const data = ["Rainy","Sunny","Strom", "Sunny", "Rainy", "Clear sky", "Foggy"]

const result2 = data.map((e,i)=>{
    return `วันที่ ${i+1} , สภาพอากาศ = ${e}`
})

console.log(result2)

const data2 =[
    {day:"01/06/2564", weather:"Sunny", temp:27},
    {day:"03/06/2564", weather:"Rainy", temp:23},
    {day:"04/06/2564", weather:"Foggy", temp:18},    
]

const result3 = data2.map(e1=>e1.weather)

console.log(result3)


