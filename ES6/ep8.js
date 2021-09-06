//Default Parameter

getDataCustomer = (customerName,customerAddress="None")=>{ //กำหนดค่าเริ่มต้นที่ตัว Parameter เลย
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ ${customerAddress}`
    return address
}

console.log(getDataCustomer("Pong", "Nonthaburi"))
console.log(getDataCustomer("JoJo"))

