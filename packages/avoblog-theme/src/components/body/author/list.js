import { useState, useEffect } from 'react';
import { connect } from 'frontity';
import axios from 'axios';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const List = ({state}) => {
        const req = state.source.get(state.router.link);
        const data = req.data.author;
        const [list, setList] = useState(req.data.author.list);
        const [isLoading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
        const [args, setArgs] = useState({
                page: 1,
        });
        
        function updateArgs(page){
                setArgs((prevState) => ({
                        ...prevState,
                        total: data.total,
                        page: page
                }));
        }

        useEffect(() => {
                if(count){
                        if(!isLoading){
                                setLoading(true);
                                axios.post(state.theme.api + 'author-items',  args ).then(res => {
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
                <div className={`list ${isLoading ? 'fetching' : ''}`}>
                        <div className="wrapper">
                                {data.title != '' && 
                                        <div className="hentry clearfix">
                                                <h2>{data.title}</h2>
                                        </div>
                                }
                                {list.items.length > 0 ?
                                        <>
                                                <div className="rowflex">     
                                                        {list.items.map((v, k) => {                                          
                                                                return(
                                                                        <div className="item" key={k}>
                                                                                {v.ava != '' && <figure><Link link={v.slug}><Image src={v.ava} width="72" height="72" /></Link></figure> }
                                                                                <div className="caption">
                                                                                        {v.name != '' && <h3><Link link={v.slug}>{v.name}</Link></h3>}
                                                                                        {v.occ != '' && <span>{v.occ}</span>}
                                                                                        <span>{v.count} Articles</span>
                                                                                        {v.join != '' && <i>{v.join}</i>}
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                                {list.next != 'no' &&
                                                        <div className="centered">
                                                                <a href="#" className="button"  onClick={(e) => {e.preventDefault(); updateArgs(list.next)}} >{data.btn != '' ? data.btn : 'Muat Lebih Banyak'}</a>
                                                        </div>
                                                }
                                        </>
                                :
                                        <div class="format-text">
                                                <p>Author tidak ditemukan!</p>
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default connect(List);