
import { connect, useConnect } from 'frontity';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Info from './info';
import List from './list';;
import Loadmore from './loadmore';
import Tags from './tags';

const Main = (props) => {
        const {state, libraries} = useConnect();
        const req = state.source.get(state.router.link);
        const [list, setList] = useState(req.data.main.list);
        const [info, setInfo] = useState(req.data.info);
        const [isLoading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
        const [args, setArgs] = useState({
                category: req.data.main.category,
                tag: req.data.main.tag,
                page: '1',
                img_size: {
                        w: 336,
                        h: 248
                }
        });
        const showTag = props.showTag;
        const setShowTag = props.setShowTag;
        
        useEffect(() => {
                setList(req.data.main.list);
                setInfo(req.data.info);
                setArgs({
                        category: req.data.main.category,
                        tag: req.data.main.tag,
                        page: '1',
                        img_size: {
                                w: 336,
                                h: 248
                        }
                });
        }, [req])

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
                <>
                        <article className="main">
                                <Info data={info} libraries={libraries}/>
                                <List data={list} libraries={libraries} />
                                <div id="loadmore"></div>
                                {(list.items.length > 0 && list.next !== 'no') && <Loadmore article={list} setArgs={setArgs} isloading={isLoading} />}
                        </article>
                        {showTag && <Tags setShowTag={setShowTag}  data={req.data.sidebar.tag} libraries={libraries} /> }
                </>
        )
}

export default connect(Main);