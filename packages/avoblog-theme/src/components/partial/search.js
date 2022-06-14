import { connect } from 'frontity';

import SearchResult from './search-result';
import Link from '@frontity/components/link';
const Search = ({ state, actions }) => {
	return (
                <>
                        <a href="#" className="dsearch cvr-bg" onClick={(e) => {e.preventDefault();actions.theme.toggleSearchPopup();}}></a>
                        <Link link="/search" className="msearch cvr-bg" onClick={() =>{ actions.theme.toggleMobileMenu()} }>Search...</Link>
                        {state.theme.isSearchOpen &&
                                <div className="search-popup">
                                        <div className="layer">
                                                <a href="#" className="cls cvr-bg" onClick={(e) => {e.preventDefault();actions.theme.hideSearchPopup();}}></a>
                                                <SearchResult/>
                                        </div>
                                </div>
                        }
                </>
	);
};

export default connect(Search);