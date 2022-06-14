
import { connect } from 'frontity';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import HeadMeta from '../head-meta';
import img404 from '../../../assets/img/icon/404.png';

const Error404 = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
	return (
                <>
                        <HeadMeta />
                        <div className="inner-404">        
                                <div className="wrapper">
                                        <figure><Image src={img404} width="256" /></figure>
                                        <p>The page that you're looking for doesn't exist</p>
                                        <div className="action">
                                                <Link className="button" link="/">Back to Home</Link>
                                                <Link className="button btn-hollow" link="/blog">All Article</Link>
                                        </div>
                                </div>
                        </div>
                </>
	);
};

export default connect(Error404);