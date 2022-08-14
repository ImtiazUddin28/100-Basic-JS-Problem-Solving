/*1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples. Write a program to help Harry calculate how much money the
shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
apples is tk 700.*/

function returnMoney(mom,spend) {
    const returnMo=(mom-spend);
    console.log(`Solution of Problem-1 is ` + returnMo);
}
returnMoney(1000,700);

/*2) Write a program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student.*/

function AverageMark(Math,Bio,Che,Phy,Ban) {
    const average=(Math + Bio + Che + Phy + Ban)/5;
console.log(`Solution of problem-2 is ` + average);
}
AverageMark(75.25,65,80,35.45,99.50);

/*3) John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program.*/

function StringCombine(string1,string2) {
    const MainString= `${string1} ${string2}`;
    console.log(`${MainString}`);
}
StringCombine("I am going to be", "an awesome developer")

/*4) Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program. */


function remainderOfFive(num) {
    const remain = num % 5;
    console.log(`Solution of Problem-4 is ` + remain);
}
remainderOfFive(119);


/*5) নি চে র ভে রি য়ে বল ডি ক্লে য়ার এ ক োনটার মধ্যে কি কি সমস্যা আছে । দে খত ো বে র করতে
পার ো কি না?
Var price = 33
var name - Shabana
var boxName = ‘Cocola;
var 88_price = 34;
var enum = -1;
var _$box’78 = ‘Monika’;
var home-address = “kochu khet”; */

console.log("Some problems 2, 3, 4m 6")

/*6) You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.*/
// b) Remove ‘Orange’ and add ‘Watermelon’.
//Method-1
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);
if(bananaIndex !== -1) {
    fruits[bananaIndex] = 'Mango';
}
console.log(fruits);

//Method-2
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);
fruits.splice(bananaIndex, 1, "Mango");
console.log(fruits);

//Method-3
var fruits = ['Apple', 'Banana', 'Orange'];
for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === 'Banana'){
        fruits[i] = 'Mango';
        break;
    }
}
console.log(fruits);

//Method-4
var fruits = ['Apple', 'Banana', 'Orange'];
const newFruits =fruits.map(element=>{
    if(element === 'Banana'){
        return 'Mango';
    }
    return element
})
console.log(newFruits);


/*7) You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using
if-else.*/

Grade = function gradingSystem(num) {
    if(num >=80){
        console.log("You Got A+")
    }
    else if(num >=70){
        console.log("You Got A")
    }
    else if(num >=60){
        console.log("You Got A-")
    }
    else if(num >=50){
        console.log("You Got B")
    }
    else if(num >=40){
        console.log("You Got C")
    }
    else if(num >=33){
        console.log("You Got D")
    }
    else{
        console.log("Sorry, Yod don't pass the exam")
    }
}
Grade(65);

/*8) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else.
9) You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal*/

largestNumber= function(a,b,c){
    if(a>b && a>c){
        console.log(`the largest number is ${a}`);
    }
    else if(a<b && b>c){
        console.log(`the largest number is ${b}`);
    }
    else {
        console.log(`the largest number is ${c}`);
    }
}
largestNumber(49,76,96)
//Problem-4

smallestNumber= function(a,b,c){
    if(a<b && a<c){
        console.log(`the smallest number is ${a}`);
    }
    else if(a>b && b<c){
        console.log(`the smallest number is ${b}`);
    }
    else {
        console.log(`the smallest number is ${c}`);
    }
}
smallestNumber(49,39,36)



/*10) ক্লাস সে ভে র এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়ে ছ। ত োমার বন্ধুআলি য়া, ডালি য়া,
সালি য়া, মালি য়া, লি লি য়া আর জ্বালাইয়া - তাদে র grade তুমি জান ো না। তবে তাদে র নম্বর
জান ো. আলি য়া 95 পে য়ে ছে , ডালি য়া 66 পে য়ে ছে , সালি য়া 80 পে য়ে ছে , মালি য়া পে য়ে ছে 59,
লি লি য়া পে য়ে ছে 47, জ্বালাইয়া পে য়ে ছে 77। তুমি JS code দি য়ে তাদে র grade বে র করে
দি তে পারবে ?
১) যারা ৫০ এর নি চে পে য়ে ছে , তাদে র grade F.
২) যারা ৫০ বা তার উপরে পে য়ে ছে , অথবা ৬০ এর নি চে পে য়ে ছে , তাদে র grade D.
৩) যারা ৬০ বা তার উপরে পে য়ে ছে , অথবা ৭০ এর নি চে পে য়ে ছে , তাদে র grade C.

৪) যারা ৭০ বা তার উপরে পে য়ে ছে , অথবা ৮০ এর নি চে পে য়ে ছে , তাদে র grade B.
৫) যারা ৮০ বা তার উপরে পে য়ে ছে , অথবা ৯০ এর নি চে পে য়ে ছে , তাদে র grade A.
৬) যারা ৯০ বা তার উপরে পে য়ে ছে , তাদে র grade A+.*/

console.log("Same the problem seven");


/*11) তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফি ক
সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে
পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন
হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা
signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো।*/
function crossRoad(signal) {
    if(signal =="green"){
        return "cross the road";
    } else if(signal =="yellow"){
        return "Stop the crossing road";
    }else{
        return "don't cross the road dangerous";
    }
}
console.log(crossRoad("yellow"));
console.log(crossRoad("red"));
console.log(crossRoad("green"));

/*12) প্রতি দি ন ত োমার কাজ কি ?
১) রাত ৮ টা বাজে মডি উল আনলক কর ো
২) ফটাফট ভি ডি ও দে খে দে খে প্রাকটিস কর ো
৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
৫) ক োন কি ছুবঝু তে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
জয়ে ন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
দে খান ো।*/
console.log("It's easy to create")