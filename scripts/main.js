import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { SaveOrder } from './PlaceOrder.js'
import { Orders } from './orders.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const orderButtonHTML = await SaveOrder()
    const placedOrderHTML = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
                ${orderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${placedOrderHTML}
        </article>
    `

    container.innerHTML = composedHTML
}
document.addEventListener("newOrderPlaced", render) 

render()