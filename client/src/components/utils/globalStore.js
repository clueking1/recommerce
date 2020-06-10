
function runGlobal(dis) {
        let atc = sessionStorage.getItem('atc')

            if (JSON.parse(atc) !== null) {
                JSON.parse(atc).map(t => dis({type: "add", value: t.value, item: t.item, src: t.src}))

                console.log(JSON.parse(atc))
            }

}

function updateGlobal(sta) {

        if (sta.length > 1) {
            sessionStorage.setItem('atc', JSON.stringify(sta))
        } 

}

 export { runGlobal, updateGlobal }