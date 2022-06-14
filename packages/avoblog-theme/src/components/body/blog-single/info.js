
import Link from '@frontity/components/link';
import Sticky from 'react-stickynode';

import Like from './like';
import CopyShare from './copy-share';

const Info = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        props.propsLike.hasSpan = true;

        return(
                <div className="info">
                        <Sticky enabled={true} top={180} bottomBoundary="#main">
                                <div className="holder">
                                        <div className="ftitle">
                                                <strong>Like</strong>
                                                <span><Link link={data.category.slug}><Html2React html={data.category.name} /></Link></span>
                                                <h3><Html2React html={data.title} /></h3>
                                        </div>
                                        <div className="like">
                                                <Like propsLike={props.propsLike} />
                                        </div>
                                        <div className="share">
                                                <h3>Share</h3>
                                                <CopyShare/>
                                        </div>
                                </div>
                        </Sticky>
                </div>
        )
}

export default Info;