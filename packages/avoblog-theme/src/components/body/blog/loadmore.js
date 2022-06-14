
import ScrollTrigger from 'react-scroll-trigger';

const Loadmore = (props) => {
        const setArgs = props.setArgs;
        const next = props.article.next;
        function handleOnview(){
                setArgs((prevState) => ({
                        ...prevState,
                        page: parseInt(next)
                }));
        }
        return(
                <>
                        {props.isloading 
                                ? <div className="loadmore"> <span className="cvr-bg-bf">Sedang Memuat..</span></div>
                                : <ScrollTrigger onEnter={handleOnview} ></ScrollTrigger>
                        }
                </>
        )
}

export default Loadmore;