function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBackGroundColorById(elementId){

  const element = document.getElementById(elementId);
  console.log(element)
  element.classList.add('common')
  

}
function removeBackGroundColorById(elementId){

  const element = document.getElementById(elementId);
  console.log(element)
  element.classList.remove('common')
  

}

function getTextElementValueById(elementId){
   const element = document.getElementById(elementId);
   const elementValueText = element.innerText;
   const value = parseInt(elementValueText);
   return value;
}

function getElementTextValueById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;

}

function setTextValueById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;

}

// function setBackgroundColorById(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.add('bg-orange-400');
// }

function getARandomAlphabet() {
  const alphabetString = 'abcdfghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  console.log(alphabet);
  return alphabet;
}

// function getARandomAlphabet(){
//   //get or create an alpabhet array
//   const alphabetString ='abcdfghijklmnopqrstuvwxyz';
//   const alphabets=alphabetString.split('');
//   //console.log(alphabets);

//   //get a random index 0 to 25
//   const randomNumber = Math.random()*25;
//   const index = Math.round(randomNumber);
//    const alpabhet = alphabets[index];
//    //console.log(index,alpabhet);
//    return alpabhet;

// }
