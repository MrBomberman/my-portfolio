import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'semantic-ui-react';
import classes from './main-page.module.scss'
import imageOfAuthor from '../../assets/images/personalblog.png';
import sliderImage from '../../assets/images/slider.jpg';
import variables from '../../assets/images/variables.jpg';
import gamePic from '../../assets/images/game.jpg';
import BurgerMenu from './burgerMenu/burgerMenu';
import { useEffect, useRef, useState } from 'react';
import TimelineCard from './timelineCard';
import ContactLink from './contactLink';


export default function MainPage(){

  const [activeMenu, setActiveMenu] = useState(false);
  const [author, setAuthor] = useState('Hello! I am Kirill Isakov')
  const [finalAuthor, setFinalAuthor] = useState('');
  const [animationText, setAnimationText] = useState(true)
  let numberOfLetters = 0;
  const burgerBtn = useRef();
  const authorText = useRef();
  const mainElem = useRef();


  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // if burgerMenu is opened - overflowY is hidden
  useEffect(() => {
    const html = document.querySelector('html')
    if(activeMenu == true){
      html.style.overflowY = 'hidden'
    } else {
      html.style.overflowY = 'scroll'
    }
  }, [activeMenu])
  // effect is showing the appearance of text in the main section - author
  useEffect(async () => {
    const arrOfLetters = author.split('')
    if(numberOfLetters < arrOfLetters.length){
      let string = ''
      for (let i = 0; i < arrOfLetters.length; i++ ){
        await timeout(120)
        string = string + arrOfLetters[i]
        numberOfLetters = numberOfLetters + 1;
        setFinalAuthor(string)
      }
    }
    if(numberOfLetters == arrOfLetters.length) {
      await timeout(3000)
      let string = author;
      for (let i = arrOfLetters.length-1; i > 0; i-- ){
        await timeout(120)
        string = string.slice(0,i)
        numberOfLetters = numberOfLetters - 1;
        setFinalAuthor(string)
      }
    }
    setAnimationText((animationText) => !animationText)
  }, [numberOfLetters, animationText])


  const items = ['About', 'Timeline','Projects', 'Contact']

  return (
    <div className={classes.mainClass} ref={mainElem}> 
      <div className={classes.header}>
        <div className={classes.author}>
          <a href='#author'>KirIsakov.com</a></div>
        
        <div className={classes.navbar}>
          <label htmlFor='burger' className={classes.menuIcon}
           >
            <input id='burger' onClick={() => setActiveMenu(!activeMenu)} ref={burgerBtn}  className={classes.menuIcon__cheeckbox} type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
          </label>
        <a href='#about' >About</a>
        <a href='#timeline'>Timeline</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        </div>
        
      </div>
      <section className={classes.welcomeSection} id='author'>
      <div className={classes.nameOfAuthor}>
        <h1 ref={authorText}>{finalAuthor}</h1>
        <p>Junior fronted-developer</p>
        </div>
      <div className={classes.bubbles}>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
          <div className={classes.bubble}></div>
        </div>
        <BurgerMenu activeTab={burgerBtn} activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} links={items}/>
      </section>

      <div id='about' className={classes.about}>
        <div className={`${classes.info} ${classes.slideIn} ${classes.imageAuthor}`}>
        <Image src={imageOfAuthor}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.imageMain}/>
        </div>
        <div className={`${classes.info} ${classes.slideIn} ${classes.descr}`}>
          <p>My name is Kirill. I am from Moscow. Recently graduated from the Moscow State Linguistic University. I started doing web development more than a year ago, I am studying, creating my own projects, I have completed several courses. Now I am working as fronted dev in Delta Car.</p>
        </div>
      </div>
      <div id='timeline' className={classes.timelineContainer}>
        <h3 className={classes.timelineTitle}>Timeline</h3>
          <TimelineCard period={'2017 july'} title={'Entering the university'}
          position={'student'}
          descr={`This year I entered the Moscow state linguistic university. My profession was teaching foreign languages 
          - english and french. I enjoyed learning everything first 2 years of studying`}/>
          <TimelineCard period={'2020 march - 2020 august'} title={'First steps in programming'}
          position={'student'}
          descr={`The beginnig of this year I thought that I must change something in my life. That's why I entered on courses
          of Python in Bauman State `}/>
          <TimelineCard period={'2020 november - 2021 may'} title={'Beginning of web development'}
          position={'student'}
          descr={`Courses of python didn't impressed me a lot and I had an idea to try some other programming languages.
          I found one course on Udemy which includes basic things of JavaScript and React. Also I finished few courses on platform freecodeCamp.`}/>
          <TimelineCard period={'2021 june'} title={'Graduating from the university'}
          position={'student'}
          descr={`Finally, I finished University and got a bachelor degree in teaching English and French. And I got more time for porgramming, 
          as I enjoyed it a lot. `}
          />
          <TimelineCard period={'2021 july - 2021 october'} title={'First working projects'}
          position={'intern'}
          descr={`At the end of july I tried to get my first job and after some interviews one of my familiar persons 
          offered me to take part in some start up project as intern frontend developer.`}
          />
          <TimelineCard period={'2021 october - now'} title={'Delta car'}
          position={'junior frontend dev'}
          descr={`After 4 months of practise I got my frist job as junoir frontend developer in swiss company Delta Car.
          Now I'm supporting and writing new features for internal services to make the sale of car's more convenient for staff this company.`}
          />
      </div>
      {/* need to put each project in its own component */}
      <div id='projects' className={classes.projects}>
          <h2>You can see some of my projects</h2>
          <div className={classes.projectsGrid}>
            <Link href='/sliders'>
            <a className={classes.slideGrid}>
              <Image src={sliderImage}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.sliderImg}
                />
                <p className={classes.sliderDescr}>Sliders</p>
              </a>
              </Link>
              <Link href='/game'>
              <a className={classes.slideGrid}> 
              <Image src={gamePic}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.sliderImg}/>
                <p className={classes.sliderDescr}>Game</p>
              </a>
              </Link>
              <Link href='/js30'>
              <a className={classes.slideGrid}>
              <Image src={variables}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.sliderImg}/>
                <p className={classes.sliderDescr}>JS_30</p>
              </a>
              </Link>
          </div>
          <Link href='/all-projects'>
          <a className={classes.styleBtn}>Show more</a>
          </Link>
      </div>
      <div id='contact' className={classes.contact}>
        <h1>Let&rsquo;s create something together! </h1>
        <p>My contacts</p>
        <div className={classes.contactLinks}>
          <ContactLink link={'https://t.me/MrBomberman'} classStyle={'fab fa-telegram'}
          title={'Telegram'}/>
          <ContactLink link={'https://github.com/MrBomberman'} classStyle={'fab fa-github'}
          title={'GitHub'}/>
          <ContactLink link={'https://twitter.com/Kirill98711794'} classStyle={'fab fa-twitter-square'}
          title={'Twitter'}/>
        </div>
      </div>
    </div>
    )
}
