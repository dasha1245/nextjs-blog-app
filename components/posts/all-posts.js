import css from './all-posts.module.css';
import PostsGrid from "@/components/posts/posts-grid";
function AllPosts ({posts}) {
    return <section className={css.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts}/>
    </section>
}
export default AllPosts