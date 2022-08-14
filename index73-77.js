/*Problem:73  radianToDegree

ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে। */

function radianToDegree(radian) {
    //error handling if radian value is not a number
    if (typeof radian !== "number") {
      return "Please provide the radian value in number";
    }
    // Convert radian to degrees
    let OriginalDegree = radian * (180 / Math.PI);
    let degree = OriginalDegree.toFixed(2);
    return degree;
  }
  
  // Test the radian to degrees.
  console.log(radianToDegree(10));
  console.log(radianToDegree(25));
  console.log(radianToDegree(199));
  console.log(radianToDegree("hi friends"));
  
  /* Problem:74  isJavaScriptFile 

  ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । */
  
  function isJavaScriptFile(fileName) {
    //error handling if file is not string
    if (typeof fileName !== "string") {
      return "Please provide a valid file name";
    }
    //check the file with endsWith method
    if (fileName.endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  }
  
  //Test the javascript file
  console.log(isJavaScriptFile("app.js"));
  console.log(isJavaScriptFile("js.png"));
  console.log(isJavaScriptFile("image.js.png"));
  console.log(isJavaScriptFile("images.jpg.js"));
  
/* Problem 75: oilPrice
ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
ভিডিও ভালো করে দেখবে। 
প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */
  
  function oilPrice(dieselLitre, petrolLitre, octaneLitre) {
    //error handling if the diesel or petrol or octane price is not provide by number;
    if (
      typeof dieselLitre !== "number" ||
      typeof petrolLitre !== "number" ||
      typeof octaneLitre !== "number"
    ) {
      return "Please enter litre amount in number";
    }
    //Calculations with amount of litre and the price of diesel, petrol and octane;
    let dieselPrice = dieselLitre * 114;
    let petrolPrice = petrolLitre * 130;
    let octanePrice = octaneLitre * 135;
    let totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
  }
  
  // Test the oilPrice
  console.log(oilPrice(1, 1, 1));
  console.log(oilPrice(30, 20, 10));
  console.log(oilPrice(1, 0, 2));
  console.log(oilPrice(0, 2, 3));
  console.log(oilPrice(0, "two", 3));
  console.log(oilPrice("three", 4, 3));
  console.log(oilPrice(4, 3, "five"));
  
 /* Problem 76: publicBusFare
একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । */


  
  function publicBusFare(tourist) {
    //error handling if tourist amount is not provide in number
    if (typeof tourist !== "number") {
      return "Please enter people amount in number";
    }
    // calculation with bus capacity and micro bus capacity and public ticket price with remaining tourist;
    let busCapacity = 50;
    let microBusCapacity = 11;
    let publicBusTicketPrice = 250;
    let restAfterBusFillUp = tourist % busCapacity;
    let restAfterMicroBusFillUp = restAfterBusFillUp % microBusCapacity;
    let totalCost = restAfterMicroBusFillUp * publicBusTicketPrice;
    return totalCost;
  }
  
  //Test the cost
  console.log(publicBusFare(50));
  console.log(publicBusFare(55));
  console.log(publicBusFare(112));
  console.log(publicBusFare(235));
  console.log(publicBusFare(365));
  console.log(publicBusFare("hundread"));
  console.log(publicBusFare("200"));
  
  /*Problem 77: isBestFriend
  তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।*/
  
  function isBestFriend(friendOne, friendTwo) {
    //error handling if friendOne or friendTwo is not an object
    if (typeof friendOne !== "object" || typeof friendTwo !== "object") {
      return "Please enter a object";
    }
    // "are they each other best friend" this logic is checking
    if (
      friendOne.name == friendTwo.friend &&
      friendOne.friend == friendTwo.name
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the best friend
  
  friend1 = { name: "abul", friend: "babul" };
  friend2 = { name: "babul", friend: "abul" };
  friend3 = { name: "abul", friend: "kabul" };
  friend4 = { name: "kabul", friend: "sabul" };
  friend5 = { name: "doe", friend: "alex" };
  friend6 = { name: "john", friend: "doe" };
  console.log(isBestFriend(friend1, friend2));
  console.log(isBestFriend(friend3, friend4));
  console.log(isBestFriend(friend5, friend6));
  console.log(isBestFriend("rakib", friend6));
  console.log(isBestFriend(friend5, 78));
  console.log(friend5.property1)
  