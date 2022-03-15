import classes from '../main-page.module.scss'

export default function TimelineCard(){
    return (
        <div className={classes.cardContent}>
            <div>
                <div>
                    Компания
                </div>
                <div>
                    Должность(специальность)
                </div>
                <div>
                    Краткое описание
                </div>
                <span>
                    Период времени
                </span>
            </div>
        </div>
    )
}