import { useState, useEffect } from 'react';
import { connect } from 'frontity';
import axios from 'axios';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Grid = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const data = req.data.grid;
        const Html2React = libraries.html2react.Component;
        const [list, setList] = useState(req.data.grid.list);
        const [isLoading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
        const [args, setArgs] = useState({
                author: data.author,
                page: 1,
                perpage: 8
        });

        function updateArgs(page){
                setArgs((prevState) => ({
                        ...prevState,
                        page: page
                }));
        }

        useEffect(() => {
                if(count){
                        if(!isLoading){
                                setLoading(true);
                                axios.post(state.theme.api + 'blog-items',  args ).then(res => {
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
                <div className={`grid ${isLoading ? 'fetching' : ''}`}>
                        <div className="wrapper">
                                <div className="hentry clearfix">
                                        {data.title != '' && <h2>{data.title}</h2>}
                                        {(data.url != '' && data.more != ''  ) && <Link link={data.url} className="cvr-bg-af">{data.more}</Link>}
                                </div>
                                {list.items.length > 0 ?
                                        <>
                                                <div className="rowflex">
                                                        {list.items.map((v, k) => {
                                                                return(
                                                                        <div className="item" key={k}>
                                                                                {v.thumbnail != '' &&
                                                                                        <figure>
                                                                                                {v.category.length > 0 && <span><Link link={v.category[0].slug}><Html2React html={v.category[0].name} /></Link></span> }
                                                                                                <Link link={v.url}><Image src={v.thumbnail} /></Link>
                                                                                        </figure>
                                                                                }
                                                                                <div className="caption">
                                                                                        <h3><Link link={v.url}>{v.title}</Link></h3>
                                                                                        {v.tag.length > 0 &&
                                                                                                <div className="tags">
                                                                                                        {v.tag.map((vt,vk) => {
                                                                                                                return(
                                                                                                                        <Link key={vk} link={vt.slug}>{vt.label}</Link>
                                                                                                                )
                                                                                                        })}
                                                                                                </div>
                                                                                        }
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                                {list.next != 'no' &&
                                                        <div className="centered">
                                                                <a href="#" className="button" onClick={(e) => {e.preventDefault(); updateArgs(list.next)}}>{data.btn != '' ? data.btn : 'Muat Lebih Banyak' }</a>
                                                        </div>
                                                }
                                        </>
                                :
                                        <div class="format-text" style={{textAlign: 'center', minHeight: '200px'}}>
                                                <p>Artikel tidak ditemukan!</p>
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default connect(Grid);