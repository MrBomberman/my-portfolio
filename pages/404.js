import Link from 'next/link';
import classes from '../styles/error.module.css'

export default function ErrorPage(){
    return (
        <>
        <div className={classes.container}>
        <h1 className={classes.error}>Oops, I haven&rsquo;t writen this page yet! </h1>
        <p>Please <Link href='/'><a className={classes.error}>go to the main page</a></Link></p>
        </div>
        </>
    )
}