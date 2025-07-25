type LoaderProps = {
    text: React.ReactNode
}

function Loader({ text }: LoaderProps) {
    return (
        <h5 className="loader h5">{text}</h5>
    )
}

export default Loader