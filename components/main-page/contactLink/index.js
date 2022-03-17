import Link from "next/link";
import { Button } from 'semantic-ui-react';

export default function ContactLink({link, classStyle, title}){
    return (
        <div>
            <Link href={link} passHref={true}>
            <Button><i className={classStyle}></i>{title}</Button>
            </Link>
        </div>
    )
}