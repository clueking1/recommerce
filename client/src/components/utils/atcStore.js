import React, {createContext, useReducer, useContext} from 'react'

const AtcStore = createContext({
    item: "",
    value: 0,
    src: "",
    quantity: 0
})
const { Provider } = AtcStore

const reducer = (state, action) => {

    Object.keys(state)
    switch(action.type) {
     
        case "add":
            //if (obArr.length <= 0) {
                return [
                    ...state,
                    {
                        item: action.item,
                        value: action.value,
                        src: action.src,
                        quantity: 1
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