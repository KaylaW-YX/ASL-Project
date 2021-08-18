var randomCharacter = '';
var button = document.getElementsByClassName("button");
//gets a random character
function getRandomCharacter(length) {
     var randomResult = '';
     const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
     const charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
       randomResult += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomResult;
 }

//gives a random image displayed
function giveDifferentQuestionImg(){
     randomCharacter = getRandomCharacter(1);
     // console.log(randomCharacter); // test
     document.canvas.src = "alphabetAndNum/"+ randomCharacter + ".png";
     // 3 different characters in 3 times 
     var possibleAns = [getRandomCharacter(1), getRandomCharacter(1), getRandomCharacter(1), randomCharacter]; 
     shuffleArr(possibleAns);
     document.getElementById("ans1").innerHTML = possibleAns[0];
     document.getElementById("ans2").innerHTML = possibleAns[1];
     document.getElementById("ans3").innerHTML = possibleAns[2];
     document.getElementById("ans4").innerHTML = possibleAns[3];
     //  console.log(randomCharacter)
}

//shuffles array 
function shuffleArr(array){
     var currentIndex = array.length, randomIndex;
     // While there remain elements to shuffle...
     while (0 !== currentIndex) {
       // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
       // And swap it with the current element.
       [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
     }
     return array;
}

//checks for if the user answer is correct 
function selectAnswer(event){
     //need to know if character selected = randomcharacter var 
     const selectedButton = event.target.innerHTML;
     if (selectedButton == randomCharacter){
     //     event.target.classList.add("btn-correct");
     alert("Correct! Moving on.")
         giveDifferentQuestionImg()
          // console.log(selectedButton, randomCharacter);
          
     } else {
		// event.target.classList.add("btn-wrong")
          alert("try again!")

     }
     // clearClass();
}

function clearClass(event){
     event.target.classList.remove("btn-correct");
     event.target.classList.remove("btn-wrong");
}


//start button
const startButton = document.getElementById('start-btn');

const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startLesson)


function startLesson(){
     startButton.classList.add('hide')
     questionContainerElement.classList.remove('hide')
     giveDifferentQuestionImg();
}
