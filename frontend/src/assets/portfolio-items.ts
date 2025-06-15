import GreenAndTastyLemonImage from "../images/images/green-and-tasty-lemon.png"
import OrganicCarrotImage from "../images/images/organic-carrot.png"
import OrganicBetelLeafImage from "../images/images/organic-betel-leaf.png"
import NaturalTommatoImage from "../images/images/natural-tommato.png"
import BlackRaspberryImage from "../images/images/black-raspberry.png"
import HoneyOrangeImage from "../images/images/honey-orange.png"

export interface PortFolioItem {
    id: number,
    title: string
    description: string
    date: string
    client: string
    category: string
    service: string
    type: string
    imageURL: string
}

const portfolioItems: PortFolioItem[] = [
    {
        id: 0,
        title: "Green & Tasty Lemon",
        description: "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
        date: "December 5, 2022",
        client: "John Davis",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Fruits",
        imageURL: GreenAndTastyLemonImage
    },
    {
        id: 1,
        title: "Organic Carrot",
        description: "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
        date: "June 29, 2023",
        client: "Kevin Martin",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Farmer",
        imageURL: OrganicCarrotImage
    },
    {
        id: 2,
        title: "Organic Betel Leaf",
        description: "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
        date: "September 13, 2022",
        client: "Adnrew McTavish",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Leaf",
        imageURL: OrganicBetelLeafImage
    },
    {
        id: 3,
        title: "Natural Tommato",
        description: "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
        date: "May 27, 2024",
        client: "Adnrew McTavish",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Fruits",
        imageURL: NaturalTommatoImage
    },
    {
        id: 4,
        title: "Black Raspberry",
        description: "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
        date: "December 4, 2022",
        client: "Kevin Martin",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Farmer",
        imageURL: BlackRaspberryImage
    },
    {
        id: 5,
        title: "Honey Orange",
        description: "Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ",
        date: "July 3, 2025",
        client: "John Davis",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Farmer",
        imageURL: HoneyOrangeImage
    }
]

export default portfolioItems