import { setMetalOption } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metalChoice = await response.json()

    document.addEventListener("change", handleMetalChoice)

    let userMetalChoiceHTML = "<h4>What type of metal would you like?</h4>"
    
    //Use map() to generate new array of strings
        const divStringArray = metalChoice.map(
            (metal) => {
                return `<div>
                <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
                </div>`
            }
        )

    //This function needs to return a single string, not an array of strings
    userMetalChoiceHTML += divStringArray.join("")

    return userMetalChoiceHTML
}

const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetalOption(parseInt(event.target.value))
    }
}