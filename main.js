//Satr berilgan bo'lsa, agar satr "hi" bilan boshlansa, rost, aks holda "false" qiymatini qaytaring

let matn="hillo"

let matn2=matn.slice(0,2);

if(matn2=='hi'){
    console.log(true)
}else{
    console.log(false);
}


//Ikkita harorat berilgan bo'lsa, biri 0 dan kichik, ikkinchisi esa 100 dan katta bo'lsa, rostni qaytaring.

let a=-20
let b=100

if(a<0 && b>100){
    console.log(true);
}else{
    console.log(false);
}


//2 ta int qiymati berilgan bo'lsa, agar ulardan biri 10..20 oralig'ida bo'lsa, true qiymatini qaytaring.
let a1=12
let b1=99

if((10<a1 && a1<20) || (10<b1 && b1<20)){
    console.log(true);
}else{
    console.log(false);
}


//Agar raqam 13..19 inklyuziv oralig'ida bo'lsa, biz "o'smir" deb aytamiz. 3 ta int qiymati berilgan bo'lsa, ulardan 1 yoki undan ko'pi o'smir bo'lsa, true qiymatini qaytaring.

let a3=9
let b3=99
let c3=8
if((13<a3 && a3<19) || (13<b3 && b3<19) || (13<c3 && c3<19)){
    console.log(true);
}else{
    console.log(false);
}


//Agar raqam 13..19 inklyuziv oralig'ida bo'lsa, biz "o'smir" deb aytamiz. 2 int qiymati berilgan bo'lsa, agar u yoki boshqasi o'smir bo'lsa, true qiymatini qaytaring, lekin ikkalasi ham emas.

let a4=9
let b4=99
if((13<a4 && a4<19) || (13<b4 && b4<19) ){
    console.log(true);
}else{
    console.log(false);
}


//Agar qator berilgan bo'lsa, agar "del" qatori 1-indeksdan boshlab paydo bo'lsa, o'sha "del" o'chirilgan qatorni qaytaring. Aks holda, satrni o'zgarishsiz qaytaring.

let str="adelbc"

if (str.substring(1, 4) === "del") {
    let newStr= str[0] + str.substring(4);
    console.log(newStr);
  } else {
    console.log(str);
 }


 //Agar berilgan satr "mix" bilan boshlansa, true qiymatini qaytaring, bundan tashqari "m" har qanday bo'lishi mumkin, shuning uchun "pix", "9ix" .. hammasi hisobga olinadi.

 let str1="mixxin"

if (str1.substring(1,3) === "ix") {
    console.log(true);
  } else {
    console.log(false);
 }


 //Satr berilgan boʻlsa, birinchi 2 ta belgidan iborat boʻlgan satrni qaytaring (agar mavjud boʻlsa), lekin birinchi belgi “o” boʻlsa, ikkinchisini esa “z” boʻlsagina kiriting, shuning uchun “ozymandias” “oz” hosil qiladi.

 let str3='ozin'

 
    let result = '';
    
    if (str3.length > 0 && str3[0] === 'o') {
      result += 'o';
    }
    
    if (str3.length > 1 && str3[1] === 'z') {
      result += 'z';
    }
    
    console.log(result);
  
  