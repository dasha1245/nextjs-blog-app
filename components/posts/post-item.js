import Link from "next/link";
import Image from "next/image";

import css from './post-item.module.css';

function PostItem({post: {title, date, image, excerpt, slug}}) {
    const formattedData = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`
    return <li className={css.post}>
        <Link href={linkPath} legacyBehavior={true}>
            <a>
                <div className={css.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
                </div>
                <div className={css.content}>
                    <h3>{title}</h3>
                    <time>{formattedData}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}

export default PostItem