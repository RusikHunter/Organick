import GiovaniImage from "../assets/images/team/giovani.png"
import GiovaniBlurredImage from "../assets/images/team/giovani-blurred.png"

import MarianneImage from "../assets/images/team/marianne.png"
import MarianneBlurredImage from "../assets/images/team/marianne-blurred.png"

import RigaImage from "../assets/images/team/riga.png"
import RigaBlurredImage from "../assets/images/team/riga-blurred.png"

import KeiraImage from "../assets/images/team/keira.png"
import KeiraBlurredImage from "../assets/images/team/keira-blurred.png"

import ScottImage from "../assets/images/team/scott.png"
import ScottBlurredImage from "../assets/images/team/scott-blurred.png"

import KarenImage from "../assets/images/team/karen.png"
import KarenBlurredImage from "../assets/images/team/karen-blurred.png"

import type { TeamExpert } from "../interfaces/teamExpert"

const teamExperts: TeamExpert[] = [
    {
        imageURL: GiovaniImage,
        blurredImageURL: GiovaniBlurredImage,
        name: "Giovani Bacardo",
        jobTitle: "Farmer",
        socialNetworksURLs: {
            facebookURL: "https://www.facebook.com/",
            twitterURL: "https://x.com/"
        }
    },
    {
        imageURL: MarianneImage,
        blurredImageURL: MarianneBlurredImage,
        name: "Marianne Loreno",
        jobTitle: "Designer",
        socialNetworksURLs: {
            instagramURL: "https://www.instagram.com/",
            facebookURL: "https://www.facebook.com/",
            twitterURL: "https://x.com/"
        }
    },
    {
        imageURL: RigaImage,
        blurredImageURL: RigaBlurredImage,
        name: "Riga Pelore",
        jobTitle: "Farmer",
        socialNetworksURLs: {
            instagramURL: "https://www.instagram.com/",
            facebookURL: "https://www.facebook.com/",
            twitterURL: "https://x.com/"
        }
    },
    {
        imageURL: KeiraImage,
        blurredImageURL: KeiraBlurredImage,
        name: "Keira Knightley",
        jobTitle: "Farmer",
        socialNetworksURLs: {
            instagramURL: "https://www.instagram.com/",
            facebookURL: "https://www.facebook.com/",
            twitterURL: "https://x.com/"
        }
    },
    {
        imageURL: ScottImage,
        blurredImageURL: ScottBlurredImage,
        name: "Scott Lawrence",
        jobTitle: "Designer",
        socialNetworksURLs: {
            instagramURL: "https://www.instagram.com/",
            facebookURL: "https://www.facebook.com/",
            twitterURL: "https://x.com/"
        }
    },
    {
        imageURL: KarenImage,
        blurredImageURL: KarenBlurredImage,
        name: "Karen Allen",
        jobTitle: "Farmer",
        socialNetworksURLs: {
            instagramURL: "https://www.instagram.com/",
            facebookURL: "https://www.facebook.com/",
            twitterURL: "https://x.com/"
        }
    }
]

export default teamExperts