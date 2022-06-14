import Image from "@frontity/components/image";

const Intro = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="intro">
                        <div className="wrapper">
                                <div className="hentry">
                                        {data.title != '' && <h2><Html2React html={data.title} /></h2>}
                                        {data.text != '' &&
                                                <div className="format-text">
                                                        <Html2React html={data.text} />
                                                </div>
                                        }
                                </div>
                                {data.img != '' &&
                                        <figure>
                                                <Image src={data.img} srcSet={`${data.mimg} 500w, ${data.img} 800w`} sizes="(min-width: 769px) 100vw, 30vw" />
                                        </figure>
                                }
                        </div>
                </div>
        )
}

export default Intro;