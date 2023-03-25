import {Fragment} from "react";

import Hero from "../components/home-components/hero";
import FeaturedPosts from "@/components/home-components/featured-posts";
import {getFeaturedPosts} from "@/lib/posts-util";
import Head from "next/head";

function HomePage({posts}) {
    return (
        <Fragment>
            <Head>
                <title>Dasha's Blog</title>
                <meta name={'description'} content={'I post about programming and web development.'}/>
            </Head>
            <Hero/>
            <FeaturedPosts posts={posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage