//Task 1
const appearDiv = document.getElementById("appear-div");
const appearButton = document.getElementById("appear-button");

appearButton.addEventListener("click", function(){
    if(appearDiv.style.display === "none"){
        appearDiv.style.display = "block";
    }else{
        appearDiv.style.display = "none";
    }
})

//Task 2
const div = document.createElement("div")
document.body.appendChild(div)
const divId = div.setAttribute("id", "card")


const hTag = document.createElement("h2")
hTag.innerText = "Gandalf"
div.appendChild(hTag)

const aTag = document.createElement("a")
aTag.innerText = "Go to profile"
const aTagDiv = aTag.setAttribute("href", "#")
div.appendChild(aTag)

//Task 3
// let questions = [
//     {
//         question: "What is 2+3",
//         answers: {
//             a: "3",
//             b: "4",
//             c: "5"
//         },
//         correctAnswer: "c"
//     }, 
//     {
//         question: "What is 10-5",
//         answers: {
//             a: "5",
//             b: "4",
//             c: "3"
//         },
//         correctAnswer: "a"
//     }, 
//     {
//         question: "What is 4*7",
//         answers: {
//             a: "27",
//             b: "28",
//             c: "29"
//         },
//         correctAnswer: "b"
//     }
// ]


// let start = true

// function startGame(id){
//     const question = document.getElementById("Questions")

//     question.innerText = questions[id].question

//     const answ1 = document.getElementById("answer-1")
//     const answ2 = document.getElementById("answer-2")
//     const answ3 = document.getElementById("answer-3")
    
//     answ1.innerText = questions[id].answers[0].a
//     answ2.innerText = questions[id].answers[1].b
//     answ3.innerText = questions[id].answers[2].c

//     const corrAnswer = questions[id].correctAnswer




// }