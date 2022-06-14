import Carousel from '../../partial/carousel';
import {useState} from 'react';

import Link from '@frontity/components/link';

import PopupShop from '../../partial/popup-shop';

const Product = (props) => {
        const data = props.data;
        const list = data.list.items;
        const [showPopup, setShowPopup ] = useState(false);
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <>
                        {data.hide != 'yes'  &&
                                <div className="product">
                                        <div className="wrapper">
                                                <div className="hentry clearfix">
                                                        {data.title != '' && <h2>{data.title}</h2>}
                                                        {(data.more != '' && data.url != '') && <Link link={data.url} className="cvr-bg-af">{data.more}</Link>}
                                                </div>
                                                {list.length > 0 &&
                                                        <Carousel settings={{item:4, unslick: true}}>
                                                                {list.map((v, k) => {
                                                                        return(
                                                                                <div className="item" key={k}>
                                                                                        {v.thumbnail != '' &&
                                                                                                <figure>
                                                                                                        { v.url != ''  ? <Link link={v.url}><img src={v.thumbnail} /></Link>  : <img src={v.thumbnail} /> }
                                                                                                </figure>
                                                                                        }
                                                                                        <div className="caption">
                                                                                                <h3>{v.url != ''  ? <Link link={v.url}><Html2React html={v.title} /></Link> : <Html2React html={v.title} /> }</h3>
                                                                                                {v.category.length > 0 &&
                                                                                                        <div className="cat">
                                                                                                                {v.category.map((vc, kc) => {
                                                                                                                        return(
                                                                                                                                <span key={kc}>{(kc + 1) < v.category.length ?  <><Link link={`/product/${vc.slug}`}>{vc.name}</Link>, </>: <Link link={`/product/${vc.slug}`}>{vc.name}</Link>}</span>
                                                                                                                        )
                                                                                                                })}
                                                                                                        </div>
                                                                                                }
                                                                                                <a href="#" className="button cvr-bg-af" onClick={(e) => {e.preventDefault(); setShowPopup(v.shop)}}>Shop Now</a>
                                                                                        </div>
                                                                                </div>
                                                                        )
                                                                })}
                                                        </Carousel>
                                                }
                                                {(data.more != '' && data.url != '') &&
                                                        <div className="centered">
                                                                <Link link={data.url} className="button cvr-bg-af">{data.more}</Link>
                                                        </div>
                                                }
                                        </div>
                                        {Array.isArray(showPopup) && <PopupShop data={showPopup} show={setShowPopup} />}
                                </div>
                        }
                </>
        )
}

export default Product;