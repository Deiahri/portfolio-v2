import styles from './Button.module.css';

export default function Button({...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className={styles.button} {...props}>
        
    </button>
}