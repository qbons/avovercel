import {useState, useEffect} from 'react';
import { connect } from 'frontity';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Detail = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const data = req.data.detail;
        const Html2React = libraries.html2react.Component;
        const [like,setLike] = useState(0);
        const [popup, setPopup] = useState(false);
        const [isLoading, setLoading] = useState(false);
        const [likeLoading, setLikeLoading] = useState(true);

        useEffect(() => {
                setLikeLoading(true);
                axios.post(state.theme.api + 'get-like',  {id: data.id} ).then(res => {
                       setLike(res.data);
                       setLikeLoading(false);
                 }); 
        }, [req])

        function updateLike(e){
                e.preventDefault();
                if(!isLoading){
                        setLoading(true);
                        axios.post(state.theme.api + 'update-like',  {id: data.id, email: e.target.email.value} ).then(res => {
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

        function copyURL(e,url){
                e.preventDefault();
                navigator.clipboard.writeText(url);
                toast.success('Tautan berhasil disalin!');
        }

        return(
                <div className="detail">
                        <div className="wrapper rowflex">
                                {data.thumbnail != '' && <figure><Image src={data.thumbnail} /></figure>}
                                <div className="caption">
                                        <h2>{data.title}</h2>
                                        <div className="format-text">
                                                <Html2React html={data.text} />
                                        </div>
                                        <div className="meta clearfix">
                                                <div className="like">
                                                        <a href="#" className="cvr-bg" onClick={(e) => {e.preventDefault(); setPopup(true);}}></a>
                                                        <span><em className={likeLoading ? 'fetching' : ''}>{like}</em> <b>Menyukai Kamus Ini</b></span>
                                                </div>
                                                <div className="share">
                                                        <span>Bagikan</span>
                                                        <a href='#'  className="cvr-bg cp" onClick={(e) => {copyURL(e,state.theme.options.siteURL+ data.slug);}} title="Salin tautan"></a>
                                                        <Link link={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(state.theme.options.siteURL+ data.slug) }`} target="_blank" className="cvr-bg fb" title="Bagikan di Facebook"></Link>
                                                        <Link link={`https://twitter.com/intent/tweet?url=${encodeURIComponent(state.theme.options.siteURL+ data.slug)}`} target="_blank" className="cvr-bg tw" title="Bagikan di Twitter"></Link>
                                                </div>
                                        </div>
                                </div>
                        </div>
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
        )
}

export default connect(Detail);