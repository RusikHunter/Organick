import GiovaniImage from "@assets/images/team/giovani.webp"
import GiovaniBlurredImage from "@assets/images/team/giovani-blurred.webp"
import MarianneImage from "@assets/images/team/marianne.webp"
import MarianneBlurredImage from "@assets/images/team/marianne-blurred.webp"
import RigaImage from "@assets/images/team/riga.webp"
import RigaBlurredImage from "@assets/images/team/riga-blurred.webp"
import KeiraImage from "@assets/images/team/keira.webp"
import KeiraBlurredImage from "@assets/images/team/keira-blurred.webp"
import ScottImage from "@assets/images/team/scott.webp"
import ScottBlurredImage from "@assets/images/team/scott-blurred.webp"
import KarenImage from "@assets/images/team/karen.webp"
import KarenBlurredImage from "@assets/images/team/karen-blurred.webp"
import type { TeamExpert } from "@interfaces/teamExpert"

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