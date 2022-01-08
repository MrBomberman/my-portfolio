import classes from './burgerMenu.module.scss';

export default function BurgerMenu({header,links, activeMenu, setActiveMenu}){
    return (
        <div className={activeMenu == true ? classes.activeBurgerMenu : classes.burgerMenu} >
            <div className={classes.linksList}>
                <div className={classes.burgerHeader}>{header}</div>
                <ul>
                    {links.map(link => {
                            return (
                            <li key={link}>
                                <a href={`#${link}`} onClick={() => setActiveMenu(false)}>{link}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}