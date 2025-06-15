import GreenAndTastyLemonImage from "../images/images/green-and-tasty-lemon.png"
import OrganicCarrotImage from "../images/images/organic-carrot.png"
import OrganicBetelLeafImage from "../images/images/organic-betel-leaf.png"
import NaturalTommatoImage from "../images/images/natural-tommato.png"
import BlackRaspberryImage from "../images/images/black-raspberry.png"
import HoneyOrangeImage from "../images/images/honey-orange.png"

export interface PortFolioItem {
    id: number,
    title: string
    date: string
    client: string
    category: string
    service: string
    type: string
    image: string
}

const portfolioItems: PortFolioItem[] = [
    {
        id: 0,
        title: "Green & Tasty Lemon",
        date: "December 5, 2022",
        client: "John Davis",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Fruits",
        image: GreenAndTastyLemonImage
    },
    {
        id: 1,
        title: "Organic Carrot",
        date: "June 29, 2023",
        client: "Kevin Martin",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Farmer",
        image: OrganicCarrotImage
    },
    {
        id: 2,
        title: "Organic Betel Leaf",
        date: "September 13, 2022",
        client: "Adnrew McTavish",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Leaf",
        image: OrganicBetelLeafImage
    },
    {
        id: 3,
        title: "Natural Tommato",
        date: "May 27, 2024",
        client: "Adnrew McTavish",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Fruits",
        image: NaturalTommatoImage
    },
    {
        id: 4,
        title: "Black Raspberry",
        date: "December 4, 2022",
        client: "Kevin Martin",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Farmer",
        image: BlackRaspberryImage
    },
    {
        id: 5,
        title: "Honey Orange",
        date: "July 3, 2025",
        client: "John Davis",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Farmer",
        image: HoneyOrangeImage
    }
]

export default portfolioItems