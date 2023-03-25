import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {Prism as SyntaxHighLighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "@/components/posts/post-details/post-header";
import css from './post-content.module.css'
function PostContent({post}) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    const customComponents = {
        p(paragraph){
            const {node} = paragraph;

            if(node.children[0].tagName === 'img'){
                const image = node.children[0];

                return <div className={css.image}>
                    <Image
                        src={`/images/posts/${post.slug}/${image.properties.src}`}
                        alt={image.alt}
                        width={600}
                        height={300}/>
                </div>
            }
            return <p>{paragraph.children}</p>
        },
        code(code){
            const { className, children } = code;
            const language = className.split('-')[1];
            return <SyntaxHighLighter
                style={atomDark}
                language={language}
                children={children}
            />
        }
    }
    return <article className={css.content}>
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
    </article>
}
export default PostContent