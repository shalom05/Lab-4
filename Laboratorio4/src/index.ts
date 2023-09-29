import { requestData } from "./dataFetch";
//import * as components from "./components/export"
import "./components/cards/cards";

class AppContainer extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    async render(){
        const data = await requestData("https://rickandmortyapi.com/api/character")
        console.log(data)

        const stylesheetLink = this.ownerDocument.createElement("link")
        stylesheetLink.setAttribute("rel","stylesheet")
        stylesheetLink.setAttribute("href","/src/index.css")
        this.shadowRoot?.appendChild(stylesheetLink)

        const cardscontainer = this.ownerDocument.createElement("div")
        cardscontainer.setAttribute("id", "cardscontainer")
        this.shadowRoot?.appendChild(cardscontainer)

        data.map((character: any) => {
            const characterCard = this.ownerDocument.createElement("my-character")

            characterCard.setAttribute("name",`${character.name}`),
            characterCard.setAttribute("species",`${character.species}`),
            characterCard.setAttribute("status",`${character.status}`),
            characterCard.setAttribute("image",`${character.image}`)
            cardscontainer.appendChild(characterCard)
        })


    }
}

customElements.define("app-container",AppContainer)
