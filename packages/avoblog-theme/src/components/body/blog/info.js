import {useState,} from 'react';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Info = (props) => {
        const data = props.data;
        const img = data.img;
        const mimg = (data.mimg != '') ? data.mimg : img;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        const [isFull, setFull ] = useState(false);
        return(
                <div className="info">
                        {img != '' &&
                                <figure>
                                        {data.url != '' 
                                                ? <Link link={data.url}><Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" /></Link>
                                                : <Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" />                                        
                                        }
                                </figure>
                        }
                        <div className="caption">
                                {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                {data.text != '' &&
                                        <div className="format-text">
                                                {(isFull == false && data.excerpt != '') 
                                                        ? <><Html2React html={data.excerpt} /> <a href="#" onClick={(e) => {e.preventDefault();setFull(true)}}>Show More</a></>
                                                        : <><Html2React html={data.text} /> {data.excerpt != '' && <a href="#" onClick={(e) => {e.preventDefault();setFull(false)}}>Show Less</a>}</>
                                                }
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default Info;