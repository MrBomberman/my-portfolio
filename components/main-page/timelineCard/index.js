import classes from '../main-page.module.scss'

export default function TimelineCard(){
    return (

        <div className={classes.timelineSectionCard}>
        <span className={classes.iconTimeline}>
          <svg></svg>
        </span>
            <div className={classes.cardContent}>
                <div>
                    <div>
                        Компания
                    </div>
                    <div className={classes.position}>
                        Должность(специальность)
                    </div>
                    <div className={classes.description}>
                        Краткое описание
                    </div>
                    <span className={classes.period}>
                        Период времени
                    </span>
                </div>
            </div>
        </div>
    )
}