/*
1.Ozgaruvchilar 3 elon qilsa boladi va 2 xil turga bolinadi: ozgaruvchan va ozgarmas;
1)let ga berilgan qiymatni ozgartirsa boladi
2)var ga ham berilgan qiymatni ozgartirsa boladi
3)const oziga berilgan qiymatni ozgartirib bolmaydi;




2.string,number,boolean,null,undefined




3. Increment berilgan ozgaruvchiga ++ qoyish orqali 1 ta qiymatni berish imkoniyatini beradi,
decrement esa ozgaruvchiga -- qoyish orqali 1 ta qiymatni olish imkoniyatini beradi;
increment = a++, a = a + 1;
decrement = a--, a = a - 1;




4."string" + number = number;





5. && va || mantiqiy operatorlardir. boolean qaytaradi
true && false = false 
false && false = false

true || true = true 
false || true = true;




6. if( a + b > 0){
kod1
}else{
kod2
}
agar if qismi true qaytarsa, if qismi ishlaydi, if qismi false qaytarsa else qismi ishlaydi;




7.else if qoshimcha shart berish uchun ishlatiladi.
if(berilgan shart){
// kod
}else if(qoshimcha shart){
//kod
}else{
//kod
};



8.Massiv malumotlarni index boyicha saqlaydi
let massiv = [ichida malumotlar saqlanadi]  

Massiv oxiridagi elementlarni olish uchun;
let element = massiv[massiv.length - 1];


9.Obyekt qiymat va kalit xolida saqlaydi

let inf = {
  "kalit" = qiymat
}


10. Metod bu obyektga beriladigan uslublar desa boladi;
new Method().toUpperCase() 


*/ 


/*Masalalar*/

// 1.

function bill(a,b){
  console.log(a+b);
}
bill(3,5)



// 2
function findYear(userAge){
 console.log(2022 - userAge)
}

findYear(18)


// 3
const myFunc = (a,b) => {
  if(typeof(a) === "number" && typeof(b) === "number"){
  console.log(a+b)
  }else{
  console.log("not a number")
  }
}
myFunc(5, 2)


































