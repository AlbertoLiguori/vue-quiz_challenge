//Genera un numero casuale tra min e max
function randomBetween(min, max){
  let random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
      if (random !== 18 &&  random !==10 && random !==72 && random !==7 && random !==64){
  return random;} else{
    return 1

  }
};

// Genera un array di risposte casuali di lunghezza "howmanyanswers"
function genAnswers(howManyAnswers){

  let anArray= [];

  for (i=0; i<=howManyAnswers; i++){
    let randomAnswerObject = {
                              question:randomBetween(0,100),
                              bool:"false",
                              };

    anArray.push(randomAnswerObject)

  }

  return anArray
};

// dati due array prende un elemento del primo array ad un determinato[index]  e lo mescola in posizione casuale nel secondo
function substitution(sourceArray, destinationArray,index){
  destinationArray.splice(randomBetween(0-1,destinationArray.length-1),1,sourceArray[index])
}

//genera le risposte casuali inserisce una corretta inserendola in una posizione casuale
function finalAnswers(index){
let questionArray = [{
                      question:2*5,
                      bool:true,
                     },

                     {
                       question:3*6,
                       bool:true,
                     },

                     {
                       question:8*9,
                       bool:true,
                     },

                     {
                      question:1*7,
                      bool:true,
                    },

                    {
                      question:8*8,
                      bool:true,
                    }

                   ]
  let shuffleArray= genAnswers(4);
  substitution(questionArray, shuffleArray,index)
  console.log(shuffleArray)
  return shuffleArray
}


// let anObject=
//     {
//       domanda:"2*5",
//       answers:[
//                 {
//                   proprietà1:"proprieta11",
//                   proprietà2:"proprieta21",
//                 },
//
//                 {
//                   proprietà1:"proprieta12",
//                   proprietà2:"proprieta22",
//                 },
//       ]
//     }
//
// console.log(anObject.answers)
// console.log(anObject.answers[0].proprietà1)
