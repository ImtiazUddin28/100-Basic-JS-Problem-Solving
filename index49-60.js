/*49) Write a function and take an array as a parameter. Find the average of all the elements of that array and return this average. */

function arrayAverage(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
let arrOne = [5, 6, 7, 8, 9, 10];
let arrTwo = [5, 6, 7, 8, 9, 10, 3, 16];
console.log(arrayAverage(arrOne));
console.log(arrayAverage(arrTwo));

/*50) Write a function which takes the height and width of a rectangle as
parameters. Find out the area of that rectangle and print the result.*/

function areaOfRectangle(width, height) {
  let area = width * height;
  return area;
}
console.log(areaOfRectangle(10, 8));

/*51) একটা ক োড লি খ ো। যে টা দি য়ে ক োন একটা array এর মধ্যে সবচে য়ে ছ োট
সংখ্যা বে র করে দি তে পারবে । */
function smallestNum(listNum) {
  let small = listNum[0];
  for (i = 0; i < listNum.length; i++) {
    let num = listNum[i];
    if (num < small) {
      small = num;
    }
  }
  return small;
}
let listNumOne = [5, 7, 8, 10, -3, -17, 45, -27, 3, 2, 12];
console.log(smallestNum(listNumOne));

/*52) একটা ক োড লি খ ো যে টা দি য়ে তি নটা সংখ্যার মধ্যে সবচে য়ে ছ োট সংখ্যা বের করে দিবে । */

smallestNumber = function (a, b, c) {
  if (a < b && a < c) {
    console.log(`the smallest number is ${a}`);
  } else if (a > b && b < c) {
    console.log(`the smallest number is ${b}`);
  } else {
    console.log(`the smallest number is ${c}`);
  }
};
smallestNumber(49, 39, 36);
smallestNumber(49, 19, 26);

/*53) একটা ফাংশন লি খ ো। সে ই ফাংশনে র মধ্যে ইনপুট হি সে বে একটা array নি বে ।সে ই array এর মধ্যে অনে কগুলা সংখ্যা থাকবে । ত োমার কাজ হবে ইনপুট নে য়া
array এর মধ্যে যতগুলা সংখ্যা আছে । সে ই সংখ্যা গুলার গড় বে র করবে ।
তারপর সে ই গড় ফাংশনে র রি টার্ন হি সে বে দি য়ে দি বে । একটুচি ন্তা কর ো। বঝু ার চে ষ্টা কর ো। ট্রাই কর ো। দে খ ো পার ো কি না। */

function arrayAverage(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
let arrThree = [5, 6, 7, 8, 9, 10, 17, 19];
let arrFour = [5, 6, 7, 8, 9, 10];
console.log(arrayAverage(arrThree));
console.log(arrayAverage(arrFour));

/* 54) একটা ফাংশন লি খ ো। যে টা ইনপুট প্যারামি টার হি সে বে একটা আয়তক্ষে ত্রে র দৈ র্ঘ্য আর উচ্চতাকে নি বে । তারপর সে ই আয়তক্ষে ত্র এর area (আয়তন) কেরে জাল্ট হি সে বে রি টার্ন করবে । */

function areaOfRectangle(width, height) {
  let area = width * height;
  return area;
}
console.log(areaOfRectangle(10, 8));

/*55) (ট্রি কি ) ক োন একটা array এর মধ্যে অনে কগুলা সংখ্যা আছে । সে ই সংখ্যাগুল োথে কে second largest সংখ্যা বে র করার একটা প্র োগ্রাম লি খ ো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রে জাল্ট দে খে বঝেুঝে বঝেুঝে করার চে ষ্টা কর ো */
let listNum = [5, 7, 8, 10, -3, -17, 45, 3, 2, 12];
let first = -1,
  second = -1;
for (let i = 0; i <= listNum.length - 1; i++) {
  if (listNum[i] > first) {
    second = first;
    first = listNum[i];
  } else if (listNum[i] > second && listNum[i] != first) {
    second = listNum[i];
  }
}
console.log(second);

/*56) একটা ফাংশন লি খ ো। সে টার মধ্যে তি নটা প্যারামি টার নি বে । এই তি নটা
প্যারামি টার হবে ক োন একটা ত্রি ভুজে র তি নটা বাহু এর দৈ র্য্য। এখন ত োমার কাজ
হচ্ছে ফাংশনে র ভি তরে কি ছুহি সাব নি কাশ করে ত্রি ভুজে র area (আয়তন) বে র
করা। ক োন একটা ত্রি ভুজে র তি নটা বাহুর দৈ র্য্য দে য়া থাকলে সে টা থে কে কি ভাবে
আয়তন বে র করতে হয় সে ই ফর্মুলর্মু া গুগল থে কে খুজেঁজে বে র কর ো। */

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  return area;
}
console.log(areaOfTriangle(5, 12, 13));

/*57) ক োন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কি না। সে টা চে ক করার একটা
ফাংশন লি খ ো। */
function primeNumber(number) {
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
    // check if number is greater than 1
    else if (number > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
    
    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
}
}
console.log(primeNumber(17));
console.log(primeNumber(21));
console.log(primeNumber(1));
console.log(primeNumber(-21));

/*58) দইুটা ভে রি য়ে বল এর মধ্যে য োগ, বি য় োগ, গুণ, ভাগ কি ভাবে করতে হয় সে টা কি জান ো।
অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জান ো। তাহলে নাম্বার টাইপে র দইুটা ভে রি য়ে বল
লি খ ো তারপর তাদে র য োগ করে সে টার মান আরে কটা ভে রি য়ে বল এ রাখ ো। একইভাবে ওই দইুটা
ভে রি য়ে বল এর মধ্যে বি য় োগ, গুন, ভাগ এবং ভাগশে ষ বে র কর ো। */


//yes


/*59) তুমি কি দইুটা ভে রি য়ে বল এরমধ্যে তুলনা করতে পার ো। কম্পারি জন করতে পার ো। যে দইুটা
ভে রি য়ে বল এর মধ্যে প্রথমটা সে কে ন্ডটা এর চাইতে ছ োট, বড়, অসমান, সমান , ছ োট বা সমান,বড় বা সমান। এইগুলা চে ক করতে পার ো। অর্থাৎ <, >, ==, !=, <=, >= চি হ্নগুলা ব্যবহার করতে
পার ো। তাহলে দইুটা সংখ্যা টাইপে র ভে রি য়ে বল ডি ক্লে য়ার করে তাদে রকে এই ছয়ভাবে তুলনা করে
ক োড লি খে ফে ল ো। */

//yes

/* 60) ত োমার যদি দইুটা শর্ত পূরণ করতে বলে । এবং দইুটা শর্তে র মধ্যে দইুটাই পূরণ করতে হবে ।
তাহলে তুমি কি সে টা চে ক করতে পারবে ? একইভাবে যদি বলে তুমি দইুটা শর্তে র যে ক োন একটা
পূরণ করতে পারবে । অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পার ো কি না। যদি পার ো তাহলে
নি জে নি জে এই রকমে র ক োড লি খে ফে ল ো। */

//yes