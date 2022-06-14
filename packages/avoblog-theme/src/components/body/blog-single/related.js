
import Image from "@frontity/components/image";
import Link from '@frontity/components/link';
import Sticky from 'react-stickynode';

const Related = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="related">
                        <Sticky enabled={true} top={0} bottomBoundary="#main">
                                <div className="holder">
                                        {data.blog.length > 0 &&
                                                <>
                                                        <h2>Blog Terkait</h2>
                                                        <div className="list">
                                                                {data.blog.map((v, k) => {
                                                                        return(
                                                                                <div className="item" key={k}>
                                                                                        {v.thumbnail != '' && <figure><Link link={v.slug}>
                                                                                                {k == 0 ? <Image src={v.thumbnail} width="248" height="107" /> :  <Image src={v.thumbnail} width="79" height="59" />}
                                                                                        </Link></figure>}
                                                                                        <h3><Link link={v.slug}><Html2React html={v.title} /></Link></h3>
                                                                                </div>                
                                                                        )
                                                                })}
                                                        </div>
                                                </>
                                        }
                                        {data.trending.length > 0 &&
                                                <>
                                                        <h2>Trending</h2>
                                                        <div className="tags">
                                                                {data.trending.map((v, k) => {
                                                                        return(
                                                                                <Link key={k} link={v.slug}>{v.label}</Link>
                                                                        )
                                                                })}
                                                        </div>
                                                </>
                                        }
                                </div>
                        </Sticky>
                </div>
        )
}

export default Related;