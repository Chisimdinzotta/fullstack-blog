import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Comments from "../components/CommentsList";
import NotFound from "./NotFoundPage";
import articleType from "../models/article.model";

interface ArticleIdType{
    articleId:string;
}

interface ArticleInfoType{
    upvote: number;
    comment: string[];
}

const ArticlePage: React.FC = ()=>{

    const [articleInfo, setArticleInfo] = useState<ArticleInfoType>({upvote:0, comment:[]});
    const [Loadidng, setLoading] = useState<Boolean>(true);
    const {articleId}: ArticleIdType = useParams();

    useEffect(()=>{
        const loadArticleInfo = async ()=>{
            const response = await axios.get(`/api/articles/${articleId}`)
            const newArticlesInfo: ArticleInfoType = response.data;
            setArticleInfo(newArticlesInfo);
            setLoading(false);
        }
        loadArticleInfo();
    }, []);



    return(
        <div>
            <h1>Article Page</h1>
        </div>
    )

};