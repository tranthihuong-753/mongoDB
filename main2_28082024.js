// string,, number, boolean, array, object 
/* 
var number = 10 
number = 'number'
console.log(number) 
*/

//falsy: 0, ' ', underined, null, false, NAN 
/*
var a = 0
if(a+2<-1){
    console.log(1)
}else{
    console.log(2)
}
    */
// truthy : còn lại 

//template literal để chèn biến vào chuỗi 
// Giống C# ($"{tenBien}") -> In ra giatri_tenBien
/* const age = 10
console.log("my age is " + age)
console.log(`my name is ${age}`) // Là nháy ngược - Dưới Esc , khong phải nháy đơn
 */

// string 
// const str = "Trước lầu Ngưng Bích khóa xuân,Vẻ non xa tấm trăng gần ở chung"
/*console.log(str.length) // 68 = độ dài string 
console.log(str.trim()) // Bỏ khoảng trắng đầu và cuối string 
console.log(str.trim().toUpperCase()) // in hoa str
console.log(str.trim().toLowerCase()) // in thường str
console.log(str.slice(0, 4)) // Lấy 4 ký tự dầu của str
console.log(str.slice(10, 21)) // Lấy ký tự có index từ 10 -> 20 , không lấy 'u'
console.log(str.slice(-1,-6)) // null
console.log(str.slice(-5,-1)) // chun
console.log(str.slice(-7,-1)) // ở chun
console.log(str.slice(-7,0)) // null 
console.log(str.slice(0,-7)) //Trước lầu Ngưng Bích khóa xuân,Vẻ non xa tấm trăng gần 
*/

// 1. Đếm ký tự viết hoa trong str 
/* var count = 0;
for(var i = 0 ; i < str.length ; i++){
    if(str[i] == str[i].toUpperCase()){
        count++;
    }
}
console.log("ký tự viết hoa trong str = " + count)
 */


