import { useState } from 'react';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

import PopupShop from './../../partial/popup-shop';

const Item = (props) => {
        const data = props.data;
        const clicked = props.clicked;
        const [showPopup, setShowPopup] = useState(false);
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="item">
                        {data.thumbnail != '' &&
                                <figure>
                                        { data.url != ''  ? <Link link={data.url}><Image src={data.thumbnail} /></Link>  : <Image src={data.thumbnail} /> }
                                </figure>
                        }
                        <div className="caption">
                                <h3>{data.url != ''  ? <Link link={data.url}><Html2React html={data.title} /></Link> : <Html2React html={data.title} /> }</h3>
                                {data.category.length > 0 &&
                                        <div className="cat">
                                                {data.category.map((v, k) => {
                                                        return(
                                                               <span key={k}>{(k + 1) < data.category.length ?  <><a href="#" onClick={(e) => {e.preventDefault(); clicked(v.slug, v.name)}}>{v.name}</a>, </>: <a href="#" onClick={(e) => {e.preventDefault(); clicked(v.slug, v.name)}}>{v.name}</a>}</span>
                                                        )
                                                })}
                                        </div>
                                }
                                <a href="#" className="button cvr-bg-af" onClick={(e) => {e.preventDefault(); setShowPopup(true)}}>Shop Now</a>
                                {showPopup && <PopupShop data={data.shop} show={setShowPopup} />}
                        </div>
                </div>
        )
}

export default Item;