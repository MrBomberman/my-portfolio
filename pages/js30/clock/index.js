import classes from './clock.module.css';

function Clock(){

    // function setDate() {
    //     const now = new Date();
    //     const seconds = now.getSeconds();
    //     const minutes = now.getMinutes();
    //     const hours = now.getHours();

    //     console.log(seconds, minutes, hours)
    // }

    // // setInterval(setDate, 1000)
    
    return (
        <> 
        <div className={classes.container}>
            <div className={classes.clock}>
                <div className={classes.clockFace}>
                <div className={`${classes.hand} ${classes.clockHour}`}>
                </div>
                <div className={`${classes.hand} ${classes.clockMin}`}>
                </div>
                <div className={`${classes.hand} ${classes.clockSec}`}>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Clock;