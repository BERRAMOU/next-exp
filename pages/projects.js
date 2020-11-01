import styles from "../styles/Home.module.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

/**
 * Projects Page.
 */
function ProjectsPage() {
    return (
        <div className={styles.container}>
            <Menu/>

            <main className={styles.main}>
                <div>Projects Page</div>
            </main>

            <Footer/>
        </div>
    )
}

export default ProjectsPage;