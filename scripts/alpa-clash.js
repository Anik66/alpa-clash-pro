// function play() {
//   //step-1:hide the homescreen .to hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById('home-screen');
//   console.log(homeSection);
//   homeSection.classList.add('hidden');
//   //show the playground
//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden')
//   // console.log(playgroundSection.classList);
//   //
// }

function handlekeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);
  
  //stop the game if pressed 'Esc'
  if(playerPressed === 'Escape'){
    gameOver();
  }

  //get the expeced to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet =currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, expectedAlphabet );

  //checked matched or not

if(playerPressed === expectedAlphabet){
  console.log('you get a point');

  const currentScore = getTextElementValueById('current-score')
  //console.log(currentScore);

  const updatedScore = currentScore + 1;

  setTextValueById('current-score',updatedScore)





  //--------------------------
  //update score:
  //1.get the current score
 
  //show the updated score

  // const currentScoreElement = document.getElementById('current-score');
  // const currentScoreText = currentScoreElement.innerText
  // const currentScore = parseInt(currentScoreText)
  // console.log(currentScore);

  

  //  //2.increase the score by 1
  //const newScore= currentScore+1;
  // currentScoreElement.innerText =newScore;


  


  //start a new round
  removeBackGroundColorById(expectedAlphabet);
  continueGame();
}
else{
  console.log('you missed.you last a life ')

   const currentLife = getTextElementValueById('life-score');
   const updatedLife = currentLife -1;

   setTextValueById('life-score',updatedLife);

   if(updatedLife === 0){
    gameOver();
   }

  //------------------------------------
  // //step-1: get the current number
  // const lifeScoreElement =document.getElementById('life-score');
  // const lifeScoreText = lifeScoreElement.innerText;
  // const lifeScore = parseInt(lifeScoreText);

  // //reduce the life count
  // const newLife = lifeScore -1;
  // lifeScoreElement.innerText = newLife;

  //display the updated life count
}
}

document.addEventListener('keyup', handlekeyboardButtonPress);

function continueGame() {
  //generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log('your random alpabet', alphabet);
  //set randomly generated alphabet to the  screen (show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  //console.log(currentAlphabetElement);

  // const currentAlpha = currentAlphabetElement.innerText
  // console.log(currentAlpha);

  currentAlphabetElement.innerText = alphabet;
  //const TestAlpha = currentAlphabetElement.toLowecase();
  console.log(currentAlphabetElement);

  //set background color
  setBackGroundColorById(alphabet);
}
// function continueGame() {

//   const alphabet = getARandomAlphabet();

//   const currentAlphabetElement = document.getElementById('current-alphabet');
//   currentAlphabetElement.innerText = alphabet;

//   setBackgroundColorById(alphabet);
// }
function play() {
  //hide everything show playgrund
  hideElementById('home-screen');
  showElementById('play-ground');
  hideElementById('final-score');

  //reset score live
  setTextValueById('life-score',5);
  setTextValueById('current-score',0)

  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');

  //update final score
  //1.get the final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextValueById('last-score',lastScore);

  //clear the last selected alphabet highlight

  const currentAlphabet = getElementTextValueById('current-alphabet');

 // console.log(currentAlphabet);

 removeBackGroundColorById(currentAlphabet);



}
