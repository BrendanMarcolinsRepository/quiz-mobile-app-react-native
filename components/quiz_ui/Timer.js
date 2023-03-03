import { useState, useEffect } from "react"

import { FlatList, Text, View, StyleSheet, ActivityIndicator} from "react-native"

function Timer ({time, length , answered, setAnswered, currentQuestion ,setCurrentQuestion, gameOver , setGameOver, setUpdate}) {


    const [countDown, setCountDown] = useState(5)


    if(answered && countDown === 0){
        
        if(currentQuestion + 1 >= length){
            
            setGameOver(true)
        }else{
            setCurrentQuestion(prev => prev + 1)
            setAnswered(false)
            setUpdate(false)
        }

    }

    useEffect(() => {
        let interval = setInterval(() => {
            setCountDown(lastTimerCount => {
                if(lastTimerCount === 0){

                }else {
                    lastTimerCount <= 1 && clearInterval(interval)
                    return lastTimerCount - 1
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [countDown])

    return (
        gameOver ? <Text>Next Question In: {countDown}</Text> :  <Text>Finished In: {countDown}</Text> 
    )

}

export default Timer