import Link from "next/link";
import Image from "next/image";

import css from './post-item.module.css';
function PostItem () {
    return <li className={css.post}>
         <Link>
             <a>
                <div className={css.image}>
                    <Image src={} alt={}/>
                </div>
                 <div className={css.content}>
                     <h3>TITLE</h3>
                     <time>July 13th 2022</time>
                     <p>The excerpt</p>
                 </div>
             </a>
         </Link>
    </li>
}

export default PostItem