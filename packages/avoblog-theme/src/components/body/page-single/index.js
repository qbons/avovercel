
import { connect } from 'frontity';

import HeadMeta from '../head-meta';
import Intro from './intro';
import Main from './main';

const PageSingle = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
	return (
                <>      
                        <HeadMeta />
                        <div className="detail-blog detail-page">
                                <Intro data={req.data.intro} libraries={libraries} />
                                <Main  data={req.data}  libraries={libraries} />
                        </div>
                </>
	);
};

export default connect(PageSingle);