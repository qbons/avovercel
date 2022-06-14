import TaggingCom from "./partial/tagging-com";

const Tagging2 = (props) => {
        return(
                <div className="tagging switched">
                        <TaggingCom data={props.data} />
                </div>
        )
}

export default Tagging2;