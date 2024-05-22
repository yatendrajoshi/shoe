  // JavaScript for navigation functionality
//   const slides = document.querySelectorAll('.singleSlide');
//   let currentSlide = 0;

//   function showSlide(index) {
//       slides.forEach((slide, i) => {
//           slide.style.left = i === index ? '0' : '100%';
//       });
//   }

//   function nextSlide() {
//       currentSlide = (currentSlide + 1) % slides.length;
//       showSlide(currentSlide);
//   }

//   function prevSlide() {
//       currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//       showSlide(currentSlide);
//   }

//   // Initial display: Show the first slide
//   showSlide(currentSlide);

// let age=24;
// // console .log(age);
// let price=10.25;
// fullname="tony stark";
//  const student ={
//     fullName :"yatendra joshi",
//     age: 20,
//     ispass: true,
//     cgpa: 8.2,

//  };
//  student["age"] = student["age"]+1;
 

//  const profile={
//    username:"yatendra joshi",
//    isfollow:true,
//    followers:251,
//    following:5,

//  }
//  console.log(typeof profile ["username"]);

//  operators

//  let a=10;
//  let b=10;

// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a**b=",a**b);
// console.log("a%b=",a%b);


// unary operator
//    let  a = 10;
//    let b = 10;
// console.log("a=",a,"&b=",b);

// a++;
// console.log(a);

// assignment operators
 
// += ,  -= , *=  , /= , **= ,
// let a=5;
// let b=6;
// a += 4;
// console.log("a =",a) //9

// comparison operator

// equal to (==)
// not equal to (!=)
// equal to &  datatype (===)
// not equal to & datatype (!==)
// <=,>=,<b,>,

//  let a=5;
//  let b=3;
//  console.log("a != b",a != b);

// logical operator
// logical and (&&) 
// logical or (||)
// logical Not(!)

//conditional statement
//  if statement
//  let mode="light";
//  let color;

//  if(mode === "dark"){
//     color = "black"
//  }

//  if(mode === "light"){
//     color = "white"
//  }

//  console.log(color);


// ternary operators

// condition? true output: false output;

// let age=25;

// let result= age>=18?"adult":"not adult";
// console.log(result);


// question 1


// let num=prompt("yatendra");

// if(num%2===0){
//     console.log(num,"number is even")
// }
// else{
//     console.log(num,"number is odd")
// }

// question 2

// let score=prompt("percentage to grade");

// if( score>=80 && score<=100){
//    grade="A"
// }
// else if( score>=70 && score<=79){
//     grade="B "
// }
// else if( score>=50 && score<=69){
//     grade="C"
// }
// else if( score>=33 && score<=49){
//     grade="D"
// }
// else{
//     grade="F"
// }
// console.log(grade,"is your grade");


// loops and string 

//  for(let num=1; num<=5;num++){
//     console.log("Hello World")
//  }

// for loop
// sum of numbers 
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum)

//for in loop
// let student={
//     name:"yatendra",
//     age:20,
//     cgpa:8.5,
//     ispass:true,
// };

// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

//question(print odd numbers 1 to 10)

// for(let num=0;num<=10;num++){
//     if(num%2!==0){
//         console.log("num",num);
//     } 
// };

//question 2 (game)

// let gamenum=50;

// let usernum= prompt("guess the number");
// while(usernum != gamenum){
//    usernum= prompt(" you guess the  wrong number  try again!");
// }
// console.log("congratulations you entered the right number");


//strings

//  let str = "yatendra";
//  console.log(str[5]);

// template literals
// let obj={
//     item:"pen",
//     price:10,
// };
// let output = 'the cost of ${obj.item} is ${obj.price} rupees';
// console.log(output);

//  (/n)  is used for new line 
//  (/t)  is used for tab space


// string method (function)
// to upper case= str.toUpperCase()   ("abc" = "ABC")
// to lower case= str.toLowerCase()    ("ABC" = "abc")
// to remove white space = str.trim()
// (concat) to add two strings= str1.concat(str2);   or    str1+str2;
// to return the partof strings = str.slice(starting index, ending index?);
// to replace the value = str.replace(searchVal,newVal);   for one time in single string

// to replace all coming matching words in string use = str.replaceAll(searchVal,newVal);

// to find the character at perticular index= str.charAt(index value);

// // Question 
// let fullName = prompt("enter your fullname with no space");
// let userName = "@" + fullName + fullName.length ;
// console.log(userName);


//  ARRAY


// let marks=[85, 58, 65, 89,25];
// console.log(marks);

// // to change or update array at any index 
// marks[2]=55;

// let heros=["deadpool", "wolverine", "thanos", "ironman"];
// for(let i=0; i< heros.length; i++){
//     console.log(heros[i]);
// };


// average of Array

// let marks = [85, 96, 44, 37, 60];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(avg);
   
 // 10% offer at every item


// let items=[556, 568, 965, 325, 753];
// 1 way to solve


// let idx=0;
// for(let val of items){
//     console.log("value of index",idx,"is", val);
//     let offer = val/10;
//     items[idx] = items[idx]- offer;
//     console.log("value after offer",items[idx]);
//     idx++;
// 

//2 way to solve
// let items=[556, 568, 965, 325, 753];

// for (let i=0;i<items.length;i++){
//    let offer= items[i]/10;
//    items[i] -= offer;
// }
// console.log(items);

// functons  
// functions are used to stop repetation in code;

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("i love js");


// to add two digits make a function

// function sum(x, y){
//     console.log(x+y);
// }


// arrow functions (=>)

// const arrowSum = (a,b) => {
//     console.log(a+b);
// }

// const arrowMulti = (a,b) =>{
//     console.log(a*b);
// };

