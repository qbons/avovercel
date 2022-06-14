
const Like = (props) => {
        const data = props.propsLike;
        const setPopup = data.setPopup;
        const likeLoading = data.likeLoading;
        const like = data.like;
        const hasSpan = data.hasSpan;

        return(
                <>
                        <a href="#" className="cvr-bg" onClick={(e) => {e.preventDefault(); setPopup(true);}} ></a>
                        {hasSpan 
                                ? <span><b className={likeLoading ? 'fetching' : ''}>{like}</b> Orang Menyukai</span>
                                : <b className={likeLoading ? 'fetching' : ''}>{like}</b>
                        }
                       
                </>
        )
}
export default Like;