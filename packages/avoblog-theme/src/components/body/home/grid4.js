import GridCom from "./partial/grid-com";

const Grid4 = (props) => {
        return(
                <div className="grid">
                        <GridCom data={props.data} col={3} />
                </div>
        )
}

export default Grid4;