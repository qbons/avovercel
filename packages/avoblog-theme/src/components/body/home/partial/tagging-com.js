import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const TaggingCom = (props) => {
        const data = props.data;
        const bg = data.bg;
        const mbg = (data.mbg != '' ) ? data.mbg : bg;
        return(
                <>
                        {bg != '' &&
                                <>
                                        <span className="bg cvr-bg" style={{backgroundImage: `url('${bg}')`}}></span>
                                        <span className="bg mbg cvr-bg" style={{backgroundImage: `url('${mbg}')`}}></span>
                                </>
                        }
                        <div className="wrapper">
                                {data.title != '' && <h2>{data.title}</h2>}
                                <div className="rowflex">
                                        {data.img != '' && <figure>
                                                {data.url != '' ? <Link link={data.url}><Image src={data.img} /></Link> : <Image src={data.img} /> }
                                        </figure>}
                                        {data.tag.length > 0 &&
                                                <div className="caption">
                                                        {data.tag.map((v, k) => {
                                                                return(
                                                                        <Link link={v.slug} key={k}>{v.hash}</Link>
                                                                )
                                                        })}
                                                </div>
                                        }
                                </div>
                        </div>
                </>
        )
}

export default TaggingCom;