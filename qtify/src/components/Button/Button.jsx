import stlyes from './Button.module.css'
export default function Button({ children }) {
    return (
        <button className={stlyes.feedbackButton}>
            {children}
        </button>
    )
}