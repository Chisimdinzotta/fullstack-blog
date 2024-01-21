import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import ArticleListPage from "./pages/ArticlesListPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
import ArticlePage from "./pages/ArticlePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/createAccountPage";

const App: React.FC = () =>{
  return(
    <Router>
      <div className="App">
        <NavBar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element ={<AboutPage/>}/>
            <Route path="/articles" element ={<ArticleListPage/>}/>
            <Route path="/articles/:articleId" element ={<ArticlePage/>}/>
            <Route path="*" element ={<NotFound/>}/>
            <Route path="/login" element ={<LoginPage/>}/>
            <Route path="/create-account" element ={<CreateAccount/>}/>
          </Routes>
        </div>
      </div>
   </Router>
  );
};

export default App;
