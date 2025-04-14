import Divider from "../components/Divider/Divider"
import FAQ from "../components/FAQ/FAQ"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import CardSection from "../components/Sections/CardSection"

export default function HomePage(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <CardSection type={'top'}/>
            <Divider/>
            <CardSection type={'new'}/>
            <Divider/>
            <CardSection type={'songs'}/>
            <Divider/>
            <FAQ/>
        </>
    )
}