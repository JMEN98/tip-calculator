let btn = document.getElementById('btn')

btn.addEventListener("click",function(){
let billAmout= document.getElementById("bill_amount").value
let tipPercentage = document.getElementById('tip_percentage').value
let TipAmount = document.getElementById("Tip_Amount").value = billAmout/tipPercentage

document.getElementById('Total_bill').value =billAmout + TipAmount
})
console.log("jeff")