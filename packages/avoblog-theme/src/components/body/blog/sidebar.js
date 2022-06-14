
import Link from '@frontity/components/link';
import Sticky from 'react-stickynode';
import CustomScroll from 'react-custom-scroll';


const Holder = (props) => {
        const data = props.data.data;
        const libraries = props.data.libraries;
        const Html2React = libraries.html2react.Component;
        return(
                <div className="holder">
                        <h2><Html2React html={data.title} /> <a href="#"className="trigger-tag cvr-bg-bf" onClick={(e) => {e.preventDefault(); props.showTag(true)}}>Tags</a></h2>
                        {data.category.item.length > 0 &&
                                <div className="blocky">
                                        <CustomScroll heightRelativeToParent="220px">
                                                <ul>
                                                        {data.category.item.map((v, k) => {
                                                                return(
                                                                        <li key={k}>
                                                                                <Link link={v.slug}><Html2React html={v.name} /></Link>
                                                                                {v.child.length > 0 &&
                                                                                        <>
                                                                                                <input type="checkbox" />
                                                                                                <b></b>
                                                                                                <ul>
                                                                                                        {v.child.map((vc, vk) => {
                                                                                                                return(
                                                                                                                        <li key={vk}><Link link={vc.slug}><Html2React html={vc.name} /></Link></li>
                                                                                                                )
                                                                                                        })}
                                                                                                </ul>
                                                                                        </>
                                                                                }
                                                                        </li>
                                                                )        
                                                        })}
                                                </ul>
                                        </CustomScroll>
                                </div>
                        }
                        {data.tag.item.length > 0 &&
                                <div className="liney">
                                        <CustomScroll heightRelativeToParent="140px">
                                                <ul>
                                                        {data.tag.item.map((v, k) => {
                                                                return(
                                                                        <li key={k}><Link link={v.slug}><Html2React html={v.hash} /></Link></li>
                                                                )        
                                                        })}
                                                </ul>
                                        </CustomScroll>
                                </div>
                        }
                </div>
        )
}

const Sidebar = (props) => {
        return(
                <aside className="sidebar">
                        <Sticky enabled={true} top={120} bottomBoundary="#loadmore">
                                <Holder showTag={props.showTag} data={props} />
                        </Sticky>
                </aside>
        )
}

export default Sidebar;