import { Link } from "react-router-dom";
import Search from "./SearchBar";

const Header = () => {
  return (
    <div className="header">
        <div className="hero my-hero">
            <div className="my-hero-content">
                <h1 className="mb-5 text-6xl ">Find your film</h1>
                <Link to="/">
                Home
                </Link>
                <br/>
                <Link to="/watchlist">
                My watchlist
                </Link>
            </div>
        </div>
    </div>
  );
};
export default Header;
