import {useState,} from 'react';

const Info = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        const [isFull, setFull ] = useState(false);
        return(
                <div className="info">
                        <div className="wrapper">
                                <div className="pusher">
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
                </div>
        )
}

export default Info;