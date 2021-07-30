import Link from "next/link";
import classes from './js30.module.css';

function Js30(){
    return (
        <>
        <div className={classes.container}>
            <h1 className={classes.title}>You can see some interesting projects from coding challenge (JS_30)</h1>
            <div className={classes.content}>
                <div className={classes.project}>
                    <Link href='/js30/clock'><p className={classes.projectBtn}>Go to see clock</p></Link>
                </div>
            </div>
            <Link href='/'><p>Go to the main page</p></Link>
        </div>
        </>
    )
}
export default Js30;