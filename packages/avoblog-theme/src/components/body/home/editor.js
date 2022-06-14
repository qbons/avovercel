import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Editor = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="editor">
                        <div className="wrapper">
                                <div className="hentry clearfix">
                                        {data.title != '' && <h2>{data.title}</h2>}
                                        {(data.more != '' && data.url != '') && <Link link={data.url} className="cvr-bg-af">{data.more}</Link>}
                                </div>
                                {data.author.length > 0 && 
                                        <div className={`list ${data.author.length == 1 ? 'onlyone' : ''}`}>
                                                <div className="rowflex">        
                                                        {data.author.map((v, k) => {
                                                                return (
                                                                        <div className="col" key={k}>
                                                                                <div className="person">
                                                                                        {v.editor.ava != '' && <figure><Link link={v.editor.slug}><Image src={v.editor.ava} width="72" /></Link></figure>}
                                                                                        <div className="caption">
                                                                                                <h3><Link link={v.editor.slug}>{v.editor.name}</Link></h3>
                                                                                                <span>{v.editor.occ}</span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="wrapitem">
                                                                                        {v.list.items.length > 0 &&
                                                                                                <>
                                                                                                        {v.list.items.map((vv, kk) => {
                                                                                                                return(
                                                                                                                        <div className="item" key={kk}>
                                                                                                                                {vv.thumbnail != '' &&
                                                                                                                                        <figure>
                                                                                                                                                <Link link={vv.url}><Image src={vv.thumbnail} /></Link>
                                                                                                                                        </figure>
                                                                                                                                }
                                                                                                                                <div className="caption">
                                                                                                                                        <h3><Link link={vv.url} style={{'--hover-color': data.color}}>{vv.title}</Link></h3>
                                                                                                                                        <div className="cats">
                                                                                                                                                {vv.category.length > 0 && <Link link={vv.category[0].slug}><Html2React html={vv.category[0].name} /></Link>}
                                                                                                                                        </div>
                                                                                                                                        {vv.tag.length > 0 &&
                                                                                                                                                <div className="tags">
                                                                                                                                                        {vv.tag.map((vt,vk) => {
                                                                                                                                                                return(
                                                                                                                                                                        <Link key={vk} link={vt.slug} style={{color: data.color, '--hover-bg': data.color}}>{vt.label}</Link>
                                                                                                                                                                )
                                                                                                                                                        })}
                                                                                                                                                </div>
                                                                                                                                        }
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                )
                                                                                                        })}
                                                                                                </>
                                                                                        }
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                        </div>
                                }       
                                  {(data.more != '' && data.url != '') && 
                                        <div className="centered">
                                                <Link link={data.url} className="button">{data.more}</Link>
                                        </div>
                                }
                        </div>
                </div>
        )
}

export default Editor;