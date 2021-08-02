import Link from "next/link";
import classes from './js30.module.css';
import NavLayout from "../layouts/nav-layout";

function Js30(){
    return (
        <>
        <NavLayout linkText='Home page' link='/'>
        <div className={classes.container}>
            <h1 className={classes.title}>You can see some interesting projects from coding challenge (JS_30)</h1>
            <div className={classes.content}>
                <div className={classes.project}>
                    <Link href='/js30/clock'><p className={classes.projectBtn}>Go to see clock</p></Link>
                </div>
            </div>
        </div>
        </NavLayout>
        </>
    )
}
export default Js30;