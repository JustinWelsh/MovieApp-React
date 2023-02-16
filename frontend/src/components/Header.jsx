
const Header = (props) => {
  return (
    <div className="header">
        <div className="hero my-hero">
            <div className="my-hero-content">
                <h1 className="mb-5 text-6xl ">{props.onWatchlistPage ? "My Watchlist" : "Find your film"}</h1>
            </div>
        </div>
    </div>
  );
};
export default Header;
