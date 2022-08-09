const nextBtn = document.getElementById("nextBtn");
const RulesBox = document.querySelector('.rulesBox');
const backBtn = document.getElementById("backBtn");
const startQuiz = document.getElementById("startQuiz");
const Question = document.querySelector(".Question");
const Previous = document.querySelector(".prevQues");
let optionList = document.querySelector(".myOption");
const timelines = document.querySelector(".questionHeader .time-lines")

const timecount = document.querySelector(".timecount .second");
nextBtn.onclick = () => {
  RulesBox.classList.add("activeInfo");
}

backBtn.addEventListener("click", function () {
    RulesBox.classList.remove("activeInfo");
})


startQuiz.onclick =() =>{
    Question.classList.add("activeQuiz"); 
    showQuestion(0)
    Starttimer(15);

    starttimeline(0)
}





const nextQues = document.getElementById("nextQues");



let qcount =0;
let counter;
let timevalue =15;
let widthValue = 0;

nextQues.onclick =() => {
    if (qcount <questions.length -1) {
        qcount++
        showQuestion(qcount)
        clearInterval(counter);
        Starttimer(timevalue);
        
        clearInterval(counterline);
        starttimeline(widthValue)

        nextQues.style.display = 'none' ;
        
    }
}


function showQuestion(index) {
    let queText = document.querySelector(".text");
    
    let queTag = "<span>"+ questions[index].numb + '.' + questions[index].question +"</span>";
    queText.innerHTML = queTag;


    
    let optionTag =
    '<div class="option">'+ questions[index].options[0]+'</div>'+
    '<div class="option">'+ questions[index].options[1]+'</div>'+
    '<div class="option">'+ questions[index].options[2]+'</div>'+
    '<div class="option">'+ questions[index].options[3]+'</div>'
     optionList.innerHTML = optionTag;

     const tottalQues = document.querySelector(".tottalQues");
     const tottalqueTag = '<p>'+ questions[index].numb  +' Of 5</p>';
     tottalQues.innerHTML = tottalqueTag;

     
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i<option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
        
 }

 function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterline);
    let userAns = answer.textContent;
    let correctAns = questions[qcount].answer;

    let alloption = optionList.children.length;


    let tick = '<div class="tickicon"><i class="fa-solid fa-circle-check"></i></div>'
    let cross = '<div class="crossicon"> <i class="fa-solid fa-circle-xmark"></i></div>'

    if (userAns == correctAns) {
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tick);
    } else {
        answer.classList.add("incorrect");
       
        answer.insertAdjacentHTML("beforeend", cross);

        for (let i=0; i<alloption; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("class", "option correct")
                optionList.children[i].insertAdjacentHTML("beforeend", tick);
            }
        }
      
    }

    for (let i=0; i<alloption; i++){
        optionList.children[i].classList.add("disabled");
    }
     nextQues.style.display = 'block' ;
 }


function Starttimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timecount.textContent = time;
        time--
        if (time <9) {
           let addzero = timecount.textContent;
           timecount.textContent = 0 + addzero;
        }

        if (time <0) {
            clearInterval(counter)
            timecount.textContent = "00";

        }
    }
}

function starttimeline(time) {
    counterline = setInterval(timer, 50);
    function timer() {
        time += 1;
        timelines.style.width = time + "px";

        if (time>319) {
            clearInterval(counterline);
        }

    }
}

    
