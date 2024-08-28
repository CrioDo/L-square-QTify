import styles from './Button.module.css';

/**
 * 
 * @param {string} text
 * button text
 * @param {function} handleOpen
 * open feedback modal form
 */
const Button = ({ text, handleOpen }) => {
    return (
        <button 
            className={styles.button}
            onClick={() => handleOpen()}
        >
            {text}
        </button>
    );
};

export default Button;