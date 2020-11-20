const app= new Vue({
  el:"#root",

  data:{

    title:"Project: Dynamic Quiz",


    questionArray : [
      {
        domanda:"2*5",
        answers:finalAnswers(0),
      },

      {
        domanda:"3*6",
        answers:finalAnswers(1),
      },

      {
        domanda:"8*9",
        answers:finalAnswers(2),
      },

      {
        domanda:"1*7",
        answers:finalAnswers(3),
      },

      {
        domanda:"8*8",
        answers:finalAnswers(4),
      },

    ],

  },
  methods:{
        print:function(){
          console.log(event.target.value)
        }
    }

})


// {{questionArray[qindex].answers[index]}}
