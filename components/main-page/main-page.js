import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import classes from './main-page.module.css'
import imageOfAuthor from '../../assets/images/personalblog.png'
import { Component, createRef } from 'react';

export default class MainPage extends Component{
  constructor(props){
    super(props);
    this.scroll = createRef()
    this.scrolling = this.scrolling.bind(this);
  }

     
  
  scrolling(){
      const slideInAt = (window.scrollY + window.innerHeight) - this.scroll.current.height / 2 // в итоге из этого выражения получаем число пикселей, на котором должна начать появляться каждая картинка в зависимости от ее размера и момента скролла, до которого мы дошли - середина картинки - нужная позиция
       const imageBottom = this.scroll.current.offsetTop + this.scroll.current.height; // получаем верхнюю позицию картинки по отношению к самому верху страницы и прибавляем к ней весь размер картинки, тем самым находим нижний край картинки
       console.log(imageBottom);
       const isHalfShown = slideInAt > this.scroll.current.offsetTop; // проверяем дошли ли мы до момента, когда надо показывать картинку - до ее середины- если вернхняя позиция картинки относительно начала страницы меньше, чем часть, которая показана - картинка появится
       console.log(isHalfShown);
       const isNotScrolledPast = window.scrollY < imageBottom; // дает результат, прокрутили ли мы картинку или нет - если картинка полностью прокручена - она должна снова исчезнуть - если мы прокрутили больше  и прошли нижнюю позицию картинки - то она снова исчезнет
       if(isHalfShown && isNotScrolledPast){
         this.scroll.current.add('active');
       } else {
         this.scroll.current.remove('active');
       }
    }

 
      



  render() {
    return (
      <> 
    <div className={classes.header}>
      <div className={classes.author}>
        <a href='#author'>KirIsakov.com</a></div>
      
      <div className={classes.navbar}>
      <a href='#about'>About</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
      </div>
    </div>
    <section className={classes.welcomeSection} id='author'>
      <h1>Hello! I am Kirill Isakov</h1>
      <p>Junior fronted-developer</p>
    </section>

    <div id='about' className={classes.about} ref={this.scroll} onScrollY={this.scrolling} >
      <div className={`${classes.info} ${classes.slideIn}`}>
      <Image src={imageOfAuthor}
              alt="Picture of the author"
              width={400}
              height={400}
              className={classes.image}/>
      </div>
      <div className={`${classes.info} ${classes.slideIn} ${classes.descr}`}>
        <p>My name is Kirill. I am from Moscow. Recently graduated from the Moscow State Linguistic University. I started doing web development more than six months ago, I am studying, creating my own projects, I have completed several courses. About my projects below</p>
      </div>
    </div>
      </>
  )
  }

}
