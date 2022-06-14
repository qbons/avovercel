import KM2 from '../fonts/Karla-Medium.woff2';
import KM from '../fonts/Karla-Medium.woff';
import KR2 from '../fonts/Karla-Regular.woff2';
import KR from '../fonts/Karla-Regular.woff';
import KI2 from '../fonts/Karla-Italic.woff2';
import KI from '../fonts/Karla-Italic.woff';
import KEB2 from '../fonts/Karla-ExtraBold.woff2';
import KEB from '../fonts/Karla-ExtraBold.woff';
import KB2 from '../fonts/Karla-Bold.woff2';
import KB from '../fonts/Karla-Bold.woff';
import KSB2 from '../fonts/Karla-SemiBold.woff2';
import KSB from '../fonts/Karla-SemiBold.woff';
import NB2 from '../fonts/NunitoSans-Bold.woff2';
import NB from '../fonts/NunitoSans-Bold.woff';
import NR2 from '../fonts/NunitoSans-Regular.woff2';
import NR from '../fonts/NunitoSans-Regular.woff';
import NSB2 from '../fonts/NunitoSans-SemiBold.woff2';
import NSB from '../fonts/NunitoSans-SemiBold.woff';

const Fonts = `
        @font-face {
        font-family: 'Karla';
        src: url('${KM2}') format('woff2'),
            	url('${KM}') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Karla';
        src: url('${KR2}') format('woff2'),
            	url('${KR}') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Karla';
        src: url('${KI2}') format('woff2'),
            	url('${KI}') format('woff');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Karla';
        src: url('${KEB2}') format('woff2'),
            	url('${KEB}') format('woff');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Karla';
        src: url('${KB2}') format('woff2'),
            	url('${KB}') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Karla';
        src: url('${KSB2}') format('woff2'),
            	url('${KSB}') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Nunito Sans';
        src: url('${NB2}') format('woff2'),
            	url('${NB}') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Nunito Sans';
        src: url('${NR2}') format('woff2'),
            	url('${NR}') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Nunito Sans';
        src: url('${NSB2}') format('woff2'),
            	url('${NSB}') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    
    
`;

export default Fonts;
