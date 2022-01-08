import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'semantic-ui-react';
import classes from './main-page.module.scss'
import imageOfAuthor from '../../assets/images/personalblog.png';
import sliderImage from '../../assets/images/slider.jpg';
import variables from '../../assets/images/variables.jpg';
import gamePic from '../../assets/images/game.jpg';
import BurgerMenu from './burgerMenu/burgerMenu';
import { useRef, useState } from 'react';


export default function MainPage(){

  const [activeMenu, setActiveMenu] = useState(false);
  const burgerBtn = useRef();


  const items = ['about', 'projects', 'contact']

  return (
    <div className={classes.mainClass}> 
      <div className={classes.header}>
        <div className={classes.author}>
          <a href='#author'>KirIsakov.com</a></div>
        
        <div className={classes.navbar}>
          <div className={classes.menuIcon}
          onClick={() => setActiveMenu(!activeMenu)}>
            <input ref={burgerBtn} className={classes.menuIcon__cheeckbox} type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        <a href='#about' >About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        </div>
        
      </div>
      <section className={classes.welcomeSection} id='author'>
      <div className={classes.nameOfAuthor}>
        <h1>Hello! I am Kirill Isakov</h1>
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
        </div>
        <BurgerMenu activeTab={burgerBtn} activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} header={'KirIsakov.com'} links={items}/>
      </section>

      <div id='about' className={classes.about}>
        <div className={`${classes.info} ${classes.slideIn}`}>
        <Image src={imageOfAuthor}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.imageMain}/>
        </div>
        <div className={`${classes.info} ${classes.slideIn} ${classes.descr}`}>
          <p>My name is Kirill. I am from Moscow. Recently graduated from the Moscow State Linguistic University. I started doing web development more than six months ago, I am studying, creating my own projects, I have completed several courses. About my projects below</p>
        </div>
      </div>
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
          <div>
          <Link href='https://t.me/MrBomberman' passHref={true}>
            <Button><i className="fab fa-telegram"></i>Telegram</Button>
          </Link>
          </div>
          <div>
          <Link href='https://github.com/MrBomberman' passHref={true}>
            <Button><i className="fab fa-github"></i>GitHub</Button>
          </Link>
          </div>
          <div>
          <Link href='https://twitter.com/Kirill98711794' passHref={true}>
            <Button><i className="fab fa-twitter-square"></i>Twitter</Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    )
}
