
const Content = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="content">
                        <div className="format-text">
                                <Html2React html={data.text} />
                        </div>
                </div>
        )
}

export default Content;