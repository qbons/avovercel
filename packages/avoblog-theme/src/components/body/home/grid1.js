import GridCom from "./partial/grid-com";

const Grid1 = (props) => {
        return(
                <div className="grid">
                        <GridCom data={props.data} col={4} />
                </div>
        )
}

export default Grid1;