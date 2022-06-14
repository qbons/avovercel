import Carousel from '../../partial/carousel';

import Link from '@frontity/components/link';

const Grid = (props) => {
        const data = props.data;
        const list = data.list.items;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <>
                        {list.length > 0 &&
                                <>
                                        <div className="grid">
                                                <div className="wrapper">
                                                        <div className="hentry clearfix">
                                                                <h2>Next Articles</h2>
                                                                <Link link="/blog" className="cvr-bg-af">Selengkapnya</Link>
                                                        </div>
                                                        <Carousel settings={{item:4, unslick: false}}>
                                                                {list.map((v, k) => {
                                                                        return(
                                                                                <div className="item" key={k}>
                                                                                        {v.thumbnail != '' &&
                                                                                                <figure>
                                                                                                        {v.category.length > 0 && <span><Link link={v.category[0].slug}><Html2React html={v.category[0].name} /></Link></span> }
                                                                                                        <Link link={v.url}><img src={v.thumbnail} width="258" height="258" /></Link>
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
                                                        </Carousel>
                                                        <div className="centered">
                                                                <Link link="/blog" className="button cvr-bg-af">Selengkapnya</Link>
                                                        </div>
                                                </div>
                                        </div>
                                </>
                        }
                </>
        )
}

export default Grid;