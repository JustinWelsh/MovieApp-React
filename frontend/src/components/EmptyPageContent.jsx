import { TbMovie } from 'react-icons/tb';

const EmptyPageContent = (props) => {
    return (
        <div className="content-div">
          <span className="text-9xl"><TbMovie /></span>
          <div className="text-2xl">
            {props.children}
            {/* {apiData.Error ?
            'Unable to find what you are looking for. Please try another search.' : onWatchlistPage ?
            'Watchlist is empty' :
            'Start exploring'} */}
          </div>
        </div>
        )
}
export default EmptyPageContent