
import Loading from '../img/btn-loading.gif';
import Loadmore from '../img/icon/loadmore.png';

const Generic = `
@charset "UTF-8";
:before,:after,html *{-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-moz-osx-font-smoothing: grayscale; /*(For Firefox)*/-webkit-font-smoothing: antialiased; /*(For Chrome and Safari)*/}
.clearfix:after,
.clear{clear: both;display: block;height: 0;width: 100%;float: none !important;}
.clearfix:after{content: ''}
input::-moz-focus-inner /*Remove button padding in FF*/{ border: 0;padding: 0;}
a{text-decoration: none;outline: 0 !important;}
a:hover{color: inherit;text-decoration: none;}
img{max-width: 100%;vertical-align: top;height:auto;}
*:focus ,
textarea,
input,
textarea:focus, input:focus{outline: none;border-radius: 0}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {-webkit-appearance: none !important;margin: 0;}
input[type=number] {-moz-appearance:textfield !important;}
input::placeholder{ 
	color: #cacdc8;
	opacity:1;
}
textarea::placeholder{ 
	color: #cacdc8;
	opacity: 1;
}
::-moz-placeholder {
	opacity: 1;
}
.cvr-bg-bf:before,
.cvr-bg-af:after,
.cvr-bg{
	background-repeat: no-repeat;
	background-position: center top;
	background-attachment: scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
.cvr-bg-bf:before,
.cvr-bg-af:after{
	content: '';
	display: inline-block;
        vertical-align: middle;
}
body{
        background: #fff;
        color: #616767;
	font-size: 16px;
	font-family: 'Karla';
	font-weight:  400;
	position: static;
	overflow-y:auto
}
.wrapper{
	max-width: 1080px;
	width: 100%;
	margin: 0 auto;
}
.rowflex{
	display: flex;
	flex-wrap: wrap;
}
.rowflex > *{
	flex: 1;
}
.format-text{
	line-height: 150%;
}
.format-text > *{
	margin-top: 15px;
}
.format-text > *:first-child{
	margin-top: 0;
}
.format-text b,
.format-text strong{
	font-weight: 700;
}
.format-text em,
.format-text i:not(.fa){
	font-style: italic;
}
.format-text h1,
.format-text h2,
.format-text h3,
.format-text h4,
.format-text h5,
.format-text h6{
	color: #616767;
	font-weight: 600;
	line-height: 160%;
}
.format-text h1{
	font-size: 30px;
}
.format-text h2{
	font-size: 24px;
}
.format-text h3{
	font-size: 20px;
}
.format-text h4{
	font-size: 18px;
}
.format-text h5{
	font-size: 16px;
}
.format-text h6{
	font-size: 14px;
}
.format-text h1 + *,
.format-text h2 + *,
.format-text h3 + *,
.format-text h4 + *,
.format-text h5 + *,
.format-text h6 + *{
	margin-top: 13px !important;
}
.format-text h1 b,
.format-text h2 b,
.format-text h3 b,
.format-text h4 b,
.format-text h5 b,
.format-text h6 b{
	display: block;
	position: absolute;
	left: 0;
	top: 5px;
	width: 28px;
	height: 28px;
	line-height: 28px;
	border-radius: 14px;
	color: #fff;
	font-size: 24px;
	background: #99ae84;
	text-align: center;
	font-weight: 600;
}
.format-text .has-bullet span{
	position: relative;
	display: block;
	padding-left: 45px;
}
.format-text a:not(.button){
	color: #99ae84;
}
.format-text a:not(.button):hover{
	text-decoration: underline;
}
.format-text ul{
	list-style: disc;
	padding-left: 40px;
}
.format-text ul li,
.format-text ol li{
	padding-bottom: 10px;
}
.format-text ol{
	list-style: decimal;
}
.format-text ol{
	padding-left: 60px;
}
.format-text sup{
	color: #d90000;
	position: relative;
	top: 0;
	line-height: 100%;
}
.format-text p.has-text-align-center,
.format-text blockquote{
	font-size: 20px;
	color: #708370;
	font-style: italic;
	line-height: 160%;
	padding-bottom: 25px;
	border-bottom: 1px solid #ebebeb;
}
.format-text figure figcaption{
	display: block;
	text-align: center;
	font-size: 20px;
	line-height: 160%;
	color: #708370;
	font-style: italic;
	margin-top: 15px;
}
.format-text img{
	height:auto !important;
}
.format-text *{
	max-width: 100%;
}
.format-text .sc-product img.sc-img{
	width: 100%;
	border-radius: 10px;
}
.format-text .wp-block-image,
.format-text .aligncenter ,
.centered{
	text-align: center;
}
.rightned{
	text-align: right;
}
.leftned{
	text-align: left;
}
.button{
	/* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	border-radius: 20px;
	display: inline-block;
	color: #fff;
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#5e7460+0,859673+100 */
	background: rgb(94,116,96); /* Old browsers */
	background: -moz-linear-gradient(left,  rgba(94,116,96,1) 0%, rgba(133,150,115,1) 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(left,  rgba(94,116,96,1) 0%,rgba(133,150,115,1) 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to right,  rgba(94,116,96,1) 0%,rgba(133,150,115,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5e7460', endColorstr='#859673',GradientType=1 ); /* IE6-9 */
	font-family: 'Karla';
	font-weight: 600;
	font-size: 16px;
	height: 40px;
	line-height: 40px;
	padding: 0 24px;
	text-align: center;
	cursor: pointer;
	border: none;
	outline: none !important;
	transition:all 0.2s ease-in;
}

.button:hover{
	color: #fff;
	border-color: #445345;
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#859673+0,5e7460+100 */
	background: rgb(133,150,115); /* Old browsers */
	background: -moz-linear-gradient(left,  rgba(133,150,115,1) 0%, rgba(94,116,96,1) 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(left,  rgba(133,150,115,1) 0%,rgba(94,116,96,1) 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to right,  rgba(133,150,115,1) 0%,rgba(94,116,96,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#859673', endColorstr='#5e7460',GradientType=1 ); /* IE6-9 */
}
.button.btn-hollow{
	background: none;
	background: rgba(0,0,0,0);
	color: #99ae84;
	border: 1px solid #99ae84;
	height: 40px;
	line-height: 38px;
}
.button.btn-hollow:hover{
	background: #99ae84;
	color: #fff;
}
.button.has-icon > *{
	display: inline-block;
        vertical-align: middle;
        line-height: 100%;
}
.button.has-icon i{
        font-size: 20px;
        padding: 0;
        position: relative;
        top: -2px;
        margin-right: 7px;
}
.button.has-loading{
	position: relative;
	overflow: hidden;
}
.button.has-loading.fetching{
	color: rgba(0,0,0,0);
	cursor: default;
}
.button.has-loading:before{
	display: none;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(255,255,255,.8);
	content: '';
	z-index: 1;
}
.button.has-loading:after{
	display: none;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	left: calc(50% - 8px);
	width: 16px;
	height: 11px;
	background: url('${Loading}') no-repeat;
	content: '';
	z-index: 2;
}
.button.has-loading.fetching:after,
.button.has-loading.fetching:before{
	display: block;
}
.btn-hide{
	display: none !important;
}
.slick-dots{
	display: block;
	z-index: 2;
	width: 100%;
	text-align: center;
	margin-top: 25px;
}
.slick-dots li{
	display: inline-block;
	vertical-align: middle;
	margin: 0 6px;
}
.slick-dots li button{
	display: block;
	width: 10px;
	height: 10px;
	cursor: pointer;
	border: none;
	color: rgba(0,0,0,0);
	background: #d2dbc9;
	padding: 0;
	border-radius: 5px;
}
.slick-dots li.slick-active button{
	background: #5e7460;
}
.loadmore{
        text-align: center;
        margin-top: 80px;
}
.loadmore span{
        display: inline-block;
        color: #5e7460;
        font-weight: 500;
}
.loadmore span:before{
        display: inline-block;
        position: relative;
        margin-right: 15px;
        width: 40px;
        height: 40px;
        background-image: url('${Loadmore}');
        -webkit-animation: rotation 1s infinite linear;
}
@-webkit-keyframes rotation {from { -webkit-transform: rotate(0deg);}to {-webkit-transform: rotate(359deg);}}

.sc-blog{
	padding: 23px 0;
	border-top: 1px solid #c7c7c7;
	border-bottom: 1px solid #c7c7c7;
}
.sc-blog > *{
	display: inline-block;
	vertical-align: middle;
}
.sc-blog figure{
	position: relative;
	overflow: hidden;
	border-radius: 5px;
}
.sc-blog a:hover{
	text-decoration: none !important;
}
.sc-blog .caption{
	margin-left: 22px;
	color: #5e7460;
	font-size: 20px;
	font-weight: 700;
	line-height: 160%;
	max-width: calc(100% - 130px);
}
.sc-blog .caption b{
	display: block;
}
.sc-blog .caption a{
	color: #5e7460;
	transition:color 0.2s ease-in;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.sc-blog .caption a:hover{
	color: #99ae84;
}
`
export default Generic;