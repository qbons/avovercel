
import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Profile = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="profile">
                        <div className="wrapper">
                                <div className="rowflex">
                                        {data.avatar != '' && <figure><Image src={data.avatar} /></figure>}
                                        <div className="caption">
                                                {data.subtitle != '' && <strong>{data.subtitle}</strong>}
                                                {data.title != '' && <h2>{data.title}</h2>}
                                                {data.bio != '' &&
                                                        <div className="format-text">
                                                                <Html2React html={data.bio} />
                                                        </div>
                                                }
                                                <div className="meta">
                                                        {data.join != '' && <span>{data.join}</span>}
                                                        <div className="social">
                                                                {data.ig != '' && <a href={data.ig} target="_blank" className="cvr-bg ig"></a>}
                                                                {data.fb != '' && <a href={data.fb} target="_blank" className="cvr-bg fb"></a>}
                                                                {data.tw != '' && <a href={data.tw} target="_blank" className="cvr-bg tw"></a>}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Profile;