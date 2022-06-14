import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Grid = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        const list = data.list.items;
        return(
                <div className="grid">
                        <div className="wrapper">
                                <div className="hentry clearfix">
                                        {data.title != '' && <h2>{data.title}</h2>}
                                        {(data.url != '' && data.more != '' ) &&  <Link link={data.url} className="cvr-bg-af">{data.more}</Link>}
                                </div>
                                {list.length > 0 &&
                                        <div className="rowflex">
                                                {list.map((v, k) => {
                                                        return(
                                                                <div className="item" key={k}>
                                                                        {v.thumbnail != '' &&
                                                                                <figure>
                                                                                        {v.category.length > 0 && <span><Link link={v.category[0].slug}><Html2React html={v.category[0].name} /></Link></span> }
                                                                                        <Link link={v.url}><Image src={v.thumbnail} /></Link>
                                                                                </figure>
                                                                        }
                                                                        <div className="caption">
                                                                                <h3><Link link={v.url}>{v.title}</Link></h3>
                                                                                {v.tag.length > 0 &&
                                                                                        <div className="tags">
                                                                                                {v.tag.map((vt,vk) => {
                                                                                                        return(
                                                                                                                <Link key={vk} link={vt.slug}>{vt.label}</Link>
                                                                                                        )
                                                                                                })}
                                                                                        </div>
                                                                                }
                                                                        </div>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                }
                                {(data.url != '' && data.more != '' ) &&  
                                        <div className="centered for-mobile">
                                                <Link link={data.url} className="button">{data.more}</Link>
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default Grid;