import ArticlesList from "../components/ArticlesList"
import articles from "../assets/article.content"

const ArticleListPage: React.FC = () => {
    return (
        <div>
            <h1>Articles</h1>
            <p><ArticlesList articles={articles} /></p>
        </div>
    );
};

export default ArticleListPage;