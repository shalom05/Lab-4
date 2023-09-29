enum characterProperties {
    "name" = "name",
    "species" = "species",
    "status" = "status",
    "image" = "image"
}

export class characterCard extends HTMLElement {

    properties: Record<characterProperties, string>= {
        name: "",
        species: "",
        status: "",
        image: ""
    }

    static get observedAttributes(){
        return[
            characterProperties.name,
            characterProperties.species,
            characterProperties.status,
            characterProperties.image
         ]
    }

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    attributeChangedCallback(propName: string, oldValue: string, newValue: string){
        switch(propName){
            case characterProperties.name:
                this.properties.name = newValue 
                break;
            case characterProperties.species:
                this.properties.species = newValue 
                break;    
            case characterProperties.status:
                this.properties.status = newValue 
                break;
            case characterProperties.image:
                this.properties.image = newValue 
                break;  
            default:
                break;   
        }
    }

    connectedCallback(){
        this.render()
    }

    render(){
        const stylesheetLink = this.ownerDocument.createElement("link")
        stylesheetLink.setAttribute("rel","stylesheet")
        stylesheetLink.setAttribute("href","/src/components/cards/cards.css")
        this.shadowRoot?.appendChild(stylesheetLink)

        const cardcontainer = this.ownerDocument.createElement("div")
        cardcontainer.classList.add("characterContainer")
        this.shadowRoot?.appendChild(cardcontainer)

        const img = this.ownerDocument.createElement("img")
        img.setAttribute("src",`${this.properties.image}`)
        cardcontainer.appendChild(img)

        const name = this.ownerDocument.createElement("h1")
        name.innerHTML = this.properties.name
        cardcontainer.appendChild(name)

        const species = this.ownerDocument.createElement("h2")
        species.innerHTML = this.properties.species
        cardcontainer.appendChild(species)

        const status = this.ownerDocument.createElement("h2")
        status.innerHTML = this.properties.status
        cardcontainer.appendChild(status)
    }
}

customElements.define("my-character", characterCard)

export default characterCard
