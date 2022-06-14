import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import Like from './like';
import CopyShare from './copy-share';

const Intro = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        const author = data.author;

        return(
                <div className="intro">
                        <div className="wrapper">
                                <div className="pusher">
                                        <div className="heading">
                                                <h1><Html2React html={data.title} /></h1>
                                                <span>
                                                        <Like propsLike={props.propsLike} />
                                                </span>
                                        </div>
                                        <div className="meta">
                                                <span>{data.published}</span>
                                                <CopyShare/>
                                        </div>
                                        <div className="author">
                                                {author.avatar != '' && <figure><Link link={author.slug}><Image src={author.avatar} width="72" height="72" /></Link></figure>}
                                                <div className="caption">
                                                        <h3><Link link={author.slug}>{author.name}</Link></h3>
                                                        {author.occ != '' && <span>{author.occ}</span>}
                                                </div>
                                                <strong>
                                                        <Like propsLike={props.propsLike} />
                                                </strong>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Intro;