
import CustomScroll from 'react-custom-scroll';
import {useState} from 'react';
import Link from '@frontity/components/link';

const Tags = (props) => {
        const data = props.data;
        const libraries = props.libraries;
        const Html2React = libraries.html2react.Component;
        const [slug, setSlug] = useState(false);

        return(
                <div className="popup-layer">
                        <div id="popup-tag" className="popup-filter">
                                <button className="close-popup cvr-bg-af" onClick={() => props.setShowTag(false)}></button>
                                <div className="hentry">
                                        <h2>Tags</h2>
                                        <p>Pilih salah satu</p>
                                </div>
                                {data.item.length > 0 &&
                                        <CustomScroll heightRelativeToParent="235px">
                                                <div className="wrap">
                                                        {data.item.map((v, k) => {
                                                                return(
                                                                        <label key={k}><input type="radio"  name="tags" onClick={() => setSlug(v.slug)}  /><b><Html2React html={v.hash} /></b></label>
                                                                )        
                                                        })}
                                                </div>
                                        </CustomScroll>
                                }
                                <div className="action">
                                        <a href="#" className="button btn-hollow" onClick={(e) => {e.preventDefault();props.setShowTag(false)}}>Batal</a>
                                        {slug != false ? <Link link={slug} className="button apply-filter">Terapkan</Link>
                                        : <span className="button">Terapkan</span>}
                                </div>
                        </div>
                </div>
        )
}

export default Tags;