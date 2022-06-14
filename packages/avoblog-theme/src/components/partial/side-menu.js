
import { connect } from 'frontity';

import Image from "@frontity/components/image";
import Link from '@frontity/components/link';

import Search from './search';

const SideMenu = ({ state, actions }) => {
        const options = state.theme.options;
        const menu = state.theme.navigation;
	return (
                <div className="sidemenu">
                        <div className="bg"  onClick={() =>{ actions.theme.toggleMobileMenu()} }></div>
                        <div className="holder cvr-bg-af">
                                <div className="pusher">
                                        {options.logoHead != '' &&
                                                <div className="logo">
                                                        <Link link="/" onClick={() =>{ actions.theme.toggleMobileMenu()} }><Image src={options.logoHead} width="140" /></Link>
                                                </div>
                                        }
                                        <Search />
                                        {menu.mainmenu.length > 0 &&
                                                <div className="nav">
                                                        <ul>
                                                                {menu.mainmenu.map((v, k) => {
                                                                        return (
                                                                                <li key={k}><Link link={v.slug} onClick={() =>{ actions.theme.toggleMobileMenu()} }>{v.title}</Link></li>
                                                                        )
                                                                })}
                                                        </ul>
                                                </div>
                                        }
                                </div>
                        </div>
                </div>
	);
};

export default connect(SideMenu);