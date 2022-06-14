import { connect } from "frontity";
import toast, { Toaster } from 'react-hot-toast';

import Link from '@frontity/components/link';

const CopyShare = ({state}) => {
        const req = state.source.get(state.router.link);
        const data = req.data.copyshare;

        function copyURL(e,url){
                e.preventDefault();
                navigator.clipboard.writeText(url);
                toast.success('Tautan berhasil disalin!');
        }

        return(
                <>
                        <a href="#" className="cvr-bg cp" onClick={(e) => {copyURL(e,state.theme.options.siteURL+ data.slug);}} title="Salin tautan"></a>
                        <Link link={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(state.theme.options.siteURL+ data.slug) }`} target="_blank" className="cvr-bg fb" title="Bagikan di Facebook"></Link>
                        <Link link={`https://twitter.com/intent/tweet?url=${encodeURIComponent(state.theme.options.siteURL+ data.slug)}`} target="_blank" className="cvr-bg tw" title="Bagikan di Twitter"></Link>
                </>
        )
}
export default connect(CopyShare);