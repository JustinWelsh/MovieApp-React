import Search from "./Search";

const Header = () => {
  return (
    // <div className="flex justify-between items-center">
    //     <h1 className="text-7xl font-extrabold">Find your film</h1>
    //     <a href="#" className="text-2xl font-bold">My Watchlist</a>
    // </div>

    <div
      className="hero"
    //   style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className=" text-center py-36">
        <div className="text-white">
          <h1 className="mb-5 text-6xl font-bold">Find your film</h1>
          <a href="#"className="mb-5 font-bold">
            My watchlist
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
