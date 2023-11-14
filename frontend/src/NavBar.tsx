import { Link } from "react-router-dom";

const NavBar: React.FC = ()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/articles">Articles</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;