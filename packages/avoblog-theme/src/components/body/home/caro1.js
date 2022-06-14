import CarouselCom from './partial/carousel-com';

const Caro1 = (props) => {
        const data = props.data;
        return(
                <div className="caro">
                        <CarouselCom data={data} />
                </div>
        )
}

export default Caro1;