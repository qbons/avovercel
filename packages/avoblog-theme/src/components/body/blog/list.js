
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const List = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <>
                        {data.items.length > 0 
                                ?
                                        <div className="list">
                                                {data.items.map((v, k) => {
                                                        return(
                                                                <div className="item" key={k}>
                                                                        {v.thumbnail != '' &&
                                                                                <figure>
                                                                                        {v.category.length > 0 && <span><Link link={v.category[0].slug}><Html2React html={v.category[0].name} /></Link></span> }
                                                                                        <Link link={v.url}><Image src={v.thumbnail} /></Link>
                                                                                </figure>
                                                                        }
                                                                        <div className="caption">
                                                                                <h3><Link link={v.url}><Html2React html={v.title} /></Link></h3>
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
                                :
                                        <div className="format-text">
                                                <p>Article tidak ditemukan!</p>
                                        </div>
                        }
                </>
        )
}

export default List;