// Array Filter

const data = [10,20,30,40]

const result = data.filter(e=>e>20)

console.log(result)

const data2 = [
    {name:"Pong", salary:30000,department:"Programmer"},
    {name:"JoJo", salary:20000,department:"Marketing"},
    {name:"Nut", salary:10000,department:"Intern"},
    {name:"Bell", salary:50000,department:"Marketing"},
    {name:"Joy", salary:10000,department:"Intern"},
]

const result2 = data2.filter(e2=>e2.salary>10000)
.filter(e=>e.department==="Marketing")

console.log(result2)