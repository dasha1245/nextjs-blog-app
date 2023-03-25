import css from './featured-posts.module.css';
import PostsGrid from "@/components/posts/posts-grid";
function FeaturedPosts(props) {
    return <section className={css.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={props.posts}/>
    </section>
}

export default FeaturedPosts;