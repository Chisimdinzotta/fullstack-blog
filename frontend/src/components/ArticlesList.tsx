import { Link } from "react-router-dom";
import articleType from "../models/article.model";

interface ArticleProp{
    articles: articleType[]
}
const ArticlesList: React.FC<ArticleProp> = ({articles})=>{
    return(
        <div>
            {articles.map(article=>(
                <Link key={article.id} className="" to={`/articles/${article.title}`}>
                    <h2>{article.title}</h2>
                    <p>{article.content[0].substring(0,150)}...</p>
                </Link>
            ))}
        </div>
    )

};

export default ArticlesList;
