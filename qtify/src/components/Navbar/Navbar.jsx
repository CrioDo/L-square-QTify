import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import s from './Navbar.module.css';

export const Navbar = () => {
    return <div className={s.navbarContainer}>
        <Logo />
        <SearchBar/>
        <Button label="Give Feedback" width="170px" variant="secondary" onClick={() => {}}/>
    </div>
}