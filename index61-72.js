/*61) তুমি কি একটা শর্ত পালন করলে একটা কি ছুকরবে । শর্ত পূরণ না করলে অন্য কি ছুএকটা
করবে এমন ক োড লি খতে পারবে । অর্থাৎ তুমি কি if-else এর ক োড লি খতে পারবে । পারলে একটা
ক োড লি খে ফে ল ো */

function validName (name) {
    if (name.length >4){
        return "your name is valid"
    }
    else if(name.length <4 && name.length >1){
        return "your name is too short"
    }
    else{
        return "provide a valid name"
    }
}
let studentName= "Imtiaz";
console.log(validName(studentName));

/*62) ত োমাকে যদি বলে একটা while লপু দি য়ে ৭ থে কে ১৯ পর্যন্ত যতগুলা বি জ োড় সংখ্যা আছে
সে গুলা দে খাতে । তুমি কি সে টা দে খাতে পারবে ? পারলে সে ই ক োড লি খে ফে ল ো। */
function oddNumberInLimit(startValue, endValue) {
    let i ;
    if(startValue%2 !== 0){
        i= startValue;
    }
    else{
        i= startValue +1;
    }
    while(i<=endValue){
        console.log(i);
        i +=2;
    }
}
oddNumberInLimit(40,50);
oddNumberInLimit(0,19);

/*63) ত োমাকে যদি বলা হয় তুমি একটা array ডি ক্লে য়ার করবে । এবং সে টার মধ্যে কয়টা উপাদান
আছে সে টা বে র করবে হবে । সে ই array এর এর মধ্যে চতুর্থ পজি শন এর উপাদান চে ইঞ্জ করতে
হবে । array এর মধ্যে দইুটা উপাদান য োগ করতে হবে । এবং একটা উপাদান কে বে র করে দি তে
হবে । তুমি কি সে টা করতে পারবে । */

let elementArray = [101, 102, 103, 104, 105];
console.log(elementArray.length);
elementArray[3]=100;
console.log(elementArray);
let sumOfTwoElement= elementArray[1]+ elementArray[2];
console.log(sumOfTwoElement);
let outElement = elementArray.splice(1,1)
console.log(outElement);
console.log(elementArray)

/*64) তুমি কি একটা ফর লপু দি য়ে ক োন একটা array এর সবগুলা উপাদানকে দে খাতে পারবে । সে টা
রে গুলার for লপু হ োক বা for of হ োক। হলে সে ই স্টাইলে একটা ক োড লি খে ফে ল ো। */
let forOfArray =[51,52,53,54,55];
for(elm of forOfArray){
    console.log(elm);
}
let forArray = [31,32,33,34,35,36,37,38,39];
for (let i = 0; i < forArray.length; i++) {
    console.log(forArray[i]);
}


/*65) ত োমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সে গুলাকে
console log করে দে খাতে সে টা কি তুমি পারবে ? তাহলে তুমি সে ই ক োড করে ফে ল ো */

let arrayNum = [76,77,78,79,80,81,82,83,84,85];
for (let i = 0; i < arrayNum.length; i++){
    let val = arrayNum[i];
    if(val>80){
        console.log(val);
    }
}

/*66) তি নটা সংখ্যার গুনফল বে র করে ফাইনাল রে জাল্ট আউটপুট হি সে বে রি টার্ন করতে হবে । তুমি
কি সে ই ক োড লি খতে পারবে । যদি পার ো তাহলে সে ই ক োড লি খে ফে ল ো। */
function multiplyOfNumbers(a,b,c){
    let multiplied = a*b*c;
    return multiplied;
}
let totalNum= multiplyOfNumbers(4,4,4);
console.log(totalNum);

/* 67) একটা অবজেক্ট ডিক্লেয়ার করবে । সেটাতে তিনটা প্রপার্টি থাকবে । এবং ক োন একটা প্র োপার্টি
এর মান চে ইঞ্জ করবা। */
let mobileFeatures ={
    brandName: "Samsung Mobile",
    ram: "4gb",
    camera: 16
}
console.log(mobileFeatures.brandName)
mobileFeatures.brandName = "Realme Nazro";
console.log(mobileFeatures.brandName)



/* 68) সি ম্পল একটা ফাংশন লি খতে হবে । যে টার নাম হবে feetToInch এবং এই ফাংশন
ইনপুট হি সে বে নি বে feet আর রি টার্ন করবে inch । অর্থাৎ এই ফাংশনকে ক োন
একটা ফি ট বলে দি লে সে রি টার্ন হি সে বে বলে দি বে কত ইঞ্চি হয়। */

function feetToInch(foot){
    let inchValue = foot*12;
   return inchValue;
}
let inchValueOne = feetToInch(12);
let inchValueTwo = feetToInch(10);
console.log(inchValueOne);
console.log(inchValueTwo);

/* 69) একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দি য়ে একটা ফাংশন
লি খবে । এই ফাংশনে ইনপুট হি সাবে কে উ সে ন্টি মি টার দি বে আর সে ই সে ন্টি মি টার
কে মি টার এ কনভার্ট করে রে জাল্ট রি টার্ন করবে । */

