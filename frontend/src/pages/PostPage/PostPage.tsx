import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import IntroBlock from "../../components/IntroBlock/IntroBlock"
import IntroBlockPost from "../../components/IntroBlockPost/IntroBlockPost"
import PostContentSection from "../../components/PostContentSection/PostContentSection"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks/useAppSelector"

function PostPage() {
    useSetCurrentPage("post")

    const { id } = useParams<{ id: string }>()

    const post = useAppSelector(state => state.client.posts[Number(id)])

    return (
        <>
            {post && <IntroBlock content={<IntroBlockPost />} backgroundImageURL={post.imageURL} />}
            <PostContentSection />
        </>
    )
}

export default PostPage