//question crete a funtion to count vowels

// function countVowel(str){
//     count=0;
//     for(const char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ){
//             count++;
//         }
//     }
//     console.log(count);
// }


// forEach loop in Array
//  let arr =["pune", "delhi", "mumbai", "mathura"];

//  arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(),idx, arr);
//  })

// question=   what is higher order function
// answer=   a callback function called to another function which return function
  

// print the square of each number
// let arr=[1, 2, 3, 4, 5];
 
// arr.forEach((val => {
//     console.log(val*val);
// }))

// another way to solve it.

// let num=[25, 45, 75];

// let numSquare= (num) => {
//     console.log(num*num);
// }

// num.forEach(numSquare);

// map method  in Array
//  map is used to create new array of values and forEach is used to give value after any function

// let nums=[ 52, 65, 52 ];

//  let newArr= nums.map((val) => {
//     return val*2;
// });
// console.log(newArr);


// filter mathod in array 

// let arr=[2, 5, 8, 6, 3];

//  let evenArr = arr.filter((val) => {
//     return val%2 !==0;
// });

// console.log(evenArr);

// Reduce method in array
// it permorm some operation and reduce to array to single value like average and sum


// let arr=[5, 6, 7, 8, 9];
// const output= arr.reduce((res, curr) =>{
//     return res+curr;
// });
// console.log(output);

// to print the largest number in array by reduce method

// let arr=[5, 6, 9];
// const output= arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);

// question  to filter out the marks in array of students that score 90+ marks
//  let marks=[90,95,65,89,99,52];
//  const output= marks.filter((val) =>{
//     return val>90;
//  });
//  console.log(output);


// // question 2
// let n = prompt("enter a number");

// let arr=[];
//  for(i=1;i<=n;i++){
//     arr[i-1]=i;
// };
// console.log(arr);

// let sum = arr.reduce((prev,curr) =>{
//     return prev+curr;
// });
// console.log("sum=",sum);
// let factorial = arr.reduce((prev,curr) =>{
//     return prev*curr;
// });
// console.log("factorial=",factorial);



// DOM model (document object model) 

// dom manipulation (selection)

// selecting with id 
//document.getElementById("myid")

// selecting with class
//document.getElementsByClassName("myclass");

// selecting with tag 
//document.getElementByTagName("p");

// query selector
// let elements = document.querySelector(All= to select all)("p" // .class  //#id);
// //console.dir(elements);
// example

//  let firEl = document.querySelectorAll("h1");
//  console.dir(firEl);


//dom pproperties

// tagName = return tag for Node
//dom manupulation


// atributes
// getAttribute(attr); to get attribute
// setAttributes(attr); to set attributes
// div.style.backgroundColor = "red";  to set any style of any div or elements


// insert elements 

// to create elements  



































































document.addEventListener('DOMContentLoaded', function () {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let listItemDom = document.querySelector('.carousel .list');
    let thumbnailDom = document.querySelector('.carousel .thumbnail');
    let thumbnails = thumbnailDom.querySelectorAll('.item');

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    function resetAutoNext() {
        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }

    function showSlider(type, index = 0) {
        let items = listItemDom.querySelectorAll('.item');
        carouselDom.classList.remove('next', 'prev');

        if (type === 'next') {
            listItemDom.appendChild(items[0]);
            thumbnailDom.appendChild(thumbnails[0]);
            carouselDom.classList.add('next');
        } else if (type === 'prev') {
            listItemDom.prepend(items[items.length - 1]);
            thumbnailDom.prepend(thumbnails[thumbnails.length - 1]);
            carouselDom.classList.add('prev');
        } else if (type === 'thumbnail') {
            // Move the clicked thumbnail to the end and shift others to the left
            listItemDom.appendChild(items[index]);
            thumbnailDom.appendChild(thumbnails[index]);
        }

        thumbnails = thumbnailDom.querySelectorAll('.item'); // Re-query the thumbnails after DOM changes
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next', 'prev');
        }, timeRunning);

        resetAutoNext();
    }

    nextDom.onclick = function () {
        showSlider('next');
    };

    prevDom.onclick = function () {
        showSlider('prev');
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.onclick = function () {
            showSlider('thumbnail', index);
        };
    });

    resetAutoNext(); // Start the auto-next functionality
});



        //   drop down button innavbar 


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // FOOTER//
  // Simple animation for newsletter subscription
  document.querySelector('.newsletter input[type="submit"]').addEventListener('click', function() {
    alert('Thank you for subscribing!');
  });


// bubble
  const magnifier = document.getElementsById('magnifier');
    const magnificationFactor = 2; // Change this to increase/decrease the zoom

    document.addEventListener('mousemove', function(e) {
        const bgX = e.pageX * magnificationFactor - magnifier.offsetWidth / 2;
        const bgY = e.pageY * magnificationFactor - magnifier.offsetHeight / 2;
        magnifier.style.left = e.pageX - magnifier.offsetWidth / 2 + 'px';
        magnifier.style.top = e.pageY - magnifier.offsetHeight / 2 + 'px';
        magnifier.style.backgroundImage = `url(${window.location.href})`; // Use the current page's background
        magnifier.style.backgroundPosition = `-${bgX}px -${bgY}px`;
    });

    ocument.querySelectorAll('.footer-links a').forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline';
        link.style.transition = 'text-decoration 0.3s';
      });
      link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none';
      });
    });
    
    // Dynamic comment box expansion
    const commentBox = document.querySelector('.footer-form textarea');
    commentBox.addEventListener('focus', () => {
      commentBox.style.height = '100px';
      commentBox.style.transition = 'height 0.5s';
    });
    commentBox.addEventListener('blur', () => {
      commentBox.style.height = '50px';
    });
    