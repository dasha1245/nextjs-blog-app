import PostContent from "@/components/posts/post-details/post-content";
import {getPostData} from "@/lib/posts-util";
import {Fragment} from "react";
import Head from "next/head";

function PostDetailsPage({post}) {
    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name={'description'}
                      content={post.excerpt}/>
            </Head>
            <PostContent post={post}/>
        </Fragment>
    )
}

export function getStaticProps(context) {
    const {params: {slug}} = context;

    const postData = getPostData(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export default PostDetailsPage