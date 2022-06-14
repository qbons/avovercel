
import {useState, useEffect} from 'react';
import { connect, Head } from 'frontity';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import HeadMeta from '../head-meta';
import Intro from './intro';
import Main from './main';
import Product from './product';
import Banner from './banner';
import Utility from './utility';
import Grid from './grid';

const BlogSingle = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const dataLike = req.data.like;
        const [like,setLike] = useState(0);
        const [popup, setPopup] = useState(false);
        const [isLoading, setLoading] = useState(false);
        const [likeLoading, setLikeLoading] = useState(true);
        const propsLike = {
                setPopup:setPopup, 
                likeLoading:likeLoading,
                like:like,
                hasSpan:false,
        };
        
        useEffect(() => {
                setLikeLoading(true);
                axios.post(state.theme.api + 'get-like',  {id: dataLike.id} ).then(res => {
                       setLike(res.data);
                       setLikeLoading(false);
                 }); 
        }, [req])

        function updateLike(e){
                e.preventDefault();
                if(!isLoading){
                        setLoading(true);
                        axios.post(state.theme.api + 'update-like',  {id: dataLike.id, email: e.target.email.value} ).then(res => {
                               if(res.data.status == 'ok'){
                                        toast.success(res.data.msg);
                                        setLike(res.data.count);
                                        setPopup(false);
                               }else{
                                        toast.error(res.data.msg);
                               }
                               setLoading(false);
                        }); 
                }
        }
	return (
                <>
                        {req.data.faq != '' &&
                                <Head><script type="application/ld+json">{req.data.faq}</script></Head>
                        }
                        {req.data.schema != '' &&
                                <Head><script type="application/ld+json">{req.data.schema}</script></Head>
                        }
                        <HeadMeta/>
                        <div className="detail-blog">
                                <Intro propsLike={propsLike} data={req.data.intro} libraries={libraries} />
                                <Main  propsLike={propsLike} data={req.data}  libraries={libraries} />
                                <Product data={req.data.product} libraries={libraries} />
                                <Banner data={req.data.banner} libraries={libraries} />
                                <Utility data={req.data.utility} libraries={libraries} />
                                <Grid data={req.data.grid} libraries={libraries} /> 
                                {popup &&
                                        <div className="popup-layer">
                                                <div id="popup-like" className="popup-filter">
                                                        <button className="close-popup cvr-bg-af" onClick={(e) => {e.preventDefault();setPopup(false)}}></button>
                                                        <div className="hentry">
                                                                <h2>Like</h2>
                                                                <p>Silahkan masukkan email</p>
                                                        </div>
                                                        <div className={`form-basic ${isLoading ? 'fetching' : ''}`}>
                                                                <form onSubmit={updateLike}>
                                                                        <input type="email" name="email" placeholder="contoh@email.com" required="required" />
                                                                        <button type="submit" className="button">Submit</button>
                                                                </form>
                                                        </div>
                                                </div>
                                        </div>
                                }
                        </div>
                </>
	);
};

export default connect(BlogSingle);