import Link from 'next/link';
import classes from '../styles/error.module.css'

export default function ErrorPage(){
    return (
        <>
        <div className={classes.container}>
        <h1 className={classes.error}>Error 404</h1>
        <p>Please <Link href='/'><a>go to the main page</a></Link></p>
        </div>
        </>
    )
}