
import { connect } from 'frontity';

import SearchResult from '../../partial/search-result';
const Search = ({ state, libraries }) => {
	return (
                <>      
                        <div className="inner-search">
                                <div className="wrapper">
                                        <div className="search-popup">
                                                <div className="layer">
                                                        <SearchResult/>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
	);
};

export default connect(Search);