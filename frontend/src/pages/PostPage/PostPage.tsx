import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import IntroBlock from "../../components/IntroBlock/IntroBlock"
import ManNextToTheTreeImage from "../../images/images/man-next-to-tree.png"
import IntroBlockPost from "../../components/IntroBlockPost/IntroBlockPost"

function PostPage() {
    useSetCurrentPage("post")

    return (
        <>
            <IntroBlock content={<IntroBlockPost />} backgroundImageURL={ManNextToTheTreeImage} />
        </>
    )
}

export default PostPage