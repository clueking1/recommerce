import React, {createContext, useReducer, useContext} from 'react'

const AtcStore = createContext({
    item: "",
    value: 0,
    src: ""
})
const { Provider } = AtcStore

const reducer = (state, action) => {

    switch(action.type){
        case "add":
            return [
                ...state,
                {
                    item: action.item,
                    value: action.value,
                    src: action.src
                }
            ]
        
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