import Carousel from '../carousel';
import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const CarouselCom = (props) => {
        const data = props.data;
        return(
                <>
                        {data.length > 0 &&
                                <Carousel>
                                        {data.map((v, k) => {
                                                const bg = v.bg;
                                                const mbg = (v.mbg != '' ) ? v.mbg : bg;
                                                return(
                                                        <div className="item" key={k}>
                                                                {(v.title == '' && v.subtitle == '' && v.btn == '' && v.img == '') 
                                                                ?
                                                                        <Link link={v.url} className="full">
                                                                                <Image src={bg} srcSet={`${mbg} 500w, ${bg} 800w`} sizes="(min-width: 769px) 100vw, 30vw" />
                                                                        </Link>
                                                                :
                                                                        <>
                                                                                <span className="bg cvr-bg" style={{backgroundImage: `url('${bg}')`}}></span>
                                                                                <span className="bg mbg cvr-bg" style={{backgroundImage: `url('${mbg}')`}}></span>
                                                                                <div className="wrapper rowflex">
                                                                                        {v.img != '' && 
                                                                                                <figure><Link link={v.url}><img src={v.img} /></Link></figure>
                                                                                        }
                                                                                        <div className="caption">
                                                                                                {v.subtitle != '' && <span><Link link={v.url}>{v.subtitle}</Link></span>}
                                                                                                {v.title != '' && <h2><Link link={v.url}>{v.title}</Link></h2>}
                                                                                                {v.btn != '' && <Link link={v.url} className="button">{v.btn}</Link>}
                                                                                        </div>
                                                                                </div>
                                                                        </>
                                                                }
                                                        </div>
                                                )
                                        })}
                                </Carousel>
                        }
                </>
        )
}

export default CarouselCom;