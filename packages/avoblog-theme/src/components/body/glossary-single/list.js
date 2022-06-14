import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const List = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <>
                        {data.items.length > 0 &&
                                <div className="list">
                                        <div className="wrapper">
                                                <div className="pusher">
                                                        <div className="heading">
                                                                <h2>Kamus Terkait</h2>
                                                        </div>
                                                        <div className="rowflex">
                                                                {data.items.map((v, k) => {
                                                                        return(
                                                                                <div className="item" key={k}>
                                                                                        {v.thumbnail != '' && <figure><Link link={v.url}><Image src={v.thumbnail} /></Link></figure> }
                                                                                        <div className="caption">
                                                                                                <h3><Link link={v.url}>{v.title}</Link></h3>
                                                                                                <div className="format-text">
                                                                                                        <Html2React html={v.excerpt} />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        )
                                                                })}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        }
                </>
        )
}

export default List;