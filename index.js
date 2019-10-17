import { LitElement, html } from "lit-element"

class MainApp extends LitElement
{
    render()
    {
        return html `<div>hello app</div>`
    }
}

customElements.define("main-app", MainApp)