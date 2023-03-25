import css from './posts-grid.module.css';
import PostItem from "@/components/posts/post-item";

function PostsGrid(props) {
    const { posts } = props;
    return <ul className={css.grid}>
        {posts.map(post => <PostItem key={post.slug} post={post}/>)}
    </ul>
}

export default PostsGrid;