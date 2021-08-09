// const startbutton = document.getElementsByClassName("button1");
function giveDifferentQuestionImg(){
     var randomCharacter = getRandomCharacter(1);
     console.log(randomCharacter); // testing--working!
     document.canvas.src = randomCharacter;
     //step 4: display all of the four possible answer choices -- array shuffling 
          //step 4b: using loop to make it correspond to html 1,2.3.4 (innerhtml)
}
//displaying new questions and new possible answers 
giveDifferentQuestionImg();
// Make function that generates random letters (use charat), include numbers, add in append "png"
//make all the file names lowercased

//display new answer in same function 
//loops --> populate answer spots 

//array --> with all the answer (abcd),. 3/4 are random letters shuffle array

var array = ["a","b","c","d"]; // a is correct, rest is incorrect(random) --> shuffle (Random)
          // 0    1    2   3 (RANDOM ORDERING)
var newArray = ["b","a","c","d"] //new shuffled values
//displaying correct the correct answer from left to right (loop)
// variable for storing the the image being shown

//gets a random character
function getRandomCharacter(length) {
     var randomResult = '';
     const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
     const charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
       randomResult += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return "alphabetAndNum/"+ randomResult + ".png";
 }
 
//  console.log(getRandomCharacter(1)); testing out code (works)

// var randomCharacter = 'b' + ".png";

//when user clicks on one answer --> displaying the answer:


