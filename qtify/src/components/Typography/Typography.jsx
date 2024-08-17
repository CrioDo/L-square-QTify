import s from './Typography.module.css';
import cn from 'classnames';

//variants -> body_b, body_r

export const Typography = ({label, variant="body_b"}) => {
    return <p className={cn(s.label, variant === "body_b" ? s.body_b : s.body_r )}>{label}</p>
}