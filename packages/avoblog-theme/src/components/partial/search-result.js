import { useState, useEffect } from 'react';
import { connect } from 'frontity';
import axios from 'axios';
import CustomScroll from 'react-custom-scroll';

import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const SearchResult = ({ state, actions, libraries }) => {
        const data = state.theme.options.search;
        const Html2React = libraries.html2react.Component;
        const [list, setList] = useState(data.list);
        const [title, setTitle] = useState(data.recommend);
        const [args, setArgs] = useState({
                search: ''
        });
        const [count, setCount] = useState(0);
        const [isLoading, setLoading] = useState(false);

        function updateArgs(search = ''){
                setArgs((prevState) => ({
                        ...prevState,
                        search: search
                }));
        }

        useEffect(() => {
                if(count){
                        if(!isLoading){
                                setLoading(true);
                                axios.post(state.theme.api + 'search-items',  args ).then(res => {
                                        setList(res.data.list);
                                        setTitle(res.data.title);
                                        setLoading(false);
                                }); 
                        }
                }else{
                        setCount(1);
                }
        }, [args])

	return (
                <>
                        <div className="form">
                                <h2>{data.search}</h2>
                                <form onSubmit={(e) => {e.preventDefault();updateArgs( e.target.search.value)}}>
                                <input type="text" name="search" placeholder="Cari blog disini..." />
                                        <button type="submit" className="cvr-bg"></button>
                                </form>
                        </div>
                        <div className={`result ${isLoading ? 'fetching' : ''}`}>
                                <h2>{title}</h2>
                                {list.items.length > 0 &&
                                        <CustomScroll heightRelativeToParent="280px">
                                                <div className="rowflex">                                                        
                                                        {list.items.map((v ,k) => {
                                                                return(
                                                                        <div className="item" key={k}>
                                                                                 {v.thumbnail != '' &&
                                                                                        <figure>
                                                                                                <Link link={v.url}   onClick={() => actions.theme.hideSearchPopup()}><Image src={v.thumbnail} /></Link>
                                                                                        </figure>
                                                                                }
                                                                                <div className="caption">
                                                                                        <h3><Link link={v.url} style={{'--hover-color': data.color}} onClick={() => actions.theme.hideSearchPopup()}>{v.title}</Link></h3>
                                                                                        <div className="cats">
                                                                                                {v.category.length > 0 && <Link link={v.category[0].slug}  onClick={() => actions.theme.hideSearchPopup()}><Html2React html={v.category[0].name} /></Link>}
                                                                                        </div>
                                                                                        {v.tag.length > 0 &&
                                                                                                <div className="tags">
                                                                                                        {v.tag.map((vt,vk) => {
                                                                                                                return(
                                                                                                                        <Link key={vk} link={vt.slug} style={{color: data.color, '--hover-bg': data.color}}   onClick={() => actions.theme.hideSearchPopup()} >{vt.label}</Link>
                                                                                                                )
                                                                                                        })}
                                                                                                </div>
                                                                                        }
                                                                                </div>
                                                                        </div>        
                                                                )
                                                        })}     
                                                </div>
                                        </CustomScroll>
                                }
                                {list.items.length == 0 &&
                                        <div className="notfound">
                                                <p>Post not found!</p>
                                        </div>
                                }
                        </div>
                </>
	);
};

export default connect(SearchResult);