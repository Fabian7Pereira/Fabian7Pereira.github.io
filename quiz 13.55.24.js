const quizData = [
    {
      questionNo : "QUESTION 1 OF 4!",
      question: "What Is Your Main Goal For Getting A Fitbit Device?",
      dyk: "You can access 200+ workout plans, meal plans and more from Fitbit",
      a: "Running",
      b: "Cycling",
      c: "Swimming",
      d: "Walking",
      e: "Weight Lifting",
      f: "Golf",
      g: "Tennis",
      h: "Hiking",
    },
    {
      questionNo : "QUESTION 2 of 4!",
      question: "What Unique Features Are You Looking For?",
      dyk: "You can locate your Fitbit Inspire 2 utilising the Tile app",
      a: "Heart Rate Monitor",
      b: "Built-in GPS",
      c: "Voice To Text Reply",
      d: "Fitbit Pay",
      e: "On-wrist Phone Calls",
      f: "Message And App Replies",
      g: "App & Message Notifications",
      h: "Water Resistant",
      i: "Sp02 Tracking",
      j: "Colour Display",
      k: "Heart Health Notifications",
      l: "Fashion & Style",
    },
    {
      questionNo : "QUESTION 3 of 4!",
      question: "What Is Your Budget Range?",
      dyk: "Fitbit pay is supported by 6 major banks in South Africa",
      a: "R3000 or less",
      b: "R3000 - R5000",
      c: "R5000+",
    },
    {
      questionNo : "QUESTION 4 of 4!",
      question: "What Type Of Fitbit Are You Looking For?",
      dyk: "All fitbits are super cool",
      a: "",
      b: "",
    },
  ];

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const questionNum = document.getElementById('questionNumber')
const dyk = document.getElementById('dyk')
const checkbox = document.getElementsByClassName('.checkbox')
const ans = document.getElementsByClassName('.answer')

const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')
const a4 = document.getElementById('a4')
const a5 = document.getElementById('a5')
const a6 = document.getElementById('a6')
const a7 = document.getElementById('a7')
const a8 = document.getElementById('a8')
const a9 = document.getElementById('a9')
const a10 = document.getElementById('a10')
const a11 = document.getElementById('a11')
const a12 = document.getElementById('a12')
const error = document.getElementById('error')

const con1 = document.getElementById('con1')
const con2 = document.getElementById('con2')
const con3 = document.getElementById('con3')
const con4 = document.getElementById('con4')
const con5 = document.getElementById('con5')
const con6 = document.getElementById('con6')
const con7 = document.getElementById('con7')
const con8 = document.getElementById('con8')
const con9 = document.getElementById('con9')
const con10 = document.getElementById('con10')
const con11 = document.getElementById('con11')
const con12 = document.getElementById('con12')

const i1 = document.getElementById('i1')
const i2 = document.getElementById('i2')
const i3 = document.getElementById('i3')
const i4 = document.getElementById('i4')
const i5 = document.getElementById('i5')
const i6 = document.getElementById('i6')
const i7 = document.getElementById('i7')
const i8 = document.getElementById('i8')
const i9 = document.getElementById('i9')
const i10 = document.getElementById('i10')
const i11 = document.getElementById('i11')
const i12 = document.getElementById('i12')

const ansSubmit = document.getElementById('ansSubmit')
//ansSubmit.style.visibility = 'hidden'
//ansSubmit.disabled = true;

const feature = document.getElementById('feature')

let currentQuiz = 0;
let score = 0;

let firstOption = "";
let secondOption = "";
let finalOption = "";
let content = "";
let emailBody = "";

const exercise = [];
const features = [];
const priceRange = [];
const watchType = [];

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    questionNum.innerText = currentQuizData.questionNo;
    dyk.innerText = currentQuizData.dyk;
    a1.innerText = currentQuizData.a;
    a2.innerText = currentQuizData.b;
    a3.innerText = currentQuizData.c;
    a4.innerText = currentQuizData.d;
    a5.innerText = currentQuizData.e;
    a6.innerText = currentQuizData.f;
    a7.innerText = currentQuizData.g;
    a8.innerText = currentQuizData.h;
    a9.innerText = currentQuizData.i;
    a10.innerText = currentQuizData.j;
    a11.innerText = currentQuizData.k;
    a12.innerText = currentQuizData.l;
    
    if(currentQuiz == 0){
        con1.style.display = 'inline-block';
        con2.style.display = 'inline-block';
        con3.style.display = 'inline-block';
        con4.style.display = 'inline-block';
        con5.style.display = 'inline-block';
        con6.style.display = 'inline-block';
        con7.style.display = 'inline-block';
        con8.style.display = 'inline-block';
        con9.style.display = 'none';
        con10.style.display = 'none';
        con11.style.display = 'none';
        con12.style.display = 'none';
    } else if(currentQuiz == 1){
        con1.style.display = 'inline-block';
        con2.style.display = 'inline-block';
        con3.style.display = 'inline-block';
        con4.style.display = 'inline-block';
        con5.style.display = 'inline-block';
        con6.style.display = 'inline-block';
        con7.style.display = 'inline-block';
        con8.style.display = 'inline-block';
        con9.style.display = 'inline-block';
        con10.style.display = 'inline-block';
        con11.style.display = 'inline-block';
        con12.style.display = 'inline-block';
    } else if(currentQuiz == 2){
        con1.style.display = 'inline-block';
        con2.style.display = 'inline-block';
        con3.style.display = 'inline-block';
        con4.style.display = 'none';
        con5.style.display = 'none';
        con6.style.display = 'none';
        con7.style.display = 'none';
        con8.style.display = 'none';
        con9.style.display = 'none';
        con10.style.display = 'none';
        con11.style.display = 'none';
        con12.style.display = 'none';
    } else if(currentQuiz == 3){
        a1.style.backgroundImage = 'url("images/smartwatch-icon.png")';
        a1.style.height = '200px';
        a1.style.verticalAlign = 'middle';
        a1.style.backgroundColor = '#ffffff;'
        a2.style.backgroundImage = 'url("images/tracker-icon.png")';
        a2.style.height = '200px';
        a2.style.verticalAlign = 'middle';
        con3.style.display = 'none';
        con4.style.display = 'none';
    } else {
        con1.style.display = 'none';
        con2.style.display = 'none';
        ansSubmit.style.display = 'none';
    }
    

} 

