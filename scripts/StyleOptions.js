import { setStyleOption } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleChoice = await response.json()

    document.addEventListener("change", handleStyleChoice)

    let optionsHTML = "<h4>What type of style do you want gorgeous></h4>"
    
    //Use map() to generate new array of strings
    const divStringArray = styleChoice.map(
        (style) => {
            return `<div>
            <input type='radio' name='style' value='${style.id}' /> ${style.style}
            </div>`
        }
    )

    // This function needs to return a single array string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyleOption(parseInt(event.target.value))
    }
}