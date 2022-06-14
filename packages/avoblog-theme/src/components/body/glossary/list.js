import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Label = (props) => {
        return(
                <>{props.children}</>
        )
}
const List = (props) => {
        const show = props.show;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        const list = props.list;
        const data = props.data;
        const currentAlpha = props.currentAlpha;
        const alphabet = props.alphabet;
        const updateArgs = props.updateArgs;
        const isLoading = props.isLoading;
        
        return(
                <>
                        <div className="search">
                                <div className="wrapper">
                                        <form onSubmit={(e) => {e.preventDefault();updateArgs('all', 1, e.target.search.value)}}>
                                                <input type="text" name="search" placeholder="Cari kata disini..." />
                                                <button type="submit"></button>
                                        </form>
                                        <div className="alpha">
                                                {alphabet.map((v, k) => {
                                                        return(
                                                                <Label key={k}>
                                                                        <label key={k}><input type="radio" name="alpha" onChange={() => updateArgs(v.slug, 1)} checked={v.slug == currentAlpha ? true : false} /><b>{v.title}</b></label>
                                                                        {v.slug == 'o' && <span className="cvr-bg-bf" onClick={() => {show(true)}}></span>}
                                                                </Label>
                                                        )        
                                                })}
                                        </div>
                                </div>
                        </div>
                        <div className={`list ${isLoading ? 'fetching' : ''}`}>
                                <div className="wrapper">
                                        <div className="pusher">
                                                <div className="glos clearfix">
                                                        <h2>{data.title != '' && <>{data.title}</>}{currentAlpha != 'all' ? <b style={{textTransform: 'uppercase'}}>{currentAlpha}</b> : <b>&nbsp;</b>}</h2>
                                                        <span>{list.total} {data.found != '' && <>{data.found}</>}</span>
                                                </div>
                                                
                                                {list.items.length > 0 ?
                                                        <>
                                                                <div className="rowflex">
                                                                        {list.items.map((v, k) => {
                                                                                return(
                                                                                        <div className="item" key={k}>
                                                                                                {v.thumbnail != '' && <figure><Link link={v.url}><Image src={v.thumbnail} /></Link></figure> }
                                                                                                <div className="caption">
                                                                                                        <h3><Link link={v.url}>{v.title}</Link></h3>
                                                                                                        <div className="format-text">
                                                                                                                <Html2React html={v.excerpt} />
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                )
                                                                        })}
                                                                </div>
                                                                {list.next != 'no' &&
                                                                        <div className="centered">
                                                                                <a href="#" className="button" onClick={(e) => {e.preventDefault(); updateArgs(currentAlpha, list.next)}}>{data.button != '' ? data.button : 'Muat Lebih Banyak'}</a>
                                                                        </div>
                                                                }
                                                        </>
                                                :
                                                        <div className="centered">
                                                                <div className="format-text"><p>Glossarium tidak ditemukan!</p></div>
                                                        </div>
                                                }
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default List;