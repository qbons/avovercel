import { connect } from "frontity";

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

const Menu = ({state}) => {
        const menu = state.theme.navigation;
        return(
                <div className="mainmenu">
                        {menu.mainmenu.length > 0 && 
                                <ul>
                                        {menu.mainmenu.map((v, k) => {
                                                let classes = (v.child.length > 0 || v.nesting ) ? 'has-child ' : ' ';
                                                classes += (v.child.length > 0) ? 'regular-child ' : '';
                                                classes += (state.router.link == v.slug) ? 'current-menu-item ' : '';
                                                return(
                                                        <li className={classes} key={k}>
                                                                <Link link={v.slug}>{v.title}</Link>
                                                                {v.child.length > 0 &&
                                                                        <ul>
                                                                                {v.child.map((cv,ck) => {
                                                                                        return(
                                                                                                <li key={ck}><Link link={cv.slug}>{cv.title}</Link></li>
                                                                                        )        
                                                                                })}
                                                                        </ul>
                                                                }
                                                                {v.nesting &&
                                                                        <ul>
                                                                                <li className="layer">
                                                                                        <div className="rowflex">
                                                                                                {v.child.thumb != '' &&
                                                                                                        <div className="thumb">
                                                                                                                <Link link={v.child.parentSlug}>
                                                                                                                        <Image src={v.child.thumb} width="304" height="221" />
                                                                                                                        <span>{v.child.parentTitle}</span>
                                                                                                                </Link>
                                                                                                        </div>
                                                                                                }
                                                                                                {v.child.child.length > 0 &&
                                                                                                        <ul>
                                                                                                              {v.child.child.map((ccv, cck) => {
                                                                                                                      return (
                                                                                                                                <li key={cck}><Link link={ccv.slug}>{ccv.title}</Link></li>
                                                                                                                        )
                                                                                                              })}
                                                                                                        </ul>
                                                                                                }
                                                                                                {v.child.article.length > 0 &&
                                                                                                        <div className="list">
                                                                                                                {v.child.article.map((av, ak) => {
                                                                                                                        return(
                                                                                                                                <div key={ak} className="item">
                                                                                                                                        <figure><Link link={av.slug}><Image src={av.thumbnail} width="103" height="78" /></Link></figure>
                                                                                                                                        <h3><Link link={av.slug}>{av.title}</Link></h3>
                                                                                                                                </div>        
                                                                                                                        )
                                                                                                                })}
                                                                                                                <Link link={v.child.parentSlug} className="cvr-bg-af">Artikel {v.child.parentTitle}</Link>
                                                                                                        </div>
                                                                                                }
                                                                                        </div>
                                                                                </li>
                                                                        </ul>
                                                                }
                                                        </li>
                                                )
                                        })}
                                </ul>
                        }
                </div>
        )
}
export default connect(Menu);