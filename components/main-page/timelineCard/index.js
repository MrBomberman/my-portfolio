import { useEffect, useRef, useState } from 'react'
import classes from '../main-page.module.scss'

export default function TimelineCard({period, title, position, descr}){

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

        if(needToShow && isNotScrolledPast){
            iconTimelineRef.current.className = `${classes.iconTimeline} ${classes.iconTimelineAnimation}` 
            cardContentRef.current.className = `${classes.cardContent} ${classes.cardContentAnimation}`
            iconTimelineRef.current.style.visibility = 'visible';
            cardContentRef.current.style.visibility = 'visible';
        } else {
            iconTimelineRef.current.className = `${classes.iconTimeline}` 
            cardContentRef.current.className = `${classes.cardContent}`
            iconTimelineRef.current.style.visibility = 'hidden';
            cardContentRef.current.style.visibility = 'hidden'
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);


    return (

        <div ref={timelineCard} className={classes.timelineSectionCard}>
        <span ref={iconTimelineRef} className={classes.iconTimeline}>
          <svg></svg>
        </span>
            <div ref={cardContentRef} className={classes.cardContent}>
                <div>
                    <div>
                        {title}
                    </div>
                    <div className={classes.position}>
                        {position}
                    </div>
                    <div className={classes.description}>
                        {descr}
                    </div>
                    <span className={classes.period}>
                        {period}
                    </span>
                </div>
            </div>
        </div>
    )
}