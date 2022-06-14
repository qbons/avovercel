import { useState, useEffect } from 'react';
import { connect } from 'frontity';
import Switch from '@frontity/components/switch';
import axios from 'axios';

import HeadMeta from '../head-meta';
import Banner from './banner';
import List from './list';
import Info from './info';
import Pamflet from './pamflet';
import Product from './product';
import Grid from './grid';
import Alpha from './alpha';

const Glossary = ({ state, libraries }) => {
        const req = state.source.get(state.router.link);
        const visibility = req.data.visibility;
        const order = req.data.order;
        const [showAlpha, setShowAlpha] = useState(false);
        const [list, setList] = useState(req.data.glossary.list);
        const [currentAlpha, setCurrentAlpha] = useState(req.data.glossary.currentAlpha);
        const alphabet = req.data.glossary.alphabet;
        const [isLoading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
        const [args, setArgs] = useState({
                alphabet: currentAlpha,
                page: 1,
                search: ''
        });

        function updateArgs(alpha, page, search = ''){
                setCurrentAlpha(alpha);
                setArgs((prevState) => ({
                        ...prevState,
                        page: page,
                        alphabet: alpha,
                        search: search
                }));
        }

        useEffect(() => {
                if(count){
                        if(!isLoading){
                                setLoading(true);
                                axios.post(state.theme.api + 'glossary-items',  args ).then(res => {
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

	return (
                <>
                        <HeadMeta />
                        <div className="inner-kamus">
                                {order.map((v, k) => {
                                        return(
                                                <Switch key={k}>
                                                        <Banner when={v == 'banner' && visibility.includes(v)} data={req.data.banner} />
                                                        <List when={v == 'glossary' && visibility.includes(v)}  
                                                                show={setShowAlpha} 
                                                                libraries={libraries} 
                                                                list={list} 
                                                                data={req.data.glossary} 
                                                                currentAlpha={currentAlpha} 
                                                                alphabet={alphabet}
                                                                updateArgs={updateArgs}
                                                                isLoading={isLoading}
                                                        />
                                                        <Info when={v == 'info' && visibility.includes(v)} data={req.data.info} libraries={libraries} />
                                                        <Pamflet when={v == 'pamflet' && visibility.includes(v)} data={req.data.pamflet} />
                                                        <Product when={v == 'product' && visibility.includes(v)} data={req.data.product} libraries={libraries}  />
                                                        <Grid when={v == 'article' && visibility.includes(v)} data={req.data.article} libraries={libraries} />
                                                </Switch>
                                        )
                                })};
                                {showAlpha && <Alpha show={setShowAlpha} alphabet={alphabet} currentAlpha={currentAlpha} updateArgs={updateArgs} /> }
                        </div>
                </>
	);
};

export default connect(Glossary);