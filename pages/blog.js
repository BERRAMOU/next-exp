import styles from "../styles/Home.module.css";
import Menu from "./components/menu";
import Footer from "./components/footer";
import useSWR from "swr";
import {useRouter} from "next/router";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data;
};

/**
 * Blog Page.
 */
function BlogPage() {
    const API_ARTICLES_URL = "http://d9-project-9-0-1.dd:8083";

    // Get query params.
    const {query} = useRouter();

    // Fetch articles list.
    const {data, error} = useSWR(
        () => query.page && `${API_ARTICLES_URL}/articles?_format=json&page=${query.page}`,
        fetcher
    );

    if (error) return (<div>{error.message}</div>);
    if (!data) return (<div>Loading...</div>);

    const listArticles = data.map((article) =>
        <li>
            {
                (typeof article.field_image[0] !== 'undefined') &&
                <img src={article.field_image[0].url} alt={article.field_image[0].alt}/>
            }
            <div className="article-infos">
                <h3><a href={'/blog/posts/' + article.nid[0].value}> {article.title[0].value}</a></h3>
                <div className="article-summary">{article.body[0].summary}</div>
                <a href={'/blog/posts/' + article.nid[0].value} className="read-more-btn"> Read more</a>
            </div>
        </li>
    );

    return (
        <div className={styles.container}>
            <Menu/>
            <main className={styles.main}>
                <h1> List of articles ordered by chronological order</h1>
                <div className="articles-list">
                    <ul> {listArticles} </ul>
                </div>
                <div className="pagination">
                    <ul>
                        <li><a href="/blog?page=0" className={query.page === '0' ? 'active' : ''}> 1 </a></li>
                        <li><a href="/blog?page=1" className={query.page === '1' ? 'active' : ''}> 2 </a></li>
                        <li><a href="/blog?page=2" className={query.page === '2' ? 'active' : ''}> 3 </a></li>
                    </ul>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default BlogPage;