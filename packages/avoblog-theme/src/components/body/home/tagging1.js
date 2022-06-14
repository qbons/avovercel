import TaggingCom from "./partial/tagging-com";

const Tagging1 = (props) => {
        return(
                <div className="tagging">
                        <TaggingCom data={props.data} />
                </div>
        )
}

export default Tagging1;