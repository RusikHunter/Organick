import IntroBlock from "@components/IntroBlock/IntroBlock"
import IntroBlockPost from "@components/IntroBlockPost/IntroBlockPost"
import PostContentSection from "@components/PostContentSection/PostContentSection"
import { useParams } from "react-router-dom"
import { useAppSelector } from "@hooks/useAppSelector"
import PostBlurredImage from "@assets/images/background/post-blurred.webp"
import type { Post } from "@interfaces/post"

function PostPage() {
    const { id } = useParams<{ id: string }>()

    const post: Post = useAppSelector(state => state.client.posts[Number(id)])

    return (
        <>
            {post && <IntroBlock content={<IntroBlockPost />} backgroundImageURL={post.imageURL} blurredBackgroundImageURL={PostBlurredImage} />}
            <PostContentSection />
        </>
    )
}

export default PostPage