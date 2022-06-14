import CarouselCom from './partial/carousel-com';

const Caro3 = (props) => {
        const data = props.data;
        return(
                <div className="caro">
                        <CarouselCom data={data} />
                </div>
        )
}

export default Caro3;