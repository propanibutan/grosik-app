import Header from './Header'
import Hero from "./Hero"
import Steps from "./Steps"
import About from "./About"
import Promotions from "./Promotions"
import Opinions from "./Opinions"
import Contact from "./Contact"

export default function Home(){
    return (
        <div class="top-background bottom-background">
            <Header/>
            <Hero/>
            <Steps/>
            <About />
            <Promotions />
            <Opinions />
            <Contact />
        </div>
    )
}