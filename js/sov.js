
function sleep(ms) {
    return new Promise(func => setTimeout(func, ms))
}

async function doSomethingAsync() {
    console.log("Before sleep")
    await sleep(4000)
    console.log("After sleep")
}

async function doFinito() {
    console.log("start")
    await doSomethingAsync()
    console.log("Finito")
}
doFinito();
console.log("Finitoxx")

