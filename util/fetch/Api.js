import axios from 'axios'


export function getData(questionNumbers,cateogoryNumbers,difficulty){

   console.log("api" + questionNumbers)
   console.log("api" + cateogoryNumbers)
   console.log("api" + difficulty)

    axios.get(
        //`https://opentdb.com/api.php?amount=${questionNumbers}&category=${cateogoryNumbers}&difficulty=${difficulty}&type=multiple`
       `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple`
    ).then((json) => console.log("right herer" + json))
    

    

    /*
    const quizData = []

    for(const data in result){
        quizData.push(data)
    }
    */
    //return result


}