import { Typography } from '../Typography/Typography';
import s from './Button.module.css';
import cn from 'classnames';

/**
 * variants -> primary (green+white) , secondary (black+green) , 
 */

export const Button = ({width ="100%", variant = 'primary', label , size = "m", onClick}) => {
    return <div style={{width: width}} className={cn(s.button, variant === 'primary' ? s.primary : s.secondary, size === "m" ? s.m : s.l)} onClick={onClick}>
        <Typography label={label}/>
    </div>
}