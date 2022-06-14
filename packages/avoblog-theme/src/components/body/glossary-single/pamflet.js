import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Pamflet = (props) => {
        const data = props.data;
        const img = data.img;
        const mimg = (data.mimg != '') ? data.mimg : img;
        return(
                <>
                        {(data.hide != 'yes' && img != '') &&
                                <div className="pamflet">
                                        <div className="wrapper">
                                                {data.url != '' 
                                                        ? <Link link={data.url}><Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" /></Link>
                                                        : <Image src={img} srcSet={`${mimg} 500w, ${img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" />                                        
                                                }
                                        </div>
                                </div>
                        }
                </>
        )
}

export default Pamflet;