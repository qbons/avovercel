
import menuTrigger from '../img/icon/menu-trigger.png';
import arrowRightWhite from '../img/icon/arrow-right-white.png';
import arrowRightWhiteSM from '../img/icon/arrow-right-white-sm.png';
import Tag from '../img/icon/tag.png';
import igGreen from '../img/icon/ig-green.png';
import fbGreen from '../img/icon/fb-green.png';
import twGreen from '../img/icon/tw-green.png';
import SideBG from '../img/icon/side-bg.svg';

const Mobile = `
#popup-shop .download,
.inner-kamus .search .alpha > em,
.inner-kamus .search .alpha > span,
.detail-blog .grid .centered,
.inner-home .grid .centered,
.inner-home .product .centered,
.inner-kamus .grid .centered,
.inner-kamus .product .centered,
.detail-blog .product .centered,
.detail-blog .intro .author strong,
.inner-blog .sidebar h2 a,
.inner-author .grid .centered.for-mobile,
.inner-author .article .centered,
.sidemenu,
.mobile-trigger,
#popup-shop .rowflex a span b{
	display: none;
}
@media (max-width: 1800px) {

}
@media (max-width: 1239px) {
	.inner-home .product .slidenav a.prev,
	.inner-home .grid .slidenav a.prev,
	.detail-blog .slider .slidenav a.prev,
	.inner-kamus .slider .slidenav a.prev,
	.inner-author .article .slidenav a.prev{
		left: 20px;
	}
	.inner-home .caro .slidenav a.prev{
		left: 10px;
		transform: scale(0.7);
	}
	.inner-home .product .slidenav a.next,
	.inner-home .grid .slidenav a.next,
	.detail-blog .slider .slidenav a.next,
	.inner-kamus .slider .slidenav a.next,
	.inner-author .article .slidenav a.next{
		right: 20px;
	}
	.inner-home .caro .slidenav a.next{
		right: 10px;
		transform: scale(0.7);
	}
	
	.inner-blog .wrapper{
		max-width: 100%;
		padding: 0 30px;
	}
}
@media (max-width: 1139px) {
	.detail-blog.detail-page .main .rowflex,
	.wrapper{
		max-width: 100%;
		padding-left: 30px;
		padding-right: 30px;
	}
	#top.is-sticky .mainmenu > ul > li{
		margin: 0 8px;
	}
	#top.is-sticky .mainmenu {
		flex: calc(100% - 260px);
		max-width: calc(100% - 260px);
	}
	.inner-blog .sidebar{
		max-width: 25%;
		flex: 25%;
	}
	.inner-blog .main{
		flex: 72%;
		max-width:  72%;
	}
	.detail-blog .main .content{
		max-width: 50%;
		flex: 50%;
	}
	.detail-blog .main .related,
	.detail-blog .main .info{
		max-width: 23%;
		flex: 23%;
	}
}

@media (max-width: 991px) {
	.sidemenu .search-popup,
	#top .action .search-popup,
	#top .action .dsearch,
	.inner-home .product .slidenav,
	.inner-home .grid .slidenav,
	.detail-blog .slider .slidenav,
	.inner-kamus .slider .slidenav,
	.inner-author .article .slidenav,
	#top .mainmenu{
	       display: none;
	}
	#top.is-sticky .logo,
	#top .logo{
		max-width: 170px;
		flex: 170px;
		margin: 0;
	}
	#top.is-sticky .action,
	#top .action{
		position: relative;
		right: auto;
		top: auto;
		flex: 110px;
		max-width: 110px;
	}
	#top.is-sticky > .wrapper > .rowflex,
	#top .rowflex{
		justify-content: space-between;
		align-items: center;
	}
	#top.is-sticky,
	#top{
		padding: 14px 0;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	#top.is-sticky+#body,
	#body{
		padding-top: 60px;
	}
	#top .action a.shop-btn{
		min-width: 1px;
		width: 100%;
		height: 32px;
		line-height: 30px;
	}
	#top .logo > *{
		display: inline-block;
		vertical-align: middle;
	}
	.mobile-trigger{
		width: 19px;
		height: 19px;
                background-image: url('${menuTrigger}');
		position: relative;
		top: -1px;
		margin-right: 25px;
	}
	.mobile-trigger + a{
		max-width: 116px;
	}
	
	.sidemenu{
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		transition:all 0.2s ease-in;
		overflow: hidden;
		opacity: 0;
		visibility: hidden;
	}
	body.open-menu .sidemenu{
		opacity: 1;
		visibility: visible;
	}
	.sidemenu .bg{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: rgba(255,255,255,.5);
	}
	.sidemenu .holder{
		position: absolute;
		top: 0;
		width: 320px;
		height: 100%;
		overflow-y: scroll;
		background: #fff;
		z-index: 2;
		box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.16);
		background: #fff;
		left: -50px;
		transition:all 0.2s ease-in;
		padding-bottom: 100px;
		opacity: 0;
		visibility: hidden;
	}
	body.open-menu .sidemenu .holder{
		left: 0;
		opacity: 1;
		visibility: visible;
	}
	.sidemenu .holder:after{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 84px;
		background-image: url('${SideBG}');
	}
	.sidemenu .holder .pusher{
		max-width: 150px;
		margin: 80px auto 0;
	}
	.sidemenu .holder .logo{
		margin-bottom: 40px;
	}
	.sidemenu .holder li{
		display: block;
		margin-top: 30px;
		line-height: 160%;
	}
	.sidemenu .holder li:first-child{
		margin: 0;
	}
	.sidemenu .holder li a{
		color: #616767;
		transition:color 0.2s ease-in;
		text-transform: uppercase;
	}
	.sidemenu .holder li.current-menu-item > a,
	.sidemenu .holder li a:hover{
		color: #5e7460;
	}
	.sidemenu .holder li.current-menu-item > a{
		font-weight: 700;
	}
	.inner-author .grid .item{
		max-width: calc(50% - 16px);
		flex: calc(50% - 16px);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.inner-author .grid .item figure{
		max-width: 35%;
		flex: 35%;
	}
	.inner-author .grid .item .caption{
		max-width: 60%;
		flex: 60%;
	}
	.inner-author .grid .item .tags a{
		margin: 0 5px 3px 0;
	}
	.inner-product .list .item {
		max-width: calc(33.33333333333333333333333% - 30px);
		flex: calc(33.33333333333333333333333% - 30px);
	}
	.footer-widget .rowflex .widget{
		flex: 21%;
		max-width: 21%;
	}
	.footer-widget .rowflex .widget:first-child{
		max-width: 50%;
		flex: 50%;
	}
	#popup-shop{
		padding: 50px 30px 80px;
	}
	.inner-author .list .item {
		flex: calc(50% - 16px);
		max-width: calc(50% - 16px);
	}
	.inner-author .profile .caption{
		max-width: 46%;
		flex: 46%;
	}
	.inner-blog .main .list{
		margin-left: 0;
		margin-right: 0;
	}
	.inner-blog .main .list .item{
		flex: 100%;
		max-width: 100%;
		margin: 0 0 30px;
	}
	.detail-blog .main .related .list .item figure,
	.detail-blog .main .related .list .item h3{
		flex: 100%;
		max-width: 100%;
	}
	.detail-blog .main .related .list .item figure{
		margin-bottom: 10px;
	}
	.detail-blog .main .info .share a{
		margin-right: 15px;
	}
	.inner-home .blogs .thumb{
		max-width: 45%;
		flex: 45%;
	}
	.inner-home .editor .list.onlyone .wrapitem .item{
		max-width: calc(50% - 16px);
		flex: calc(50% - 16px);
	}
}
@media only screen and (min-width: 769px) and (max-width: 991px)  {

}
@media (max-width: 768px) {
	.inner-blog .sidebar .blocky li b,
	.inner-home .blogs .bg:not(.mbg),
	.inner-home .tagging .bg:not(.mbg),
	.inner-home .caro .item .bg:not(.mbg),
	.inner-home .editor .hentry a,
	.inner-home .product .hentry a,
	 .inner-home .grid .hentry a,
	.inner-kamus .detail .meta .like b,
	.inner-kamus .hentry a,
	.inner-kamus .search .alpha > span ~ *,
	 .detail-blog .grid .hentry a,
	 .detail-blog .product .hentry a,
	.detail-blog .intro .heading span,
	.detail-blog .main .related,
	.detail-blog .main .info,
	.popup-filter .scrollbar-inner > .scroll-element.scroll-x,
	.inner-blog .sidebar .holder .liney,
	 .inner-welkam .intro h2 br,
	.inner-author .grid .hentry,
	.inner-author .hentry a,
	#popup-shop .rowflex a span em,
	.inner-product .list .filter span{
		display: none !important;
	}
	#popup-shop .download,
	.inner-home .blogs .bg.mbg,
	.inner-home .tagging .bg.mbg,
	.inner-home .caro .item .mbg,
	#popup-shop .rowflex a span b{
		display: block;
	}
	.inner-blog .wrapper,
	.wrapper{
		padding-left: 20px;
		padding-right: 20px;
	}
	.inner-home .editor .list:not(.onlyone) .rowflex .col,
	.inner-home .blogs .thumb,
	.inner-home .blogs .wrap,
	.inner-home .tagging figure,
	.inner-home .tagging .caption,
	.inner-home .caro .item figure + .caption,
	.inner-home .caro .item figure,
	.inner-home .caro .item .caption,
	.inner-kamus .detail figure,
	.inner-kamus .detail .caption,
	.inner-kamus .list .item,
	.detail-blog .main .content,
	.inner-blog .main,
	.inner-blog .sidebar,
	.inner-welkam .block figure + .caption,
	.inner-welkam .block figure,
	.inner-author .profile figure,
	.inner-author .profile .caption,
	.inner-author .grid .item,
	.inner-author .list .item,
	#popup-shop .rowflex a,
	.footer-widget .rowflex .widget,
	.footer-widget .rowflex .widget:first-child{
		flex: 100%;
		max-width: 100%;
	}
	.inner-author .pamflet{
		margin-bottom: 120px;
	}
	.inner-kamus .list,
	.inner-product .copy,
	.inner-product .banner{
		margin-bottom: 70px;
	}
	.inner-home .tagging,
	.inner-welkam .block figure,
	.inner-welkam .banner,
	.inner-author .profile figure{
		margin-bottom: 50px;
	}
	.inner-home .editor,
	.inner-home .editor .list:not(.onlyone) .rowflex .col,
	.inner-home .tagging .caption,
	.inner-kamus .detail figure{
		margin-bottom: 40px;
	}
	.detail-blog .content .tags,
	.inner-blog .loadmore,
	.inner-welkam .block .item,
	.loadmore{
		margin-top: 50px;
	}
	.inner-kamus .list .centered,
	.footer-widget .widget{
		margin-top: 40px;
	}
	.inner-author .grid .item,
	.inner-product .list .item {
		margin: 0 0 16px;
	}
	.inner-kamus .list .item{
		margin: 0 0 24px;
	}
	.inner-welkam .block .item:first-child,
	.footer-widget .widget:first-child{
		margin: 0;
	}
	.detail-blog .product,
	.detail-blog .grid,
	.detail-blog .utility,
	.detail-blog .main{
		padding-bottom: 70px;
	}
	.detail-blog .banner{
		padding-bottom: 35px;
	}
	.inner-home .tagging .caption,
	.inner-welkam .block .item:nth-child(even) figure{
		order: 1;
	}
	.inner-home .tagging figure,
	.inner-welkam .block .item:nth-child(even) .caption{
		order: 2;
	}
	
	.inner-product .list .filter,
	.inner-product .list h2{
		float: none;
	}
	.inner-product .list .filter .holder{
		opacity: 1 !important;
		visibility: visible !important;
		margin: 24px 0 0 !important;
		padding: 0;
		border-radius: 0;
		position: relative;
		background: none;
	}
	.inner-blog .sidebar .blocky ul,
	.inner-product .list .filter ul{
		flex-wrap: nowrap;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar;
		margin-right: -20px;
		max-width: calc(100% + 20px);
		display: flex;
	}
	.inner-blog .sidebar .blocky ul::-webkit-scrollbar,
	.inner-product .list .filter ul::-webkit-scrollbar {
		display: none;
	}
	.inner-blog .sidebar .blocky ul li,
	.inner-product .list .filter ul li{
		flex: 0 0 auto;
		margin-right: 15px;
		display: inline;
	}
	.inner-blog .sidebar .blocky ul li:first-child,
	.inner-blog .sidebar .blocky ul li{
		margin: 0 15px 0 0;
	}
	.inner-blog .sidebar .blocky ul a,
	.inner-product .list .filter ul li a{
		display: inline-block;
		height: 40px;
		line-height: 40px;
		padding: 0 23px;
		background: #f4f4f4;
		border-radius: 20px;
		color: #616767;
		font-weight: 600;
		transition:all 0.2s ease-in;
	}
	.inner-blog .sidebar .blocky ul a.active,
	.inner-product .list .filter ul li a.active{
		background: #5e7460;
		color: #fff;
	}
	.inner-product .list .rowflex{
		margin: 0 -8px;
	}
	.inner-product .list .item {
		max-width: calc(50% - 16px);
		flex: calc(50% - 16px);
		margin: 0 8px 40px;
	}
	.inner-product .copy .format-text{
		line-height: 200%;
	}
	.tribute{
		top: auto;
		margin: 55px 0 0;
	}
	.tribute .wrapper,
	.footer-widget .wrapper{
		padding: 0;
		max-width: 315px;
		margin: 0 auto;
	}
	.popup-filter .fancybox-close-small,
	#popup-shop .fancybox-close-small{
		transform: scale(1);
		right: 0;
		top: 0;
	}
	#popup-shop .rowflex a{
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		min-height: 65px;
		margin: 16px 0 0;
		padding: 10px 0;
	}
	#popup-shop .rowflex a span,
	#popup-shop .rowflex a figure{
		position: relative;
		left: auto;
		top: auto;
		bottom: auto;
		-ms-transform: translateY(0%);
		-webkit-transform: translateY(0%);
		transform: translateY(0%);
		text-align: center;
		flex: 1;
	}
	#popup-shop .rowflex a figure{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#popup-shop .rowflex a figure img{
		flex: 1;
		max-width: 35%;
	}
	#popup-shop .rowflex a{
		width: 100%;
	}
	#popup-shop{
		padding: 30px 10px;
	}
	#popup-shop .rowflex{
		padding: 0 15px;
	}
	#popup-shop .rowflex a span{
		text-align: left;
		position: relative;
		left: 10px;
	}
	#popup-shop .download{
		padding: 0 15px;
		margin: 20px 0 0;
	}
	.popup-filter > .scrollbar-inner,
	#popup-shop > .scrollbar-inner{
		max-height: 320px !important;
		margin: 0 -30px;
		padding: 0 20px !important;
		width: calc( 100% + 60px);
	}
	.popup-filter > .scrollbar-inner{
		max-height: 188px !important;
	}
	.popup-filter .scrollbar-inner > .scroll-element.scroll-y,
	#popup-shop  .scrollbar-inner > .scroll-element.scroll-y{
		opacity: 1 !important;
		display: block !important;
		right: 8px;
		width: 3px;
	}
	.inner-author .list .centered{
		padding-top: 40px;
	}
	.inner-home .grid .slider .slick-track > *,
	.inner-kamus .grid .slider .slick-track > *,
	 .detail-blog .slider .slick-track > *,
	.inner-author .article .slick-track > *{
		margin: 0 16px 0 0;
		width: 270px;
	}
	.inner-home .grid .slider .slick-track > *,
	.inner-kamus .grid .slider .slick-track > *,
	.detail-blog .grid .slider .slick-track > *{
		width: 230px;
	}
	.inner-home .grid .slider .slick-slider.slick-initialized,
	.inner-kamus .grid .slider .slick-slider.slick-initialized,
	.detail-blog .grid .slider .slick-slider.slick-initialized,
	.inner-author .article .slick-slider.slick-initialized,
	.inner-home .grid .slider .slick-list,
	.inner-kamus .grid .slider .slick-list,
	.detail-blog .grid .slider .slick-list,
	.inner-author .article .slick-list{
		margin: 0 -20px 0 0;
	}
	.inner-home .product .centered,
	.inner-home .grid .centered,
	.inner-kamus .grid .centered,
	.inner-kamus .product .centered,
	.detail-blog .grid .centered,
	.detail-blog .product .centered,
	.inner-author .grid .centered,
	.inner-author .grid .centered.for-mobile,
	.inner-author .article .centered{
		display: block;
		padding-top: 30px;
	}
	.inner-home .product .centered a:after,
	.inner-home .grid .centered a:after,
	.inner-kamus .grid .centered a:after,
	.inner-kamus .product .centered a:after,
	.detail-blog .grid .centered a:after,
	.detail-blog .product .centered a:after,
	.inner-author .article .centered a:after{
		display: inline-block;
		vertical-align: middle;
		width: 12px;
		height: 9px;
                background-image: url('${arrowRightWhite}');
		margin-left: 8px;
	}
	.inner-author .grid .item figure span a{
		height: 22px;
		line-height: 22px;
		padding: 0 11px;
	}
	.inner-author .profile{
		padding: 40px 0 0;
	}
	.inner-blog .sidebar .sticky-outer-wrapper{
		height: auto !important;
	}
	.inner-blog .sidebar .sticky-inner-wrapper ,
	.inner-blog .sidebar .holder{
		position: relative !important;
		top: auto !important;
		width: 100% !important;
		transform: none !important;
	}
	.inner-blog{
		padding: 40px 0 60px;
	}
	.inner-blog .sidebar{
		margin-bottom: 40px;
	}
	.inner-blog .sidebar .blocky{
		margin: 0 -20px 0 0;
		padding: 0;
		border: none;
	}
	.inner-blog .sidebar h2 a{
		position: absolute;
		right: 0;
		top: -5px;
		height: 40px;
		line-height: 40px;
		border-radius: 20px;
		color: #99ae84;
		font-weight: 600;
		background: #f5f7f2;
		display: block;
		font-size: 16px;
		padding: 0 21px;
	}
	.inner-blog .sidebar h2 a:before{
		display: inline-block;
		vertical-align: middle;
		width: 17px;
		height: 13px;
		background-image: url('${Tag}');
		position: relative;
		margin-right: 10px;
		top: -1px;
	}
	.inner-blog .main .info .format-text{
		font-weight: 400;
		line-height: 175%;
	}
	.inner-blog .main .tags a{
		margin: 0 5px 3px 0;
	}
	.inner-blog .main .tags{
	       margin-top: 5px;
	}
	.inner-home .editor .list h3,
	.inner-home .blogs .item h3,
	.inner-home .grid .slider .item h3,
	.inner-kamus .grid .slider .item h3,
	.inner-kamus .list .item .format-text,
	.detail-blog .grid .slider  .item h3,
	.inner-blog .main .item h3{
	       overflow: hidden;
	       text-overflow: ellipsis;
	       display: -webkit-box;
	       -webkit-line-clamp: 3;
	       -webkit-box-orient: vertical;
	       line-height: 140%;
       }
       .inner-home .editor .list h3,
       .inner-home .blogs .item h3,
       .inner-home .grid .slider .item h3,
       .inner-kamus .grid .slider .item h3,
	.detail-blog .grid .slider  .item h3{
		-webkit-line-clamp: 2;
	}
	.detail-blog .intro .author strong {
		display: inline-block;
		top: 2px;
	}
	.sc-blog .caption{
		line-height: 130%;
	}
	.sc-blog .caption b{
		display: inline;
	}
	.detail-blog .content .tags a{
		padding: 0 25px;
		margin: 0 10px 10px 0;
	}
	.inner-home .product .regular.slider,
	.inner-kamus .product .regular.slider,
	.detail-blog .product .regular.slider,
	.inner-home .product .slick-carousel,
	.inner-kamus .product .slick-carousel,
	.detail-blog .product .slick-carousel{
		display: flex;
		flex-wrap: wrap;
		margin: 0 -8px;
	}
	.inner-home .product .regular.slider > *,
	.inner-kamus .product .regular.slider > *,
	.detail-blog .product .regular.slider > *,
	.inner-home .product .slick-carousel > *,
	.inner-kamus .product .slick-carousel > *,
	.detail-blog .product .slick-carousel > *{
		max-width: calc(50% - 16px);
		flex: calc(50% - 16px);
		margin: 0 8px 40px;
		text-align: center;
	}
	.inner-home .product h3,
	.inner-kamus .product h3,
	.detail-blog .product h3{
		line-height: 145%;
	}
	.detail-blog .utility .author small{
		display: block;
		position: relative;
		top: auto;
		right: auto;
		margin: 6px 0 0;
	}
	.detail-blog .utility .author > *{
		vertical-align: top;
	}
	.detail-blog .utility .list .item,
	.detail-blog .utility .author{
		padding: 20px;
	}
	.detail-blog .utility .list .item .hcom span{
		top: 7px;
	}
	.detail-blog .utility  .list + .rightned{
		text-align: center;
	}
	.inner-kamus .search .alpha > label{
		margin: 0;
	}
	.inner-kamus .search .alpha > span,
	.inner-kamus .search .alpha > label b{
		display: inline-block;
		vertical-align: middle;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		text-align: center;
		line-height: 35px;
		background: #f4f4f4;
		color: #848484;
		transition: all 0.2s ease-in;
		position: relative;
		margin: 0 4px 16px !important;
	}
	.inner-kamus .search .alpha > label input:checked + b{
		background: #5e7460;
		color: #fff;
	}
	.inner-kamus .search .alpha > span{
		background: #99ae84;
	}
	.inner-kamus .search .alpha > span:before {
                background-image: url('${arrowRightWhiteSM}');
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		left: 14px;
		filter: brightness(0) invert(1);
		width: 8px;
		height: 13px;
		display: block;
	}
	.inner-kamus .search form input{
		height: 40px;
		padding: 0 45px 0 20px;
	}
	.inner-kamus .search form button{
		right: 20px;
		width: 15px;
		height: 16px;
	}
	.inner-kamus .detail .meta{
		text-align: center;
	}
	.inner-kamus .detail .like,
	.inner-kamus .detail .share{
		float: none;
		display: inline-block;
		vertical-align: middle;
		top: auto;
	}
	.inner-kamus .detail .meta .share > span{
		display: block;
		margin: 0 0 15px;
		text-align: left;
	}
	.inner-kamus .detail .meta .like{
		position: relative;
		margin-right: 32px;
		padding-right: 32px;
		border-right: 1px solid #e2e2e2;
	}
	.inner-kamus .detail .meta .like > *{
		display: block;
		margin: 0;
	}
	.inner-kamus .detail .meta .like > span{
		text-align: center;
		font-weight: 700;
		margin: 8px 0 0;
	}
	 .inner-kamus .detail .share a{
		width: 24px;
		height: 24px;
		margin-right: 40px;
	 }
	.inner-kamus .detail .share a:last-child{
	       margin: 0;
	}
	.inner-kamus .detail .share a.ig {
		background-image: url('${igGreen}');
	}
	.inner-kamus .detail .share a.tw {
		background-image: url('${twGreen}');
	}
	.inner-kamus .detail .share a.fb {
		background-image: url('${fbGreen}');
	}
	.inner-kamus .heading h2{
		text-align: left;
		margin-bottom: 40px;
		font-size: 32px !important;
	}
	.inner-kamus .crumb i{
		margin: 0 15px;
		position: relative;
		top: 1px;
	}
	.inner-kamus .crumb{
		padding: 30px 0 25px;
	}
	.inner-home .caro .item .caption{
		padding: 0 40px;
	}
	.inner-home .caro .item figure + .caption{
		padding: 0;
		margin-top: 20px;
	}
	.inner-home .tagging .caption{
		margin: 0 -6px 40px;
		display: flex;
		flex-wrap: wrap;
	}
	.inner-home .tagging .caption a{
		margin: 0 6px 16px;
		padding: 0 10px;
		font-size: 12px;
		max-width: calc(50% - 12px);
		flex: calc(50% - 12px);
		text-align: center;
	}
	.inner-home .tagging{
		padding: 50px 0 30px;
	}
	.inner-home .tagging.switched h2{
		margin-bottom: 30px;
	}
	.inner-home .blogs h2{
		margin-bottom: 20px;
	}
	.inner-home .blogs .wrap > h3{
		font-weight: 700;
	}
	.inner-home .editor .list .cats,
	.inner-home .blogs .item .cats{
		margin-bottom: 1px;
		position: relative;
		top: -5px;
	}
	.inner-home .editor .list .item .tags,
	.inner-home .blogs .item .tags{
		margin-top: 0;
	}
	.inner-home .blogs{
		padding: 30px 0 80px;
	}
	.inner-home .grid .slick-track .item,
	.detail-blog .grid .slick-track .item,
	.inner-kamus .slider .slick-track .item,
	.inner-home .grid .slick-list,
	.detail-blog .grid .slick-list,
	.inner-kamus .slider .slick-list,
	.inner-home .product .slider .slick-track .item,
	.detail-blog .product .slider .slick-track  .item,
	.inner-kamus .product .slider .slick-track .item,
	.inner-home .product .slick-list,
	.detail-blog .product .slider .slick-list,
	.inner-kamus .product .slider .slick-list{
		margin: 0;
		padding: 0;
	}
	.inner-kamus .search .alpha > em{
		display: block;
		position:absolute;
		left: 0;
		top: 0;
		width:100%;
		height:100%;
		z-index:9;
	}
	.inner-blog .sidebar .blocky .rcs-custom-scroll {
		height: auto !important;
	}
	.inner-blog .sidebar h2{
		padding-right: 110px;
	}
	.detail-blog .intro .meta span{
		margin-right: 30px;
	}
	.detail-blog .utility .list .item .child{
		padding-left: 20px;
	}
	.inner-home .product .caption h3, .detail-blog .product .caption h3, .inner-kamus .product h3, .inner-product .list .item h3{
		min-height: 45px;
	}
	.inner-home .editor .centered{
		margin-top:10px;
		padding-bottom: 30px;
	}
	.inner-home .editor .list.onlyone .wrapitem .item{
		max-width: calc(100% - 16px);
		flex: calc(100% - 16px);
	}
	.inner-blog .sidebar .blocky li ul{
		display: inline-block !important;
		vertical-align: middle;
		padding: 0;
		margin:0 0 0 15px;
	}
	.inner-blog .sidebar .blocky li ul li:last-child{
		margin: 0;
	}
	
	/** FONT SIZE **/
	.inner-home .blogs .wrap > h3,
	.inner-home .blogs h2,
	.inner-home .tagging h2,
	.inner-home .caro .item .caption h2,
	.inner-kamus .detail h2,
	.detail-blog .intro .heading h1,
	.inner-blog .sidebar h2,
	.inner-welkam .block h2,
	.inner-welkam .intro h2,
	.inner-home .editor .hentry h2,
	.inner-home .product .hentry h2,
	.inner-home .grid .hentry h2,
	.detail-blog .grid .hentry h2,
	.detail-blog .product .hentry h2,
	.inner-kamus .heading h2,
	.inner-kamus .hentry h2,
	.inner-author .profile h2,
	.inner-author .hentry h2,
	#popup-shop h2,
	.inner-product .list h2{
		font-size: 24px;
	}
	.sc-blog .caption{
		font-size: 16px;
	}
	.inner-home .product h3,
	.inner-kamus .product h3,
	.detail-blog .product h3,
	#popup-shop .download h3,
	.inner-product .list .item h3{
	       font-size: 14px;
	}
	.inner-home .product .cat,
	.inner-kamus .product .cat,
	.detail-blog .product .cat,
	.detail-blog .content .tags a,
	.inner-author .grid .item .tags a,
	.inner-product .list .item .cat{
	       font-size: 12px;
	}
	.inner-author .grid .item figure span a,
	#popup-shop .download small{
		font-size: 10px;
	}
	
	/** ZERO STUFF **/
	.detail-blog .intro .heading,
	.detail-blog .intro .meta{
		padding: 0;
	}
	.detail-blog .main,
	.inner-home .editor .list:not(.onlyone) .rowflex,
	.inner-home .blogs,
	.inner-kamus .list .rowflex,
	.inner-author .grid .rowflex,
	.inner-author .list .rowflex,
	#popup-shop .rowflex a:first-child,
	#popup-shop .rowflex{
		margin: 0;
	}
	 
}
/* Custom mobile */
@media (max-width: 480px) {
	
}

@media (max-width: 376px) {
	.inner-kamus .search .alpha > span,
	.inner-kamus .search .alpha > label b{
		margin: 0 2px 16px !important;
	}
	#popup-shop .download a.gp{
		width: 80px;
		height: 24px;
	}
	#popup-shop .download a.as{
		width: 80px;
		height: 25px;
		margin-left: 5px;
		top: 0;
	}
	#popup-shop .download .wrapm{
		top: 16px;
	}
	.inner-404 .button{
		min-width: 1px;
	}
}
@media (min-width: 1230px) {

}

#responsive{
	display:block;
	width:10px;
	height: 10px;
	position: fixed;
	bottom:10px;
	left: 10px;
	z-index: 9999;
}
/** RESPONSIVE VIEWER **/
@media (max-width: 1139px) {  #responsive{background: blueViolet !important;}}
@media (max-width: 991px) {  #responsive{background: red !important;}}
@media (max-width: 768px) {  #responsive{background: blue !important;}}
@media (max-width: 480px) {  #responsive{background: cyan !important;}}
@media (max-width: 360px) {  #responsive{background: green !important;}}
`
export default Mobile;