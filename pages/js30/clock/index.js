import React, { Component, createRef } from 'react';
import classes from './clock.module.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.clockSec = React.createRef();
        this.clockMin = React.createRef();
        this.clockHour = React.createRef();
    }

    setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const secondsDegrees = ((seconds / 60) * 360) + 90; // делим кол-во секунд на 60 и умножаем на 360 градусов, чтобы получить нужный градус стрелки
        const minutesDegrees = (360/60) * minutes + 90; // то же самое для минут, только стрелка меняет реже свое положение
        const hoursDegrees = (360/12)*hours + 90; // раз в час стрелка меняет свое положение на 30 градусов
        this.clockSec.current.style.transform = `rotate(${secondsDegrees}deg)`; // задаем стиль для секундной стрелки, на какое кол-во градусов ей нужно поворачиваться каждую секунду
        this.clockMin.current.style.transform = `rotate(${minutesDegrees}deg)`;
        this.clockHour.current.style.transform = `rotate(${hoursDegrees}deg)`;
    }
    componentDidMount(){
        this.interval = setInterval(() => this.setDate(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
      

    render(){
        // setInterval(this.setDate, 1000)
        

        
    return (
        <> 
        <div className={classes.container}>
            <div className={classes.clock}>
                <div className={classes.clockFace}>
                <div className={classes.hand} ref={this.clockHour}>
                </div>
                <div className={classes.hand} ref={this.clockMin}>
                </div>
                <div className={classes.hand} ref={this.clockSec}>
                </div>
                </div>
            </div>
        </div>
        </>
    )
    }
}

export default Clock;