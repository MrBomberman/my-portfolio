import { useEffect } from 'react';
import classes from './burgerMenu.module.scss';

export default function BurgerMenu({header,links, activeMenu, setActiveMenu,activeTab}){


    useEffect(() => {
        activeTab.current.checked
    })

    return (
        <div className={activeMenu == true ? classes.activeBurgerMenu : classes.burgerMenu} >
            <div className={classes.linksList}>
                <div className={classes.burgerHeader}>Where to go next ?</div>
                <ul>
                    {links.map(link => {
                            return (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} onClick={() => {
                                    setActiveMenu(false)
                                    activeTab.current.checked = false;
                                }
                                }>{link}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}