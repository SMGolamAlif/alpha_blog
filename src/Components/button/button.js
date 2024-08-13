import styles from './button.module.scss'
import Link from 'next/link';


const Button = ({ href, children }) => {
    if(href){
        return <Link className={styles.button} href={href}>{children}</Link>
    }
    return <button  className={styles.button}>{children}</button>
};

export default Button;