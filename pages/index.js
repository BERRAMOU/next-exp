import Menu from '../pages/components/menu'
import Footer from '../pages/components/footer'
import styles from '../styles/Home.module.css'
import useSWR from "swr";

const API_ARTICLES_URL = "http://d9-project-9-0-1.dd:8083";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data;
};

/**
 *  Home Page.
 */
function Home() {
    const {data, error} = useSWR(
        () => `${API_ARTICLES_URL}/articles?_format=json`,
        fetcher
    );

    if (error) return (<div>{error.message}</div>);
    if (!data) return (<div>Loading...</div>);

    let listArticles = data.map((article) =>
        <li key={article.nid[0].value}>
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

            <div className={styles.main}>
                <h1> The 5 last articles </h1>
                <div className="articles-list">
                    <ul>
                        {listArticles}
                    </ul>
                </div>
                {/*
                <div className="go-to-blog-btn">
                <a href='/blog?page=0' className="read-more-btn"> Read more on blog</a>
                </div>*/}
            </div>

            <Footer/>
        </div>
    )
}

export default Home;