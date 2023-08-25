// Set up transient state data an=structure and provide intitial values

const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId": 0
}



// Functions to modify each property of transient state

export const setMetalOption = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setStyleOption = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setSizeOption = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)    
}