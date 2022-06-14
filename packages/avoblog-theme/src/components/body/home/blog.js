import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Blog = (props) => {
        const data = props.data;
        const bg = data.bg;
        const mbg = (data.mbg != '' ) ? data.mbg : bg;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="blogs">
                        {bg != '' &&
                                <>
                                        <span className="bg cvr-bg" style={{backgroundImage: `url('${bg}')`}}></span>
                                        <span className="bg mbg cvr-bg" style={{backgroundImage: `url('${mbg}')`}}></span>
                                </>
                        }
                        <div className="wrapper rowflex">
                                <div className="thumb">
                                        {data.title != '' && <h2 style={{color: data.color}}>{data.title}</h2>}
                                        {data.img != '' &&
                                                <>
                                                        {data.url != '' 
                                                        ? <Link link={data.url}><Image src={data.img} /></Link>
                                                        : <Image src={data.img} />
                                                        }
                                                </>
                                        }
                                </div>
                                <div className="wrap">
                                        {data.subtitle != '' && <h3 style={{color: data.color}}>{data.subtitle}</h3>}
                                        {data.list.items.length > 0 &&
                                                <div className="list">
                                                        {data.list.items.map((v ,k) => {
                                                                return(
                                                                        <div className="item" key={k}>
                                                                                 {v.thumbnail != '' &&
                                                                                        <figure>
                                                                                                <Link link={v.url}><img src={v.thumbnail} /></Link>
                                                                                        </figure>
                                                                                }
                                                                                <div className="caption">
                                                                                        <h3><Link link={v.url} style={{'--hover-color': data.color}}>{v.title}</Link></h3>
                                                                                        <div className="cats">
                                                                                                {v.category.length > 0 && <Link link={v.category[0].slug}><Html2React html={v.category[0].name} /></Link>}
                                                                                        </div>
                                                                                        {v.tag.length > 0 &&
                                                                                                <div className="tags">
                                                                                                        {v.tag.map((vt,vk) => {
                                                                                                                return(
                                                                                                                        <Link key={vk} link={vt.slug} style={{color: data.color, '--hover-bg': data.color}}>{vt.label}</Link>
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
                                </div>
                        </div>
                </div>
        )
}

export default Blog;