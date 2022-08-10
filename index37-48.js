
/* 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
as the input parameter and will return the sum of the odd numbers. */

function findOddSum(numOfArray){
    let sum = 0;
    for(let i = 0; i < numOfArray.length; i++) {
        let num = numOfArray[i];
        if(num%2 !== 0){
            sum =sum +num;
    }
}
return sum;
}

let oddArray = [5,7,8,10,45,30];
let oddArray2 = [5,7,8,9,4,3];
console.log(findOddSum(oddArray));
console.log(findOddSum(oddArray2));



/* 38) leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টা
চে ক কর ো। Leap year হলে ফাংশন true রি টার্ন করবে আর leap year না হলে false রি টার্ন করবে । */

function isLeapYear(year) {
    if((year % 4 == 0) && (year % 100 !=0) || (year % 400==0)){
        return true;
    }
    else{
        return false;
    }
  }

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2022));
console.log(isLeapYear(2300));

/*39) ত োমার বয়স কি odd নাকি even সংখ্যা সে টা চে ক কর একটা ফাংশন দি য়ে । সে ই ফাংশনকে ক োন সংখ্যা প্যারামি টার হি সে বে দি লে , সে ই সংখ্যা Even হলে ফাংশন true রি টার্ন করবে আর Odd হলে false রি টার্ন করবে । */

function isEvenAge(age){
    if(age%2 !==1){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEvenAge(27))
console.log(isEvenAge(28))
console.log(isEvenAge(29))

/* 40) এমন একটা ফ্যাংশনা লি খ ো যে টাকে তুমি ঘন্টাকে ইনপুট প্যারামি টার হি সে বে দি বে । আর সে সে ই ঘন্টাকে মি নি টে কনভার্ট করে মি নি ট রি টার্ন করবে। */

function hourTominiutes(hour) {  
    let minitues= hour*60;
    return minitues;
}
console.log(hourTominiutes(6));

/* 41) একটা লপু লি খতে হবে যে টা ১ থে কে ১০০ পর্যন্ত যত সংখ্যা আছে সে টা দে খাবে */
i =1;
while(i<=100){
    console.log(i);
    i++;
}

/* 42) ৫০ থে কে ৮০ এর মধ্যে যত ো বি জ োড় সংখ্যা আছে সে গুলাকে দে খাবে । */
    for(i=50; i<=80; i++){
        if(i%2 !== 0){
            console.log(i);
    }
}

/* 43) তি নটা সংখ্যা এর য োগ করতে পারবে এমন একটা ফাংশন লি খ ো */

function totalValue(a,b,c){
    let totalVal= a +b +c;
    return totalVal;
}
console.log(totalValue(9,10,11));

/*44) ত োমাকে ফাংশনে র ইনপুট হি সে বে সে লসি য়াস দি বে । তুমি ক্যালকুলে শন করে তাপমাত্রা ফারে নহাইট এ কনভার্ট করে সে টার আউটপুট রি টার্ন করবে */
function celcicusToFarhenight(c) {
    let f = (9/5)*c+32;
    return f;
}
console.log(celcicusToFarhenight(36.60));

/* 45) একইভাবে উল্টা হি সাব করবে । যাতে ত োমাকে ফারে নহাইট হি সে বে তাপমাত্রা দি লে সে টাকে সে লসি য়াস এ কনভার্ট করে আউটপুট দি বে । */

function farhenightToCelcius(f){
    let c =(f - 32)*5/9;
    return c;
}
console.log(farhenightToCelcius(99))

/* 46) কে উ ১০০ এর মধ্যে কত মার্ক্স্ পে য়ে ছে সে টা ত োমাকে বলে দি বে । তুমি একটা ফাংশন দি য়ে বলে
দি বে সে এ+ পাবে নাকি অন্য ক োন গ্রে ড পাবে । */

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


/* 47) সুদে র হি সাব করবে । জাস্ট হি সাব কে মনে করতে হয়। সে ই চি ন্তায় করবে । সুদ ভাল ো না খারাপ সে টা এখন চি ন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলর্মু া থাকলে সে টা কি ভাবে ক োড এ লি খতে হয় সে ই এঙ্গে ল থে কে করার চে ষ্টা কর ো। */
function amountOfInterst(p,r,n){
    let I =p*(r/100)*n;
    return I;
}
console.log(amountOfInterst(5000,10,6));


/* 48) Suppose, you have an array with 8 elements. Find the smallest element of
that array.Now for the previous array, try to find the second largest element. */
function smallestNum(listNum){
    let small = listNum[0];
for(i=0;i<listNum.length;i++) {
    let num =listNum[i];
    if(num <small){
        small= num;
    }
}
return small;
}
let listNumOne =[5,7,8, 10,-3,-17, 45, 3, 2, 12];
console.log(smallestNum(listNumOne));


let listNum =[5,7,8, 10,-3,-17, 45, 3, 2, 12];
let first = -1 , second = -1;
    for(let i = 0; i <= listNum.length-1; i++){
        if(listNum[i] > first){
            second = first;
            first = listNum[i];
        }
        else if( listNum[i] > second && listNum[i] != first){
            second = listNum[i];
        }
    }
 console.log(second);



