import React, {createContext, useReducer, useContext} from 'react'

const AtcStore = createContext({
    item: "",
    value: 0,
    src: "",
    quantity: 0
})
const { Provider } = AtcStore

const reducer = (state, action) => {

    switch(action.type) {
        case "add":
  
                return [
                    ...state,
                    {
                        item: action.item,
                        value: action.value,
                        src: action.src,
                        quantity: 1
                    }
                ]
        case "plus":
            state.map(t =>  {
                if (t.src === action.src) {
                    t.quantity++
                }
            })
        default:
            return state
    }
    
}


function AtcProvider({value = [], ...props}) {
    const [state, dispatch] = useReducer(reducer, [])
    return <Provider value={[state, dispatch]} {...props} />
}

function useAtcContext() {
    return useContext(AtcStore)
}



export { AtcProvider, useAtcContext, AtcStore}



    

