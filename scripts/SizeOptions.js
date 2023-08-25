import { setSizeOption } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeChoice = await response.json()

    document.addEventListener("change", handleSizeChoice)

    let optionsHTML= "<h4>What size would you like sweet angel?</h4>"
    
    // Use map() to generate new arrayb of strings
    const divStringArray = sizeChoice.map(
        (size) => {
            return `<div>
            <input type='radio' name='size' value='${size.id}' /> ${size.carets}
            </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}

const handleSizeChoice = (event) => {
    if (event.target.name === "size") {
        setSizeOption(parseInt(event.target.value))
    }
}