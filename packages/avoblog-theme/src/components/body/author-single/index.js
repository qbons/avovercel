
import { connect } from 'frontity';

import HeadMeta from '../head-meta';
import Profile from './profile';
import Grid from './grid';
import Article from './article';
import Pamflet from './pamflet';

const AuthorSingle = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
	return (
                <>
                        <HeadMeta/>
                        <div className="inner-author">
                                <Profile data={req.data.profile} libraries={libraries}/>
                                <Grid />
                                <Article  data={req.data.article} libraries={libraries}/>
                                <Pamflet data={req.data.pamflet} />
                        </div>
                </>
	);
};

export default connect(AuthorSingle);