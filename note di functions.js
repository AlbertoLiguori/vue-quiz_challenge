function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
};

// function genAnswers(howManyAnswers){
//
//   let anArray= [];
//
//   for (i=0; i<=howManyAnswers; i++){
//     let anObject = {
//       answer:randomBetween(0,100),
//       isCorrect:false,
//     };
//     anArray.push(anObject)
//   }
//
//   console.log(anArray)
//
//   return anArray
//
// };

function genAnswers(howManyAnswers){

  let anArray= [];

  for (i=0; i<=howManyAnswers; i++){
    anArray.push(randomBetween(0,100))

  }

  console.log(anArray)

  return anArray

};

//voglio sostituire all'interno di un array un elemento con un elemento di un altro array
//in una posizione casuale
// function substitution(sourceArray, destinationArray){
//   destinationArray.splice(randomBetween(0,destinationArray.length),1,sourceArray[0])
// }

function substitution(sourceArray, destinationArray,index){
  destinationArray.splice(randomBetween(0-1,destinationArray.length-1),1,sourceArray[index])
}

let letters =["a","b","c","d","e"];
let numbers =[ "1+1","2+1","3+1","4+1","5+1"];

//substitution(numbers, letters)

//console.log(letters)
//console.log(numbers)



//var ciccio = genAnswers(4,questionArray);

//substitution(questionArray, ciccio)


//console.log(ciccio)


function finalAnswers(index){
var questionArray = [2*5, 3*6,8*9,1*7,8*8 ]
  var shuffleArray= genAnswers(4);
  substitution(questionArray, shuffleArray,index)
  return shuffleArray
}

console.log(finalAnswers(1))

// months.splice(4, 1, 'May');
// replaces 1 element at index 4

// function arrayGenerator(elements, range){
//   var numArray=[]
//     while (numArray.length < elements){
//       var el = randomBetween(0, range)
//       if (!(isNumberInArray(el, numArray))){
//         numArray.push(el)
//       }
//     }
//   return numArray
// }
