import { createContext , useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";


const QuizContext = createContext();

const initialState = {
    category : '',
    result_count : 0
}

const QuizProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);

    console.log(state);
    return(
        <QuizContext.Provider value={{state,dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}


const useQuizContext = () =>{
    return useContext(QuizContext);
}

export {QuizContext,QuizProvider,useQuizContext}