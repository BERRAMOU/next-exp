import styles from "../styles/Home.module.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

/**
 * Contact Page.
 */
function ContactPage() {
    return (
        <div className={styles.container}>
            <Menu/>

            <main className={styles.main}>
                <div>Contact Page</div>
            </main>

            <Footer/>
        </div>
    )
}

export default ContactPage;