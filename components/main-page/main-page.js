import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import classes from './main-page.module.css'
import imageOfAuthor from '../../assets/images/personalblog.png';
import sliderImage from '../../assets/images/slider.jpg'

export default function MainPage(){



  return (
        <> 
      <div className={classes.header}>
        <div className={classes.author}>
          <a href='#author'>KirIsakov.com</a></div>
        
        <div className={classes.navbar}>
        <a href='#about' >About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        </div>
      </div>
      <section className={classes.welcomeSection} id='author'>
        <h1>Hello! I am Kirill Isakov</h1>
        <p>Junior fronted-developer</p>
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
              <Image src={sliderImage}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.sliderImg}/>
                <p className={classes.sliderDescr}>Game</p>
              </a>
              </Link>
              <Link href='/features'>
              <a className={classes.slideGrid}>
              <Image src={sliderImage}
                alt="Picture of the author"
                width={400}
                height={400}
                className={classes.sliderImg}/>
                <p className={classes.sliderDescr}>CSS variables</p>
              </a>
              </Link>
          </div>
      </div>
        </>
    )
}
