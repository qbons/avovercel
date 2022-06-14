import { connect } from 'frontity';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Item from './item';
import Loadmore from './loadmore';

const List = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const data= req.data.product;
        const [list, setList] = useState(req.data.product.list);
        const [catTitle, setCatTitle] = useState(data.currentCat.title);
        const [isLoading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
        const [args, setArgs] = useState({
                category: data.currentCat.slug,
                page: '1'
        });

        function filterProduct(slug, title){
                setCatTitle(title);
                setArgs((prevState) => ({
                        ...prevState,
                        page: 1,
                        category: slug
                }));
        }

        useEffect(() => {
                if(count){
                        if(!isLoading){
                                setLoading(true);
                                axios.post(state.theme.api + 'product-items',  args ).then(res => {
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
                <div className="list">
                        <div className="wrapper">
                                <div className="hentry clearfix">
                                        {data.title != '' && <h2>{data.title}</h2>}
                                        {data.category.length > 0 &&
                                                <div className="filter">
                                                        <span className="cvr-bg-af">{catTitle}</span>
                                                        <div className="holder">
                                                                <ul>
                                                                        {data.category.map((v, k) => {
                                                                                return(
                                                                                        <li key={k}><a href="#" className={catTitle == v.title ? 'active' : ''} onClick={(e) => { e.preventDefault(); filterProduct(v.slug, v.title)}}>{v.title}</a></li>
                                                                                )
                                                                        })}
                                                                </ul>
                                                        </div>
                                                </div>
                                        }
                                </div>
                                {list.items.length > 0 &&
                                        <div className={`rowflex ${isLoading ? 'fetching' : ''}`} style={{minHeight:'100vh'}}>
                                                {list.items.map((v, k) => {
                                                        return (
                                                                <Item key={k} data={v} clicked={filterProduct} libraries={libraries} />
                                                        )
                                                })}
                                        </div>
                                }
                                {(list.items.length > 0 && list.next !== 'no') && <Loadmore product={list} setArgs={setArgs} isloading={isLoading} />}
                        </div>
                </div>
        )
}

export default connect(List);