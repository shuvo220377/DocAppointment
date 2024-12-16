import { createContext, useReducer } from "react";


export const Store = createContext();

const initialState={

}

const reducer=(state, action)=>{
    switch(action.type){
        case 'login':
            return{
                
            }
    }
}


export const StoreProvider =({children})=>{

    const{state, dispatch} = useReducer(reducer, initialState);

    const value={state,dispatch}

    return <Store.Provider value={value} >
        {children}
    </Store.Provider>
}