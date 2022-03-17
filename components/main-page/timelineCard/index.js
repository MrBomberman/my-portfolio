import { useEffect, useRef, useState } from 'react'
import classes from '../main-page.module.scss'

export default function TimelineCard(){

    const timelineCard = useRef();
    const iconTimelineRef = useRef();
    const cardContentRef = useRef();

    const [offset, setOffset] = useState(0);

    // const arrOfCards = []
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        const slideAppearing = ((window.scrollY + 50) + window.innerHeight) - (timelineCard.current.clientHeight / 2); 
        const slideBottom = timelineCard.current.offsetTop + timelineCard.current.clientHeight;
        const needToShow = slideAppearing > timelineCard.current.offsetTop;
        const isNotScrolledPast = (window.scrollY + 50) < slideBottom;
        // arrOfCards.push(cardContentRef.current)
        // console.log(arrOfCards)
        console.log(cardContentRef.current.clientVisibility)


        if(needToShow && isNotScrolledPast){
            iconTimelineRef.current.className = `${classes.iconTimeline} ${classes.iconTimelineAnimation}` 
            cardContentRef.current.className = `${classes.cardContent} ${classes.cardContentAnimation}`
        } else {
            iconTimelineRef.current.className = `${classes.iconTimeline}` 
            cardContentRef.current.className = `${classes.cardContent}`
        }

        window.addEventListener('scroll', onScroll, { passive: true });
    }, [offset]);


    return (

        <div ref={timelineCard} className={classes.timelineSectionCard}>
        <span ref={iconTimelineRef} className={classes.iconTimeline}>
          <svg></svg>
        </span>
            <div ref={cardContentRef} className={classes.cardContent}>
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