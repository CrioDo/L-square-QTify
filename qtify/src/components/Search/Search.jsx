import style from "./Search.module.css";
import searchIcon from '../../assets/searchIcon.svg'
export default function Search(props) {
    const handleSubmit = (e) => {
        console.log("click");
    };
    const handleChange =(e) =>{
        console.log(e.target.value);
    }

    return (
        <>
            <form className={style.wrapper} >
                <input className={style.search} type="text" placeholder={props.placeholder} onChange={handleChange}/>
                <button type="submit" className={style.searchBtn}>
                    <img
                        src={searchIcon}
                        alt="Search Icon"
                        onClick={handleSubmit}
                        className={style.searchIcon}
                    />
                </button>
            </form>
        </>
    )
}