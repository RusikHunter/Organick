import GreenAndTastyLemonImage from "../images/images/green-and-tasty-lemon.png"
import OrganicCarrotImage from "../images/images/organic-carrot.png"
import OrganicBetelLeafImage from "../images/images/organic-betel-leaf.png"
import NaturalTommatoImage from "../images/images/natural-tommato.png"
import BlackRaspberryImage from "../images/images/black-raspberry.png"
import HoneyOrangeImage from "../images/images/honey-orange.png"
import type { PortfolioItem } from "../interfaces/portfolioItem"

const portfolioItems: PortfolioItem[] = [
    {
        id: 0,
        title: "Green & Tasty Lemon",
        description: "Bursting with natural flavor, our green lemons are grown organically and handpicked for maximum freshness and zesty taste.",
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
        description: "Rich in vitamins and grown without synthetic chemicals, these organic carrots are crisp, sweet, and perfect for healthy meals.",
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
        description: "Our organic betel leaves are naturally grown and carefully harvested, offering a refreshing aroma and traditional wellness benefits.",
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
        description: "Juicy and full of flavor, our organically grown tomatoes are nurtured in chemical-free soil for the purest taste.",
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
        description: "These antioxidant-rich black raspberries are cultivated naturally to bring you bold flavor and powerful health benefits.",
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
        description: "Naturally sweet and rich in vitamin C, our honey oranges are grown on sustainable farms and harvested at peak ripeness.",
        date: "July 3, 2025",
        client: "John Davis",
        category: "Agriculture, Eco",
        service: "Organic Products",
        type: "Farmer",
        imageURL: HoneyOrangeImage
    }
]

export default portfolioItems