////checkbox.addEventListener('click', () => {
////    disableButton();
////})
//
//    checkbox.addEventListener('change', function() {
//    alert("hello");
//  if(checkBoxes > 1){
//      ansSubmit.style.visibility = 'visible';
//  }
//});


ansSubmit.addEventListener('click', () => {   
    if(currentQuiz == 0){
        max3Checkbox(); 
    }else if(currentQuiz == 1) {
        score = 0;
        max3Checkbox();
        if(i1.checked == true){
            score = score + 5;
            features.push(a1.innerText);
        }
        if(i2.checked == true){
            score = score + 15;
            features.push(a2.innerText);
        } 
        if(i3.checked == true){
            score = score + 25;
            features.push(a3.innerText);
        } 
        if(i4.checked == true){
            score = score + 10;
            features.push(a4.innerText);
        } 
        if(i5.checked == true){
            score = score + 25;
            features.push(a5.innerText);
        } 
        if(i6.checked == true){
            score = score + 10;
            features.push(a6.innerText);
        } 
        if(i7.checked == true){
            score = score + 5;
            features.push(a7.innerText);
        } 
        if(i8.checked == true){
            score = score + 5;
            features.push(a8.innerText);
        } 
        if(i9.checked == true){
            score = score + 10;
            features.push(a9.innerText);
        } 
        if(i10.checked == true){
            score = score + 20;
            features.push(a10.innerText);
        } 
        if(i11.checked == true){
            score = score + 15;
            features.push(a11.innerText);
        } 
        if(i12.checked == true){
            score = score + 20;
            features.push(a12.innerText);
        }
        
        if (score >= 55){
             firstOption = "high";
        } else if (score >= 35) {
             firstOption = "mid";
        } else if (score >= 0) {
             firstOption = "low";
        }
            
    } else if (currentQuiz == 2){
        max1Checkbox()
        if(i1.checked == true){
            secondOption = "low";
        }else if(i2.checked == true){
            secondOption = "mid";
        } else if(i3.checked == true){
            secondOption = "high";
        }    
        finalOption = firstOption + secondOption;
    } else if (currentQuiz == 3){
         max1Checkbox();
    }
    
if(currentQuiz < quizData.length){
    loadQuiz()
    } else {
        switch (finalOption) {
            case "lowmid":
                score = score + 10;
                break;
            case "lowhigh":
                score = score + 20;
                break;
            case "midlow":
                score = score - 10;
                break;
            case "midhigh":
                score = score + 10;
                break;
            case "highlow":
                score = score - 20;
                break;
            case "highmid":
                score = score - 10;
                break;
        }
    seeResults(score);
    }
    
    var allCheckBoxes = document.getElementsByTagName("input");
    for (var i = 0; i < allCheckBoxes.length; ++i) {
        allCheckBoxes[i].checked = false;
    }
})

function disableButton() {
    if(checkbox.checked > 1){
        alert("hello");
        ansSubmit.style.visibility = 'visible';
    } else {
        error.innerText = "Please select at least one option!";
        ansSubmit.style.visibility = 'hidden';
    }
}

 function seeResults(score){
//     content = features;
//     feature.innerText = content;
//     getSelectedAnswers()
     
     if(score >= 55){
         window.location.replace("recommendPage2.html");
     }else if(score >= 35){
         window.location.replace("recommendPage3.html");
     }else if(score >= 0){
         window.location.replace("recommendPage1.html");
     }
 }

function max3Checkbox(){
    const checkBoxes = document.querySelectorAll('.checkbox:checked');
    
    if (checkBoxes.length > 3){
        error.innerText = "You can't select more than three options";
    } else if (!checkBoxes.length) {
        error.innerText = "Please select at least one option!";
    } else {
        currentQuiz++;
        error.innerText = "";
        ansSubmit.disabled = false;
    }
}

function max1Checkbox(){
    const checkBoxes = document.querySelectorAll('.checkbox:checked');
    
    if (checkBoxes.length > 1){
        error.innerText = "You cannot select more than one option";
    } else if (!checkBoxes.length) {
        error.innerText = "Please select one option!";
    } else {
        currentQuiz++;
        error.innerText = "";
    }
}

//function getSelectedAnswers() { 
//    content = features;
//    alert(content);
//    
//    feature.innerText = content;
//}

