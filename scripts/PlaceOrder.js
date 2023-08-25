import { placeOrder } from "./TransientState.js"

const handleOrderButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}

export const SaveOrder = () => {

    document.addEventListener("click", handleOrderButtonClick)

    return "<div><button id='placeOrder'>Create Custom Order</button></div>"
}