///////////////////////////////////////////////////////////////////////////////////////// ( EX1   if else  )
// let  تعريف المتغيرات نطاق محدد //  const المتغيرات الثابتة / لا يمكن إعادة تعريفه في نفس النطاق  var : 
// let name = prompt(" Please enter your name : ");
// let Gender = prompt(" Please enter your gender (male or female) : ");
// if (Gender === " male") {                      //التحقق من القيمة والنوع
//   alert(" Hello mr " + name);
// }
//  else if (Gender === "female") {
//   alert(" Hello ms " + name);
// } else {
//   alert(" Welcome " + name);
// }
// let orderType = prompt(
//   " Would you like to order Donut, Coffee, Ice cream, or Bakery "
// );
// let orderName = prompt(" Please write the name of the order : ");
// alert("Your order is getting prepared  " + name);
// console.log(
//   " You Have one Customer " + name + " has ordered " + orderType + " ."
// );
/////////////////////////////////////////////////////////////////////////////(ex 2.1  Loops)


// let name = prompt(" Please enter your name : ");
// let gender = prompt("Please enter your gender (male, female):");

// while (gender !== "male" && gender !== "female") {       /// للتحقق من عدم المساواة
//     gender = prompt("Please enter your gender (male, female):").toLowerCase();
// }

// if (gender === "male") {
// alert(" Hello mr "+ name)
//  }

//  else {
//     alert(" Hello ms "+ name)
// }
// let orderType = prompt(" Would you like to order Donut, Coffee, Ice cream, or Bakery ");
// let orderName = prompt(" Please write the name of the order : ");
// alert("Your order is getting prepared  " +name);
// console.log(" You Have one Customer " + name + " has ordered " + orderType + " .");


/////////////////////////////////////////////////////////////////////////////(ex 2.2  loop array)


// let info = [];
// let array = ['username', 'gender', 'type of order', 'order name'];

// for (let i = 0; i < array
// .length; i++) {
//     let answer = '';
    
//     if (array [i] === 'gender') {
//         while (answer !== 'male' && answer !== 'female' ) {
//             answer = prompt('Please enter your gender (male, female ):').toLowerCase();
//         }
//     } else {

//         answer = prompt('Please enter num to hent ' + array [i] + ':');
//     }
    
//     info.push(answer);         /بإضافة قيمة إلى نهاية المصفوفة
// }

// console.log('User information:', info)

/////////////////////////////////////////////////////////////////////////////(ex 2.7)


// for (let i = 0; i <= 5; i++) {
//     alert(i);
// }


/////////////////////////////////////////////////////////////////////////////(ex 2.8)


// let num = [];
// for (let i = 0; i <= 5; i++) {
//    num.push(i); 
// }     
// alert(num);


/////////////////////////////////////////////////////////////////////////////(ex 2.9)



// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) { // هل الرقم الحالي من مضاعفات ال  باقي قسمه 03
//         console.log(i);
//     }
// }


/////////////////////////////////////////////////////////////////////////////(ex 2.10)



// let num = prompt(" Please enter a num between 0 and 100: ");

// while (num < 0 || num > 100 ) {
//     alert("Error: Please enter num between 0 and 100.");
//     num = prompt("Please enter num between 0 and 100:");
// }

// alert("You entered: " + num);


/////////////////////////////////////////////////////////////////////////////(ex 2.11)


// var num = (prompt("Please enter a num :"));
// var sum = 0;
// for (var i = 0; i <= num; i++) {
//     sum += i;
// }

// alert("The sum of numbers from 0 to " + num + " is: " + sum);

/////////////////////////////////////////////////////////////////////////////(ex 3 function )

//let name = prompt(" Please enter your name : ");
// function askForGender() {
//     let mf = prompt("Please enter your gender (male, female):");

//     while (mf !== "male" && mf !== "female") {
//         mf = prompt("Please enter your gender (male, female):").toLowerCase();
//     }

//     return mf;
// }
// let Gender = askForGender();

// if (Gender === "male") {
//     alert("Hello mr " + name);
// } else {
//     alert("Hello ms " + name);
// }

////////////////////////////ex4//////////////////////////////////////


// let name = prompt("Please enter your name: ") ;
// let age = prompt("How old are you: ") ;

// let gender = prompt("Please enter your gender (male, female): ").toLowerCase();
// while (gender !== "male" && gender !== "female") {
//     gender = prompt("Please enter your gender (male, female): ").toLowerCase();
// }

// let orderType = prompt("Would you like to order Donut, Coffee, Ice cream, or Bakery: ") ;
// let orderName = prompt("Please write the name of the order: ") ;


// const div = document.createElement('div');
// const paragraph = document.createElement('p');
// const ol = document.createElement('ol');
// const liOrderName = document.createElement('li');
// const liGender = document.createElement('li');
// const liAge = document.createElement('li');
// const liOrderType = document.createElement('li');


// liOrderName.textContent = "Customer Name : " + name;
// liGender.textContent = "Customer Gender : " + gender;
// liAge.textContent = "Customer Age : " + age;
// liOrderType.textContent = "Order Type : " + orderType;

// div.appendChild(paragraph);
// div.appendChild(ol);
// ol.appendChild(liOrderName);
// ol.appendChild(liGender);
// ol.appendChild(liAge);
// ol.appendChild(liOrderType);

// document.getElementById("user-order").appendChild(div);


//////////////////////////////////////////////////////////////////////////////event

document.getElementById("user-order-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const orderType = document.getElementById("order-type").value;
        const drinkType = document.querySelector('input[name="drink-type"]:checked').value;
        
        const div = document.createElement('div');
        const paragraph = document.createElement('p');
        const ol = document.createElement('ol');
        const liOrderName = document.createElement('li');
        const liGender = document.createElement('li');
        const liAge = document.createElement('li');
        const liOrderType = document.createElement('li');
        const liDrinkType = document.createElement('li');
        
        liOrderName.textContent = "Customer Name: " + name;
        liGender.textContent = "Customer Gender: " + gender;
        liAge.textContent = "Customer Age: " + age;
        liOrderType.textContent = "Order Type: " + orderType;
        liDrinkType.textContent = "Drink Type: " + drinkType;
        
        div.appendChild(paragraph);
        div.appendChild(ol);
        ol.appendChild(liOrderName);
        ol.appendChild(liGender);
        ol.appendChild(liAge);
        ol.appendChild(liOrderType);
        ol.appendChild(liDrinkType);
        
        document.getElementById("user-order").appendChild(div);
        
        // Reset form fields
        document.getElementById("user-order-form").reset();
    });
    
      







    



