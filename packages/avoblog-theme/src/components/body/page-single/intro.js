
const Intro = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;        

        return(
                <div className="intro">
                        <div className="wrapper">
                                <div className="pusher">
                                        <div className="heading">
                                                <h1><Html2React html={data.title} /></h1>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Intro;