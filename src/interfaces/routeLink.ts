export enum RouteLinkColor {
    BLUE = "blue",
    YELLOW = "yellow",
    TRANSPARENT = "transparent"
}

export interface RouteLinkProps {
    color: RouteLinkColor
    path: string
    text: React.ReactNode
    className: string
    state?: Object
}