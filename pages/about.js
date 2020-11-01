import styles from "../styles/Home.module.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

/**
 *  About Page.
 */
function AboutPage() {
    return (
        <div className={styles.container}>
            <Menu/>

            <main className={styles.main}>
                <div>About Page</div>
            </main>

            <Footer/>
        </div>
    )
}

export default AboutPage;
