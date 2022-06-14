import {useState} from 'react';

const Alpha = (props) => {
        const show = props.show;
        const currentAlpha = props.currentAlpha;
        const alphabet = props.alphabet;
        const updateArgs = props.updateArgs;
        const [slug, setSlug] = useState(currentAlpha);
        return(
                <div className="popup-layer">
                        <div id="popup-alpha" className="popup-filter">
                                <button className="close-popup cvr-bg-af" onClick={(e) => {e.preventDefault();show(false)}}></button>
                                <div className="hentry">
                                        <h2>Alphabet</h2>
                                        <p>Pilih salah satu</p>
                                </div>
                                <div className="wrap">
                                {alphabet.map((v, k) => {
                                        return(
                                                <label key={k}><input type="radio" name="malpha" onChange={() => setSlug(v.slug)} checked={v.slug == slug ? true : false} /><b>{v.title}</b></label>
                                        )        
                                })}
                                </div>
                                <div className="action">
                                        <a href="#" className="button btn-hollow"  onClick={(e) => {e.preventDefault();show(false)}}>Batal</a>
                                        <a href="#" className="button apply-filter" onClick={(e) => {e.preventDefault(); updateArgs(slug, 1);show(false)}}>Terapkan</a>
                                </div>
                        </div>
                </div>
        )
}

export default Alpha;