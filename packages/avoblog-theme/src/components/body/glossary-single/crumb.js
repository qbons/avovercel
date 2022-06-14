
import Link from '@frontity/components/link';

const Crumb = (props) => {
        const data = props.data;
        return(
                <div className="crumb">
                        <div className="wrapper">
                                <Link link={data.base.slug}>{data.base.title}</Link>
                                <i className="cvr-bg"></i>
                                <Link link={data.alpha.slug}>{data.alpha.title}</Link>
                                <i className="cvr-bg"></i>
                                <span>{data.content.title}</span>
                        </div>
                </div>
        )
}

export default Crumb;