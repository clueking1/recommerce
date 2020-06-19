import React, {createContext, useReducer, useContext} from 'react'

const UserStore = createContext({
    loggedIn : false
})
const { Provider } = UserStore

const reducer = (state, action) => {
    switch(action.type) {
        case "loggedIn":
            return state.loggedIn = true
        case "loggedOut":
           return state.loggedIn = false
        default:
            return state
    }
    
}


function UserProvider({value = [], ...props}) {
    const [state, dispatch] = useReducer(reducer, [])
    return <Provider value={[state, dispatch]} {...props} />
}

function useUserContext() {
    return useContext(UserStore)
}



export { UserProvider, useUserContext, UserStore}