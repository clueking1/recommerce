

function runGlobal(dis) {
        let atc = sessionStorage.getItem('atc')
            dis({type: "splice"})
            if (JSON.parse(atc) !== null) {
                JSON.parse(atc).map(t => dis({type: "saved", value: t.value, item: t.item, src: t.src, quantity: t.quantity, id: t.id}))
            }

}


function updateGlobal(sta) {

        if (sta.length >= 1) {
            sessionStorage.setItem('atc', JSON.stringify(sta))
        } 

}


 export { runGlobal, updateGlobal }