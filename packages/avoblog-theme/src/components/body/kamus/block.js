import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Block = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="block">
                        <div className="wrapper">
                                {data.map((v, k) => {
                                        return(
                                                <div className="item" key={k}>
                                                        {v.img != '' && <figure><Image src={v.img} /></figure> }
                                                        <div className="caption">
                                                                <div className="holder">
                                                                        {v.title != '' && <h2><Html2React html={v.title} /></h2>}
                                                                        {v.text != '' &&
                                                                                <div className="format-text">
                                                                                        <Html2React html={v.text} />
                                                                                </div>
                                                                        }
                                                                        {(v.btn !='' && v.url != '') && <Link link={v.url} className="button">{v.btn}</Link> }
                                                                </div>
                                                        </div>
                                                </div>
                                        )
                                })}
                        </div>
                </div>
        )
}

export default Block;