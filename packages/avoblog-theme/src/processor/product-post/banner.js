import {useState} from 'react';
import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

import PopupShop from '../../components/partial/popup-shop';



const Banner  = ({state, actions, data}) => {
        const [showPopup, setShowPopup] = useState(false);
        return(
                <div className="sc-product">
                        {data.link != '' 
                        ?
                                <Link link={data.link} target="_blank">
                                        <Image className="sc-img" src={data.img} srcSet={`${data.mimg} 500w, ${data.img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" width="698" height="194" />
                                </Link>
                        :
                                <>
                                        <a href="#"  onClick={(e) => {e.preventDefault(); setShowPopup(true)}}>
                                                <Image className="sc-img" src={data.img} srcSet={`${data.mimg} 500w, ${data.img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" width="698" height="194" />
                                        </a>
                                        {showPopup && <PopupShop data={data.shop} show={setShowPopup} />}
                                </>
                        }
                </div>
        )
}

export default Banner;