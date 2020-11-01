import styles from "../../../styles/Home.module.css";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import {useRouter} from 'next/router'
import useSWR from 'swr'


const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data;
};

/**
 * Post Page.
 */
function PostPage() {
    const API_URL = "http://d9-project-9-0-1.dd:8083";
    // Get the query params.
    const {query} = useRouter();
    // Fetch article data.
    const {data, error} = useSWR(
        () => query.id && `${API_URL}/node/${query.id}?_format=json`,
        fetcher
    );
    if (error) return (<div>{error.message}</div>);
    if (!data) return (<div>Loading...</div>);

    return (
        <div className={styles.container}>
            <Menu/>

            <main className={styles.main}>
                <h2 className="article-title"> {data.title[0].value}</h2>
                {
                    (typeof data.field_image[0] !== 'undefined') &&
                    <div className="article-image">
                        <img src={data.field_image[0].url} alt={data.field_image[0].alt}/>
                    </div>
                }
                <div className="article-body" dangerouslySetInnerHTML={{__html: data.body[0].value}}/>
                <span> This article created : {data.created[0].value}</span>
                <span className="article-changed"> This article changed last time : {data.changed[0].value}</span>
            </main>

            <Footer/>
        </div>
    )
}

export default PostPage;