import Header from '../Header'
import Hero from "../Hero"
import Steps from "../Steps"
import About from "../About"
import Promotions from "../Promotions"
import Opinions from "../Opinions"
import Contact from "../Contact"
import styles from './Home.module.scss';
import Navigation from '../Navigation/Navigation'


export default function Home({t}){
    return (
        <div className={styles.style}>
            <Navigation t={t} />
            <Header />
            <Hero/>
            <Steps/>
            <About />
            <Promotions />
            <Opinions />
            <Contact />
        </div>
    )
}