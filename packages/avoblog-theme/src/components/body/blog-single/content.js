
import Link from '@frontity/components/link';

const Content = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="content">
                        <div className="format-text">
                                <Html2React html={data.text} />
                        </div>
                        {data.tags.length > 0 &&
                                <div className="tags">
                                        <h2>Tags Terkait</h2>
                                        {data.tags.map((v, k) => {
                                                return(
                                                        <Link key={k} link={v.slug}>{v.label}</Link>
                                                )
                                        })}
                                </div>
                        }
                        
                </div>
        )
}

export default Content;