import Link from 'next/link';
import Image from 'next/image';
import classes from '.././main-page.module.scss';

export default function ProjectCard({image, title, link}){
    return (
        <Link href={link}>
            <a className={classes.slideGrid}>
            <Image src={image}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.sliderImg}
                />
                <p className={classes.sliderDescr}>{title}</p>
            </a>
          </Link>
    )
}