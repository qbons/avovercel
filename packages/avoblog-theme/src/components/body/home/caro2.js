import CarouselCom from './partial/carousel-com';

const Caro2 = (props) => {
        const data = props.data;
        return(
                <div className="caro">
                        <CarouselCom data={data} />
                </div>
        )
}

export default Caro2;