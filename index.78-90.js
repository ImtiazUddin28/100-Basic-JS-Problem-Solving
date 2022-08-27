// 78) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

let arrowFunction = (a,b,c)=> a*b*c;
console.log(arrowFunction(4,5,6));

// 79) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat abiryani.

const lines=`I am a web developer. 
I love to code. 
I love to eat biryani.`;
console.log(lines);
// 80) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.
let defaultParam = (a,b=8)=> a-b;
console.log(defaultParam(5))


// 81) It will take an array where the array elements will be the
// name of your friends
const friendList=["Rakib","Shakeib","Hridoy"];

// 82) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.
const friends=friendList.map(function(element){
    const length= element.length;
    if(length%2==0){
        return element;
    }
    else{
       +
        
       
    }
})
console.log(friends)

// 83) Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.


// 84) Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result


// 85) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

// 86) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

// 87) Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.

// 88) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

// 89. Challenging Follow above array of objects. So, you have 3 objects as// array element. Can you find out the total sum from here?
// 20 + 15 + 22 = 57 . The output will be 57
// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.


// 90.{
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "((Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
// ● Console the value of email
// ● Console the value of address
// ● Console the value of city
// ● Console the value of lat
// ● Console the value of company
// name