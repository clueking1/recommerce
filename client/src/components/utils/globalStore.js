import { Redirect } from "react-router-dom"

function runGlobal(dis) {
        let atc = sessionStorage.getItem('atc')

            if (JSON.parse(atc) !== null) {
                JSON.parse(atc).map(t => dis({type: "saved", value: t.value, item: t.item, src: t.src, quantity: t.quantity}))
            }

}
function updateUser(dis) {
    let atc = localStorage.getItem('user')

    if (atc == true) {
        dis({type: "loggedIn"})
        return true
    } 
}

function updateGlobal(sta) {

        if (sta.length >= 1) {
            sessionStorage.setItem('atc', JSON.stringify(sta))
        } 

}


 export { runGlobal, updateGlobal, updateUser}