import Link from "next/link";
import classes from './nav-layout.module.css';
import Image from 'next/image'
import arrow from '../../../assets/images/arrow.png'

function NavLayout({children, linkText, link}){
    return (
        <>
        <nav className={classes.navLink}>
        <Link href={link}>
              <a> 
              <Image src={arrow}
                alt='arrow'
                width={24}
                height={24}
                />
                <p>{linkText}</p>
              </a>
              </Link>
        </nav>
        <main className={classes.main}>
        {children}
        </main>
        </>
    )
}

export default NavLayout;