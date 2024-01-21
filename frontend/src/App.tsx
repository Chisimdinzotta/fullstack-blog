import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import ArticleListPage from "./pages/ArticlesListPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
import ArticlePage from "./pages/ArticlePage";

const App: React.FC = () =>{
  return(
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element ={<AboutPage/>}/>
          <Route path="/articles" element ={<ArticleListPage/>}/>
          <Route path="/articles/:articleId" element ={<ArticlePage/>}/>
          <Route path="*" element ={<NotFound/>}/>
        </Routes>
      </div>
   </Router>
  );
};

export default App;
