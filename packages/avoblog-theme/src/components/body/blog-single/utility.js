
import { connect } from 'frontity';
import {useState, useEffect} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Utility = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const Html2React = libraries.html2react.Component;
        const author = req.data.intro.author;
        const [list, setList] = useState(false);
        const [isLoading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
        const [args, setArgs] = useState({
                page: 1,
                post: req.data.comment.post
        });

        function updateArgs(page){
                setArgs((prevState) => ({
                        ...prevState,
                        page: page
                }));
        }

        function submitComment(e){
                e.preventDefault();
                if(!isLoading){
                        setLoading(true);
                        const payload = {
                                name:  e.target.name.value,
                                email:  e.target.email.value,
                                comment:  e.target.comment.value,
                                post:  req.data.comment.post
                        }
                        axios.post(state.theme.api + 'submit-blog-comment',  payload ).then(res => {
                                if(res.data.status == 'ok'){
                                        setList(res.data.comment);
                                        e.target.name.value = '';
                                        e.target.email.value = '';
                                        e.target.comment.value = '';
                                        toast.success(res.data.msg);
                               }else{
                                        toast.error(res.data.msg);
                               }
                                setLoading(false);
                        }); 
                }       
        }

        useEffect(() => {
                setArgs((prevState) => ({
                        ...prevState,
                        page: 1,
                        post: req.data.comment.post
                }));
                setLoading(true);
                axios.post(state.theme.api + 'blog-comment',  {
                        page: 1,
                        post: req.data.comment.post
                } ).then(res => {
                        setList(res.data);
                        setLoading(false);
                 }); 
        }, [req])

        useEffect(() => {
                if(count){
                        if(!isLoading){
                                setLoading(true);
                                axios.post(state.theme.api + 'blog-comment',  args ).then(res => {
                                        if(res.data.current == 1){
                                                setList(res.data);
                                                setLoading(false);
                                        }else{
                                                if(res.data.items.length > 0){
                                                        let newItems = list.items;
                                                        [...list.items, res.data.items.map((v,k) => {return v})];
                                                        res.data.items.map((v,k) => {
                                                                newItems = [...newItems, v];
                                                        })
                                                        res.data.items = newItems;
                                                        setList(res.data);
                                                }
                                                setLoading(false);
                                        }
                                }); 
                        }
                }else{
                        setCount(1);
                }
        }, [args])

        return(
                <div className="utility">
                        <div className="wrapper">
                                <div className="pusher">
                                        
                                        <div className="author">
                                                {author.avatar != '' && <figure><Link link={author.slug}><Image src={author.avatar} width="72" height="72" /></Link></figure>}
                                                <div className="caption">
                                                        <strong>Ditulis Oleh</strong>
                                                        <h3><Link link={author.slug}>{author.name}</Link></h3>
                                                        {author.occ != '' && <span>{author.occ}</span>}
                                                        <small>{req.data.intro.published}</small>
                                                </div>
                                        </div>
                                        
                                        <div className={`comment ${isLoading ? 'fetching' : '' }`}>
                                                <h2>Beri Komentar</h2>
                                                <form onSubmit={submitComment}>
                                                        <textarea placeholder="Komentar dan Tanggapan Anda" required="required" name="comment"></textarea>
                                                        <input type="text" placeholder="Nama Anda" required="required" name="name" />
                                                        <input type="email"  placeholder="Email Anda" required="required" name="email" />
                                                        <div className="rightned">
                                                                <button type="submit" className="button">Kirim Komentar</button>
                                                        </div>
                                                </form>
                                                <h2>Komentar</h2>
                                                {(list != false && list.items.length > 0)
                                                ?
                                                        <>
                                                                <div className="list">
                                                                        {list.items.map((v, k) => {
                                                                                return(
                                                                                        <div className="item" key={k}>
                                                                                                <div className="hcom">
                                                                                                        <h3>{v.name}</h3>
                                                                                                        <small>{v.email}</small>
                                                                                                        <span>{v.date}</span>
                                                                                                </div>
                                                                                                <div className="format-text">
                                                                                                        <Html2React html={v.comment} />
                                                                                                </div>
                                                                                                {v.child.length > 0 &&
                                                                                                        <>
                                                                                                                {v.child.map((vc, vk) => {
                                                                                                                        return(
                                                                                                                                <div className="child" key={vk}>
                                                                                                                                        <div className="hcom">
                                                                                                                                                <h3>{vc.name}</h3>
                                                                                                                                                <small>{vc.email}</small>
                                                                                                                                                <span>{vc.date}</span>
                                                                                                                                        </div>
                                                                                                                                        <div className="format-text">
                                                                                                                                                <Html2React html={vc.comment} />
                                                                                                                                        </div>
                                                                                                                                </div>
                                                                                                                        )
                                                                                                                }) }
                                                                                                        </>
                                                                                                }
                                                                                        </div>
                                                                                )
                                                                        })}
                                                                </div>
                                                                {list.next != 'no' &&
                                                                        <div className="rightned">
                                                                                <a href="#" className="button"   onClick={(e) => {e.preventDefault(); updateArgs(list.next)}}>Selengkapnya</a>
                                                                        </div>
                                                                }
                                                        </>
                                                :
                                                        <div className="format-text"><p>Belum ada komentar.</p></div>
                                                }
                                                
                                        </div>
                                        
                                </div>
                        </div>
                </div>
        )
}

export default connect(Utility);