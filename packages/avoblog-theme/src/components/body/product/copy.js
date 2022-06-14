import {useState,} from 'react';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Copy = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        const img = data.img;
        const mimg = (data.mimg != '') ? data.mimg : img;
        const [isFull, setFull ] = useState(false);
        return(
                <div className="copy">
                        <div className="wrapper">
                                {data.title != '' && <h2>{data.title}</h2> }
                                {data.text != '' &&
                                        <div className="format-text">
                                                {(isFull == false && data.excerpt != '') 
                                                        ? <><Html2React html={data.excerpt} /> <a href="#" onClick={(e) => {e.preventDefault();setFull(true)}}>Show More</a></>
                                                        : <><Html2React html={data.text} /> {data.excerpt != '' && <a href="#" onClick={(e) => {e.preventDefault();setFull(false)}}>Show Less</a>}</>
                                                }
                                        </div>
                                }
                                {img != '' &&
                                        <div className="plang">
                                                {data.url != '' 
                                                        ? <Link link={data.url}><Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" /></Link>
                                                        : <Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" />                                        
                                                }
                                        </div>
                                }
                        </div>
                </div>
        )
}
export default Copy;