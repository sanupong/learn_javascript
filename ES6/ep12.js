// การ Loop Array
// For Loop, ForEach, ForOf

const data = [10,20,30,40,50]

for(let i = 0 ; i<data.length; i++){
    if (data[i] >= 30) break
    console.log(`ลำดับที่ ${i} = ${data[i]}`);
}
let sum=0
data.forEach(e => {  //ไม่สามารถใส่ break ได้    
    //console.log(`สมาชิกใน Array data = ${e}`);
    sum +=e
    console.log(`ผลรวม = ${sum}`);
});

for ( const element of data ){
    if(element>=30) break
    console.log(`สมาชิก array data = ${element}`);
}

