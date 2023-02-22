
import UniversalButton from "../UI/UniversalButton"

function QuizItem({answer, handler}){
    
    return(
        <UniversalButton
            onPress={handler}
        >
            {answer}
        </UniversalButton>
    )
}

export default QuizItem 

  