function centimeterToMeter(centimeter) {    
    let meterValue = centimeter/100;
    return meterValue;
}
let meterValueOne = centimeterToMeter(50);
let meterValueTwo = centimeterToMeter(2000);
console.log(meterValueOne);
console.log(meterValueTwo);

/* 70) আরে কটা ফাংশন লি খবে যে টার নাম লি খবে । যে ই ফাংশনে র নাম হবে paperRequirements
এই ফাংশনে র প্যারামি টার হি সে বে তি নটা প্যারামি টার হবে । প্রথম প্যারামি টার হবে তুমি প্রথম বই
কত কপি ছাপাতে চাও। সে কে ন্ড প্যারামি টার হবে তুমি সে কে ন্ড বই কত কপি ছাপাতে চাও। আর
থার্ড প্যারামি টার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ ক োন বই এর কত কপি ছাপান ো
হবে সে টাই প্যারামি টার হি সে বে নি বে ।
এইবার ভাল ো করে খে য়াল কর ো।
প্রথম বই ছাপান োর জন্য পৃষ্ঠা লাগবে ১০০ টা
সে কে ন্ড বই ছাপান োর জন্য পৃষ্ঠা লাগবে ২০০ টা
তৃতীয় বই ছাপান োর জন্য পৃষ্ঠা লাগবে ৩০০ টা
এখন ত োমার কাজ হচ্ছে paperRequirements নামক ফাংশন লি খে ফে লা যাতে । সে ই ফাংশনকে
কল করে ক োন বই এর কত কপি লাগবে বলে দি বে প্যারামি টার হি সে বে । আর ফাংশন হি সাব করে
বলে দি বে ত োমার সর্বম োট কতপৃষ্ঠা কাগজ লাগবে ।
উত্তর হি সে বে সংখ্যা রি টার্ন করবে । */

function paperRequirements(firstQuantityOfBook, secondQuantityOfBook, thirdQuantityOfBook) {
    let numberOfPagesInFirstBook = 100;
    let numberOfPagesInSecondBook = 200;
    let numberOfPagesInThirdBook = 300;
    let totalPagesOfBook = (numberOfPagesInFirstBook*firstQuantityOfBook) + (numberOfPagesInSecondBook*secondQuantityOfBook) + (numberOfPagesInThirdBook*thirdQuantityOfBook);
    return totalPagesOfBook;
}
let stepOne= paperRequirements(5,3,2);
let stepTwo= paperRequirements(5,4,2);
console.log(stepOne, stepTwo);

/* 71) একটা ফাংশন লি খবে । এই ফাংশনে র নাম হবে bestFriend তারপর সে ই ফাংশনে
ইনপুট প্যারামি টার হি সে বে একটা array নি বে । সে ই array এর মধ্যে ত োমার সব
ফ্রে ন্ডে র নাম থাকবে । এখন ত োমার কাজ হচ্ছে যে ফ্রে ন্ড এর নাম সবচে য়ে বড় সে ই ফ্রে ন্ড এর
নাম রি টার্ন করে দে য়া। এই ক্ষে ত্রে তুমি নামটা অর্থাৎ ফ্রে ন্ডে র নাম (স্ট্রি ং) রি টার্ন করতে হবে । */

function getBestFriend(friendList){
    let bestFriend= friendList[0];

     for (let i = 0; i < friendList.length; i++){
         let friend = friendList[i];
         if (friend.length > bestFriend.length){ 
                bestFriend = friend;
            }   
        }
        return bestFriend;
 }
 let listOne = ["aynul","masud","sayma","nannu","riaz","rabbani","Jakia Sultana","misbah","abu zafar"];
 let listTwo = ["tanvir","tarif","raihan","misbah","nazmul","mizan","SaifUddin","sajid","amjat"]
 let bestListOne = getBestFriend(listOne);
 let bestListTwo = getBestFriend(listTwo);
 console.log(bestListOne);
 console.log(bestListTwo);

 /* 72) একটু ট্রিকি। একটা array এর মধ্যে অনেক গুলা সংখ্যা থাকবে ।
ত োমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চে ক করা। এবং সংখ্যা
গুলা যদি পজি টিভ সংখ্যা হয়। অর্থাৎ শনূ্য বা শন্যেূন্যে র চাইতে বড় হয় তাহলে
সে গুলাকে ক োন একটা array এর মধ্যে রাখবে । আর যদি নে গে টিভ সংখ্যা হয়।
তাহলে লপুটা স্টপ করে দি বে । এবং লপু বন্ধ করার আগ পর্যন্ত যতগুলা পজি টিভ
সংখ্যা পাওয়া গে ছে । সে গুলা রি টার্ন করে দি বে । */

function listOfPositiveValues(numbers){
    let newNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number >= 0){
            newNumbers.push(number);
        }
        else{
        break;
        }
    }
 return newNumbers;
}

let numbersListOne =[12,13,14,11,-9,15,16,17,0,18,-1,23,-14,-24,07];
let numbersListTwo =[11,3,14,11,9,15,-16,17,0,18,-1,23,-14,-24,07];
let positiveNumberOne = listOfPositiveValues(numbersListOne);
let positiveNumberTwo = listOfPositiveValues(numbersListTwo);
console.log(positiveNumberOne);
console.log(positiveNumberTwo);




 
