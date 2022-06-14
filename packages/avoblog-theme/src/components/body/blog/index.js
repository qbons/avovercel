
import { connect } from 'frontity';
import {useState} from 'react';
import HeadMeta from '../head-meta';
import Sidebar from './sidebar';
import Main  from './main';

const Blog = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const [showTag, setShowTag] = useState(false);
	return (
                <>
                        <HeadMeta />
                        <div className="inner-blog">
                                <div className="wrapper rowflex">
                                        <Sidebar showTag={setShowTag} data={req.data.sidebar} libraries={libraries} />
                                        <Main showTag={showTag} setShowTag={setShowTag} />                    
                                </div>
                        </div>
                </>
	);
};

export default connect(Blog);