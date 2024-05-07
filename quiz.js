var question = [
  {
  question: `Q : Inside which HTML element do we put the javaScript?`,
  option1: `< script >`,
  option2: `< scripting >`,
  option3: `< javascript >`,
  corrAnswer:`< script >`,
  },
  {
  question: `Q : What is the correct JavaScript syntax to change the content of the HTML element below? "\n"<p id="demo">This is a demonstration.</p>`,
  option1: `document.getElementBy Name("p").innerHTML = Hello World!;`,
  option2: ` document.getElement("p".innerHTML = "Hello World!);`,
  option3: `document.getElementByid("demo").innerHTML = "Hello World!;`,
  corrAnswer:`document.getElementByid("demo").innerHTML = "Hello World!;`
},
  {
  question: `Q : Where is the correct place to insert a JavaScript?`,
  option1: `Both the <head> section and th <body> section are correct`,
  option2:"The body section",
  option3: "The head section",
  corrAnswer:`Both the <head> section and th <body> section are correct`,
  },
  {
  question: `Q : The external javaScript file must contain th <script> tag.`,
  option1: `False`,
  option2: `True`,
  option3 :`None of above`,
  corrAnswer:`False`,
  },
  {
      question: "Q : In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "Q : toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "Q : push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "Q : In JS Data types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "Q : Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Q : Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
];

var ques = document.getElementById('ques');
 var option1 = document.getElementById('opt1');
 var option2 = document.getElementById('opt2');
 var option3 = document.getElementById('opt3');
 var btn = document.getElementById('btn');
 var timer = document.getElementById('timer');
 var index = 0;
 var score = 0;
 var min = 1;
 var sec = 59;

var interval = setInterval(function(){
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if(sec == 0){
        min--;
        sec = 59;
    }
    if(min <0){
        min = 1;
        sec = 59;
        nextQuestion();
    }
 },100)

 function nextQuestion(){
    var getOptions = document.getElementsByName('option');

    for(var i=0 ; i < getOptions.length; i++){
        if(getOptions[i].checked){
            var selectedAns = getOptions[i].value;
            var selectedQues = question[index -1].question;
            var selectedOpt = question[index -1][`option${selectedAns}`];
            var correctAns = question[index-1]['corrAnswer'];

            if(selectedOpt == correctAns){
                score++;
            }
        }
        getOptions[i].checked = false;
    }
    btn.disabled = true;

    if(index > question.length-1){
      Swal.fire({
        title: "Good job!",
        text: `Your Percentage is ${((score / question.length) * 100).toFixed(2)}`,
        icon: "success"
      });
           
          clearInterval(interval)
    }
    else{
        ques.innerText = question[index].question;
        opt1.innerText = question[index].option1;
        opt2.innerText = question[index].option2;
        opt3.innerText = question[index].option3;
        index++;
        min = 1;
        sec = 59;
    }
 }

 function target() {
    btn.disabled = false;
  }


