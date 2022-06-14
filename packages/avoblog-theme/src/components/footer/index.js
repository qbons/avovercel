
import { connect } from 'frontity';
import toast, { Toaster } from 'react-hot-toast';

import Widget from './widget';
import Tribute from './tribute';
import SideMenu from '../partial/side-menu';

const Footer = ({ state }) => {
	return (
		<>
                        <footer id="bottom">
                                <Widget />
                                <Tribute />
                        </footer>
                        <SideMenu />
                        <Toaster
                                position="bottom-center"
                                toastOptions={{
                                        duration: 3000,
                                }}
                        />
                </>
	);
};

export default connect(Footer);