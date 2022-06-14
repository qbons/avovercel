
import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Banner = (props) => {
        const data = props.data;
        const img = data.img;
        const mimg = (data.mimg != '') ? data.mimg : img;
        return(
                <>
                        {img != '' &&
                                <div className="banner">
                                        {data.url != '' 
                                                ? <Link link={data.url}><Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" width="1920" height="720" /></Link>
                                                : <Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" width="1920" height="720" />                                        
                                        }
                                </div>
                        }
                </>
        )
}

export default Banner;