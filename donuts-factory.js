///////////////////////////////////////////////////////////////////////////////////////// ( EX1 )

// let name = prompt(" Please enter your name : ");
// let Gender = prompt(" Please enter your gender (male or female) : ");
// if (Gender === " male") {
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
/////////////////////////////////////////////////////////////////////////////(2.1)


// let name = prompt(" Please enter your name : ");
// let gender = prompt("Please enter your gender (male, female):");

// while (gender !== "male" && gender !== "female") {
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


/////////////////////////////////////////////////////////////////////////////(2.2)


// let info = [];
// let array = ['username', 'gender', 'type of order', 'order name'];

// for (let i = 0; i < array
// .length; i++) {
//     let answer = '';
    
//     if (array
// [i] === 'gender') {
//         while (answer !== 'male' && answer !== 'female' ) {
//             answer = prompt('Please enter your gender (male, female ):').toLowerCase();
//         }
//     } else {

//         answer = prompt('Please enter your ' + array
// [i] + ':');
//     }
    
//     info.push(answer);
// }

// console.log('User information:', info)

/////////////////////////////////////////////////////////////////////////////(2.7)


// for (let i = 0; i <= 5; i++) {
//     alert(i);
// }


/////////////////////////////////////////////////////////////////////////////(2.8)


// let num = [];
// for (let i = 0; i <= 5; i++) {
//     num += [i]; // num+i=num
// }     
// alert(num);


/////////////////////////////////////////////////////////////////////////////(2.9)



// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }


/////////////////////////////////////////////////////////////////////////////(2.10)



// let num = prompt(" Please enter a num between 0 and 100: ");

// while (num < 0 || num > 100 ) {
//     alert("Error: Please enter num between 0 and 100.");
//     num = prompt("Please enter num between 0 and 100:");
// }

// alert("You entered: " + num);


/////////////////////////////////////////////////////////////////////////////(2.11)


// var num = (prompt("Please enter a num :"));
// var sum = 0;
// for (var i = 0; i <= num; i++) {
//     sum += i;
// }

// alert("The sum of numbers from 0 to " + num + " is: " + sum);

/////////////////////////////////////////////////////////////////////////////(e3)

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

    let name = prompt("Please enter your name: ");
    let gender = prompt("Please enter your gender (male, female): ").toLowerCase();
    while (gender !== "male" && gender !== "female") {
        gender = prompt("Please enter your gender (male, female): ").toLowerCase();
    }
    let orderType = prompt("Would you like to order Donut, Coffee, Ice cream, or Bakery: ");
    let orderName = prompt("Please write the name of the order: ");

    // Create elements
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    const ol = document.createElement('ol');
    const liOrderType = document.createElement('li');
    const liOrderName = document.createElement('li');

    // Set text content
    paragraph.textContent = "Hello " + gender === "male" ? "mr" : "ms" + name  " Your order is getting prepared.";
    liOrderType.textContent = "Order Type: "+ orderType ;
    liOrderName.textContent = "Order Name: "+ orderName;

    // Append elements
    ol.appendChild(liOrderType);
    ol.appendChild(liOrderName);
    div.appendChild(paragraph);
    div.appendChild(ol);

    // Append div to the page
    document.getElementById("user-order").appendChild(div);











    



