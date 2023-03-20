import Image from "next/image";

import css from './hero.module.css';
function Hero() {
    return <section className={css.hero}>
        <div className={css.image}>
            <Image src='/images/site/hero.jpg' alt='An image showing hero' width={450} height={300} />
        </div>
        <h1>Hi, I'm Dasha</h1>
        <p>I blog about web development - especially frontend frameworks like Angular or React.</p>
    </section>
}

export default Hero