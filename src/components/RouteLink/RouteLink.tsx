import { Link } from "react-router-dom"
import type { RouteLinkProps } from "@interfaces/routeLink"
import ButtonSVGArrow from "@components/ButtonSVGArrow/ButtonSVGArrow"

function RouteLink({ color, path, text, className, state }: RouteLinkProps) {
    return (
        <Link to={path} className={`route-link button button--${color} ${className}`} state={state}>
            {text}

            <ButtonSVGArrow />
        </Link>
    )
}

export default RouteLink