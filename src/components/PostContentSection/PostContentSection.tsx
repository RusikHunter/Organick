import { useParams } from "react-router-dom"
import "./PostContentSection.scss"
import { useAppSelector } from "../../hooks/useAppSelector"
import parse from 'html-react-parser'

function PostContentSection() {
    const { id } = useParams<{ id: string }>()

    const post = useAppSelector(state => state.client.posts[Number(id)])

    return (
        <>
            <section className="post-content">
                <div className="post-content__inner container">
                    <div className="post-content__row row">
                        {post
                            ?
                            <div className="post-content__column column">
                                {parse(post.content)}
                            </div>
                            :
                            <h5 className="post-content__text--loading h5">Loading...</h5>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostContentSection