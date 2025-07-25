import { Link } from "react-router-dom"
import ButtonSVGArrow from "@components/ButtonSVGArrow/ButtonSVGArrow"
import { RouteLinkColor } from "@entities/routeLinkColorEnum"

type RouteLinkProps = {
    color: RouteLinkColor
    path: string
    text: React.ReactNode
    className: string
    state?: Object
}

function RouteLink({ color, path, text, className, state }: RouteLinkProps) {
    return (
        <Link to={path} className={`route-link button button--${color} ${className}`} state={state}>
            {text}

            <ButtonSVGArrow />
        </Link>
    )
}

export default RouteLink