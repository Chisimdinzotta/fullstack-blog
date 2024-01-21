import { Link } from "react-router-dom";
import articleType from "../models/article.model";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase.config";
import { useEffect, useState } from 'react';


interface ArticleProp{
    articles: articleType[]
}
const ArticlesList: React.FC<ArticleProp> = ({articles})=>{

  useEffect(() => {
    const addUser = async () => {
      const userCollection = collection(db, 'users');
      const newUser = { name: 'John Doe', email: 'john@example.com' };

      try {
        const docRef = await addDoc(userCollection, newUser);
        console.log('Document written with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding document:', error);
      }
    };

    addUser(); 
  }, []); 

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
