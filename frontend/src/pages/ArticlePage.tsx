import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Comments from "../components/CommentsList";
import NotFound from "./NotFoundPage";
//import articleType from "../models/article.model";
import articles from "../assets/article.content";
import { CommentsType } from "../models/comments.model";
import articleType from "../models/article.model";

interface ArticleIdType {
    articleId: string;
}

interface ArticleInfoType {
    upvotes: number;
    comment: CommentsType[];
}

const ArticlePage: React.FC = () => {

    const [articleInfo, setArticleInfo] = useState<ArticleInfoType>({ upvotes: 0, comment: [] });
    const [Loading, setLoading] = useState<Boolean>(true);
    const articleId = useParams()['articleId'];


    useEffect(() => {
        const loadArticleInfo = async () => {
            try {
                const response = await axios.get(`/api/article/${articleId}`)
                const newArticleInfo: ArticleInfoType = response.data
                setArticleInfo(newArticleInfo)
            }
            catch (error) {
                console.log(`${error} occured while loading article`);
            }
            finally {
                setLoading(false);
            }
        }
        loadArticleInfo();
    }, [])

    const article = articles.find(article => article.title === articleId);

    if (!article) {
        return (
            <NotFound />
        )
    };

    const addUpVote = async () => {
        const reponse = await axios.put(`//api/article/${articleId}/upvote`);
        const updatedArticleInfo: ArticleInfoType = reponse.data;
        setArticleInfo(updatedArticleInfo);
    };

    return (
        <div>
            {Loading ? (
                <h1>Loading...</h1>
            ) : (
            <div>
                <h1>{article.title}</h1>
                <div className="">
                    <button onClick={addUpVote}>Upvote</button>
                    <p>This article is {articleInfo.upvotes} vote(s)</p>
                </div>
                {article.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))};
                <Comments comments={articleInfo.comment} />           
            </div>
            )};
        </div>
        );

};

export default ArticlePage;