import IG from '../img/icon/ig.png';
import ML from '../img/icon/ml.png';
import FB from '../img/icon/fb.png';
import arrowDownGreen from '../img/icon/arrow-down-green.png';
import arrowRightWhite from '../img/icon/arrow-right-white.png';
import arrowRightGreen from '../img/icon/arrow-right-green.png';
import GP from '../img/icon/gp.png';
import AS from '../img/icon/as.png';
import arrowLeftCircle from '../img/icon/arrow-left-circle.png';
import arrowRightCircle from '../img/icon/arrow-right-circle.png';

import igGreen from '../img/icon/ig-green.png';
import fbGreen from '../img/icon/fb-green.png';
import twGreen from '../img/icon/tw-green.png';
import cpGreen from '../img/icon/cp-green.png';

import igGreenSM from '../img/icon/ig-green-sm.png';
import fbGreenSM from '../img/icon/fb-green-sm.png';
import twGreenSM from '../img/icon/tw-green-sm.png';
import cpGreenSM from '../img/icon/cp-green-sm.png';

import igLG from '../img/icon/ig-lg.png';
import fbLG from '../img/icon/fb-lg.png';
import twLG from '../img/icon/tw-lg.png';
import cpLG from '../img/icon/cp-lg.png';

import Search from '../img/icon/search.png';
import arrowCrumb from '../img/icon/arrow-crumb.png';
import Like from '../img/icon/like.png';
import LikeLoading from '../img/icon/like-load.gif';
import likeSM from '../img/icon/like-sm.png';
import Close from '../img/icon/close.png';
import SearchDesktop from '../img/icon/search.svg';
import SearchBG from '../img/icon/search-bg.svg';
import SearchSide from '../img/icon/search-side.svg';

const Style = `
/** HEADER **/
#top{
        padding: 23px 0 18px;
        background: #fff;
        z-index: 9999;
        position: relative;
}
#top.is-sticky{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
        padding: 18px 0;
}
#top.is-sticky + #body{
        padding-top: 115px;
}
#top .rowflex{
        position: relative;
}
#top.is-sticky > .wrapper > .rowflex{
        justify-content: space-between;
        align-items: center;
}
#top .logo,
#top .mainmenu{
        flex: 100%;
        max-width: 100%;
        text-align: center;
}
#top.is-sticky .logo{
        max-width: 120px;
        flex: 120px;
        margin: 0;
}
#top .logo{
        margin-bottom: 28px;
}
#top.is-sticky  .mainmenu{
        flex: calc(100% - 300px);
        max-width: calc(100% - 300px);
}
.mainmenu  li{
        display: inline-block;
        vertical-align: middle;
        margin:0 20px;
}
.mainmenu  li.regular-child{
        position: relative;
}
#top.is-sticky .mainmenu > ul > li{
        margin: 0 15px;
}
.mainmenu  li.regular-child > ul a,
.mainmenu > ul > li > a{
        display: block;
        position: relative;
        color: #616767;
        transition:color 0.2s ease-in;
        text-transform: uppercase;
}
.mainmenu > ul > li > a:after{
        display: block;
        position: absolute;
        bottom: -8px;
        width: 0;
        left: 50%;
        height: 2px;
        content: '';
        background: #5e7460;
        transition: all 0.2s ease-in;
        border-radius: 1px;
}
.mainmenu > ul > li:hover > a:after,
.mainmenu > ul > li > a:hover:after,
.mainmenu > ul > li.current-menu-item > a:after{
        width: 16px;
        left: calc(50% - 8px);
}
.mainmenu  li.regular-child > ul a:hover,
.mainmenu > ul > li.current-menu-item > a,
.mainmenu > ul > li > a:hover{
        color: #5e7460;
}
.mainmenu > ul > li.current-menu-item > a{
        font-weight: 700;
}
.mainmenu  li.has-child > ul{
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        padding-top: 15px;
        transition:all 0.2s ease-in;
        opacity: 0;
        visibility: hidden;
}
.mainmenu  li.regular-child > ul{
        min-width: 180px;
        left: -15px;        
        background: #fff;
        box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.16);
        padding:  16px 16px !important;
        border-radius: 10px;
        text-align: left;
        margin-top: 15px;
        overflow: visible;        
}
.mainmenu  li.regular-child > ul:after{
        display: block;
        content:'';
        position:absolute;
        left:0;
        top:-15px;
        width: 100%;
        height:15px;        
        z-index: 999;
}
.mainmenu  li.regular-child > ul li{
        margin: 13px 0 0;
        display:block;
}
.mainmenu  li.regular-child > ul li:first-child{
        margin: 0;
}
.mainmenu  li.regular-child > ul a{
        text-transform: none;
}
.mainmenu  li.has-child:hover > ul{
        visibility: visible;
        opacity: 1;
}
.mainmenu  li.has-child > ul:before{
        display: block;
        position: absolute;
        top: -10px;
        height: 10px;
        background: red;
        width: 100%;
        content: '';
        display: none;
}
.is-sticky .mainmenu  li.has-child > ul{
        padding-top: 25px;
}
.mainmenu li.layer{
        background: #fff;
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
        padding: 16px;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
        margin: 0;
}
.mainmenu li.layer .rowflex{
        justify-content: space-between;
        align-items: inherit;
}
.mainmenu li.layer .thumb{
        max-width: 29%;
        flex: 29%;
}
.mainmenu li.layer .thumb a{
        display: block;
        position: relative;
}
.mainmenu li.layer .thumb img{
        width: 100%;
        border-radius: 10px;
        height: auto;
}
.mainmenu li.layer .thumb span{
        color: #fff;
        font-size: 32px;
        font-weight: 700;
        line-height: 125%;
        position: absolute;
        right: 30px;
        bottom: 15px;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
}
.mainmenu li.layer ul{
        max-width: 20%;
        flex: 20%;
        padding-top: 10px;
        position: relative;
        left: 50px;
}
.mainmenu li.layer ul li{
        display: block;
        margin: 20px 0 0;
        text-align: left;
}
.mainmenu li.layer ul li a{
        color: #616767;
        font-weight: 700;
        transition:color 0.2s ease-in;
}
.mainmenu li.layer ul li a:hover{
        color: #99ae84;
}
.mainmenu li.layer ul li:first-child{
        margin: 0;
}
.mainmenu li.layer .list{
        max-width: 37%;
        flex: 37%;
        padding-right: 20px;
        position: relative;
}
.mainmenu li.layer .list .item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: left;
        margin-top: 16px;
}
.mainmenu li.layer .list .item:first-child{
        margin-top: 0;        
}
.mainmenu li.layer .list .item figure{
        max-width: 28%;
        flex: 28%;
}
.mainmenu li.layer .list .item figure img{
        width: 100%;
        border-radius: 5px;
}
.mainmenu li.layer .list .item h3{
        max-width: 65%;
        flex: 65%;
        font-size: 14px;
        font-weight: 500;
        line-height: 170%;
}
.mainmenu li.layer .list .item h3 a{
        color: #616767;
        transition:color 0.2s ease-in;
}
.mainmenu li.layer .list .item h3 a:hover{
        color: #99ae84;
}
.mainmenu li.layer a.cvr-bg-af{
        color: #5e7460;
        font-weight: 700;
        bottom: -40px;
        display: inline-block;
        position: absolute;
        bottom: 10px;
        right: 30px;
}

#top .action{
        position: absolute;
        right: 70px;
        top: 0;
}
#top.is-sticky .action{
        max-width: 135px;
        flex: 135px;
        position: relative;
        top: auto;
        right: auto;
}
#top .action a.shop-btn{
        display: inline-block;
        text-align: center;
        border: 1px solid #99ae84;
        color: #99ae84;
        font-weight: 600;
        text-transform: uppercase;
        height: 35px;
        line-height: 33px;
        border-radius: 5px;
        min-width: 135px;
        transition:all 0.2s ease-in;
        background: #fff;
}
#top .action a.shop-btn:hover{
        color: #fff;
        background: #99ae84;
}
/** FOOTER **/
#bottom{
        padding: 75px 0  50px;
        background: #4b5650;
        color: #c1c7bb;
}
.footer-widget .rowflex{
        justify-content: space-between;
        align-items: inherit;
        position: relative;
        z-index: 2;
}
.footer-widget .rowflex .widget{
        flex:19%;
        max-width: 19%;
}
.footer-widget .rowflex .widget:first-child{
        max-width: 40%;
        flex: 40%;
}
.widget_text .textwidget{
        line-height: 160%;
        max-width: 355px;
}
.widget_text .textwidget > *{
        margin-top: 24px;
}
.widget_text .textwidget > *:first-child{
        margin: 0;
}
.widget-title{
        color: #94a694;
        font-size: 24px;
        font-weight: 600;
        line-height: 1.67;
        margin-bottom: 20px;
}
.widget li{
        display: block;
        line-height: 150%;
        margin-top: 15px;
}
.widget li:first-child{
        margin: 0;
}
.widget li a{
        color: #c1c7bb;
        transition:all 0.2s ease-in;
        text-transform: uppercase;
        text-shadow: 0 0 0 rgba(0,0,0,0);
}
.widget li a:hover{
        color: #fff;
        text-shadow: 0 0 1px rgba(255,255,255,1);
}

.widget_social a{
        display: inline-block;
        vertical-align: middle;
        width: 24px;
        height: 24px;
        margin-right: 23px;
        opacity: .6;
        transition:opacity 0.2s ease-in;
}
.widget_social a:hover{
        opacity: 1;
}
.widget_social a.ig{
        background-image: url('${IG}');
}
.widget_social a.ml{
        background-image: url('${ML}');
}
.widget_social a.fb{
        background-image: url('${FB}');
}
.tribute{
        color: #7e8e7e;
        position: relative;
        top: -20px;
}
/** INNER PRODUCT **/
.inner-product .banner{
        margin-bottom: 90px;
}
.inner-kamus > *:first-child:not(.banner),
.inner-welkam > *:first-child:not(.banner),
.inner-product > *:first-child:not(.banner){
        padding-top: 50px;
}
.inner-author .banner img,
.inner-product .banner img{
        width: 100%;
}
.inner-product .list{
        margin-bottom: 85px;
}
.inner-product .list .hentry{
        margin-bottom: 55px;
        position: relative;
        z-index: 2;
}
.inner-product .list h2{
        float: left;
        color: #5e7460;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.25;
}
.inner-product .list .filter{
        float: right;
        position: relative;
}
.inner-product .list .filter span{
        display: block;
        background: #f5f7f2;
        width: 245px;
        padding: 0 50px 0 25px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        color: #99ae84;
        font-weight: 600;
        cursor: pointer;
}
.inner-product .list .filter span:after{
        display: block;
        position: absolute;
        top: 17px;
        right: 25px;
        width: 12px;
        height: 8px;
        background-image: url('${arrowDownGreen}');
        transition:transform 0.2s ease-in;
        transform: rotate(0deg);
}
.inner-product .list .filter:hover span:after{
        transform: rotate(180deg);
}
.inner-product .list .filter .holder{
        display: block;
        position: absolute;
        background: #f5f7f2;
        width: 100%;
        border-radius: 15px;
        padding: 8px 0;
        margin-top: 15px;
        transition:all 0.2s ease-in;
        opacity: 0;
        visibility: hidden;
}
.inner-product .list .filter:hover .holder{
        opacity: 1;
        visibility: visible;
        margin-top: 10px;
}
.inner-product .list .filter a{
        display: block;
        padding: 8px 25px;
        color: #99ae84;
        transition:color 0.2s ease-in;
}
.inner-product .list .filter a:hover{
        color: #5e7460;
}
.inner-product .list .rowflex{
        margin: 0 -15px;
        position:relative;
}
.search-popup .result.fetching,
.detail-blog .utility .pusher .comment{
        position:relative;
}
.detail-blog .utility .pusher .comment.fetching:after,
.search-popup .result.fetching:after,
#popup-like .form-basic.fetching:after,
.inner-product .list .rowflex.fetching:after{
        display:block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        content: '';
        background: rgba(255,255,255,.7);
}
.inner-product .list .item{
        max-width: calc(25% - 30px);
        flex: calc(25% - 30px);
        margin: 0 15px 30px;
        text-align: center;
}
.inner-home .product .caption,
.detail-blog .product .caption,
.inner-kamus .product .caption,
.inner-product .list .item .caption{
        margin: 12px 0 0;
}
.inner-home .product .caption h3,
.detail-blog .product .caption h3,
.inner-kamus .product h3,
.inner-product .list .item h3{
        line-height: 1.63;
        color: #333;
        min-height:52px;
        word-break: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
}
.inner-product .list .item .download h3{
        min-height: 1px;
        line-height:100%;
}
.inner-home .product .caption h3 a,
.detail-blog .product .caption h3 a,
.inner-kamus .product h3 a,
.inner-product .list .item h3 a{
        color: #333;
        transition:color 0.2s ease-in;
}
.inner-home .product .caption h3 a:hover,
.detail-blog .product .caption h3 a:hover,
.inner-kamus .product  h3 a:hover,
.inner-product .list .item h3 a:hover{
        color: #5e7460;
}
.inner-home .product .cat,
.detail-blog .product .cat,
.inner-kamus .product .cat,
.inner-product .list .item .cat{
        margin: 5px 0 25px;
}
.inner-home .product .cat a,
.detail-blog .product .cat a,
.inner-kamus .product .cat a,
.inner-product .list .item .cat a{
        color: #a0a0a0;
        transition:color 0.2s ease-in;
}
.inner-home .product .cat a:hover,
.detail-blog .product .cat a:hover,
.inner-kamus .product .cat a:hover,
.inner-product .list .item .cat a:hover{
        color: #333;
}
.inner-home .product .button,
.detail-blog .product .button,
.inner-kamus .product .button,
.inner-product .list .item .button{
        height: 36px;
        line-height: 36px;
        font-weight: 700;
        border-radius: 18px;
        padding: 0 20px;
        background: none;
        background: #5e7460;
}
.inner-home .product .button:hover,
.detail-blog .product .button:hover,
.inner-kamus .product .button:hover,
.inner-product .list .item .button:hover{
        background: #445345;
}
.inner-home .product .button:after,
.detail-blog .product .button:after,
.inner-kamus .product .button:after,
.inner-product .list .item .button:after{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        margin-left: 10px;
        right: 0;
        background-image: url('${arrowRightWhite}');
        width: 12px;
        height: 9px;
        transition:right 0.2s ease-in;
        top: -1px;
}
.inner-home .product .button:hover:after,
.detail-blog .product .button:hover:after,
.inner-kamus .product .button:hover:after,
.inner-product .list .item .button:hover:after{
        right: -3px;
}

.inner-product .copy{
        margin-bottom: 90px;
}
.inner-product .copy h2{
        color: #5e7460;
        font-size: 24px;
        line-height: 130%;
        font-weight: 500;
        margin-bottom: 10px;
}
.inner-product .copy .format-text{
        font-weight: 500;
}
.inner-product .copy .plang{
        margin-top: 50px;
}
.inner-product .copy .plang img{
        border-radius: 10px;
        width: 100%;
}
#popup-shop{
        width: 90%;
        max-width: 900px;
        border-radius: 10px;
        padding: 50px 100px 80px;
}
#popup-shop  .fancybox-close-small{
        transform: scale(1.8);
        opacity: .5;
        right: 20px;
        top: 20px;
        filter: brightness(0%);
        transition:opacity 0.2s ease-in;
}
#popup-shop  .fancybox-close-small:hover{
        opacity: 1;
}
#popup-shop .hentry{
        text-align: center;
        margin-bottom: 35px;
}
#popup-shop h2{
        font-size: 32px;
        font-weight: 600;
        line-height: 125%;
        margin-bottom: 10px;
        color: #5e7460;
        float: none;
}
#popup-shop h2 + p{
        margin: 0 !important;
}
#popup-shop .rowflex{
        margin: 0 -8px;
        justify-content: center;
}
#popup-shop .rowflex a{
        max-width: calc(20% - 16px);
        flex: calc(20% - 16px);
        margin: 0 8px;
        background: #fff;
        border: 1px solid #e2e2e2;
        border-radius: 10px;
        transition:all 0.2s ease-in;
        position: relative;
        height: 235px;
        box-shadow: 0px 0 2px rgba(30, 30, 30, 0);
}
#popup-shop .rowflex a:hover{
        box-shadow: 0 3px 6px 0 rgba(153, 174, 132, 0.16);
        border-color: #99ae84;
}
#popup-shop .rowflex a figure{
        position: absolute;
        left: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
}
#popup-shop .rowflex a span{
        text-align: center;
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 20px;
        font-weight: 700;
        color: #5e7460;
}
#popup-shop .rowflex a span em{
        font-style: normal !important;
}
#popup-shop .download{
        margin-top: 40px;
}
#popup-shop .download > *{
        display: inline-block;
        vertical-align: bottom;
}
#popup-shop .download  small{
        display: block;
        line-height: 100%;
        margin-bottom: 3px;
        color: #848484;
        font-size: 14px;
}
#popup-shop .download h3{
        color: #5e7460;
        font-weight: 700;
}
#popup-shop .download .caption{
        float: left;
}
#popup-shop .download .wrapm{
        float: right;
        position: relative;
        top: 11px;
}
.format-text #popup-shop .download .wrapm{
        top: 4px;
}
#popup-shop .download a{
        margin-left: 10px;
        opacity: 1;
        transition:opacity 0.2s ease-in;
        display: inline-block;
        vertical-align: middle;
}
#popup-shop .download a:hover{
        opacity: .7;
}
#popup-shop .download a.gp{
        width: 90px;
        height: 27px;        
        background-image: url('${GP}');
        margin: 0;
}
#popup-shop .download a.as{
        width: 93px;
        height: 29px;
        background-image: url('${AS}');
        position: relative;
        top: 1px;
}
#popup-shop .scrollbar-inner > .scroll-element.scroll-x{
        display: none;
}
.fancybox-thumbs__list a:before{
        border-color: #5e7460 !important;
}
/** INNER BLOG **/
.inner-blog{
        padding: 70px 0 80px;
}
.inner-blog .wrapper{
        max-width: 1140px;
        justify-content: space-between;
}
.inner-blog .sidebar{
        max-width: 18%;
        flex: 18%;
}
.inner-blog .sidebar h2{
        color: #5e7460;
        font-size: 32px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 25px;
        position: relative;
        word-break: break-word;
}
.inner-blog .sidebar .blocky{
        padding-bottom: 27px;
        margin-bottom: 27px;
        border-bottom: 1px solid #ddd;
}
.inner-blog .sidebar .blocky li{
        display: block;
        line-height: 160%;
        margin-top: 15px;
        position: relative;
}
.inner-blog .sidebar .blocky li input{
        display: block;
        position: absolute;
        right:15px;
        top:3px;
        background: red;
        cursor: pointer;
        z-index: 2;
        width: 12px;
        height: 12px;
        opacity: 0;
}
.inner-blog .sidebar .blocky li b{
        display: block;
        position: absolute;
        right: 20px;
        top: 6px;
        width: 8px;
        height: 8px;
        border-bottom: 2px solid #616767;
        border-right: 2px solid #616767;
        transform: rotate(45deg);
        cursor: pointer;
}
.inner-blog .sidebar .blocky li input:checked + b{
        transform: rotate(225deg);
        top: 11px;
}
.inner-blog .sidebar .blocky li ul{
        padding-left: 15px;
        padding-top: 15px;
        display: none;
}
.inner-blog .sidebar .blocky li input:checked + b + ul{
        display: block;
}
.inner-blog .sidebar .blocky li:first-child{
        margin: 0;
}
.inner-blog .sidebar .blocky a{
        color: #616767;
        font-weight: 700;
        transition:color 0.2s ease-in;
}
.inner-blog .sidebar .blocky a:hover{
        color: #99ae84;
}
/*
.inner-blog .sidebar .liney ul{
        display: block;
        margin: 0 -4px;
}
*/
.inner-blog .sidebar .liney li{
        display: inline-block;
        vertical-align: middle;
        line-height: 160%;
        padding: 0 7px 10px 0;
}
.search-popup .result .item .tags a,
.inner-home .editor .list .item .tags a,
.inner-home .blogs .item .tags a,
.inner-home .grid .item .tags a,
.detail-blog .grid .item .tags a,
.inner-kamus .grid .item .tags a,
.inner-author .grid .item .tags a,
.inner-author .article .tags a,
.inner-blog .main .tags a,
.inner-blog .sidebar .liney a{
        font-size: 12px;
        font-weight: 600;
        color: #99ae84;
        display: inline-block;
        padding: 3px 4px;
        transition:all 0.2s ease-in;
        background: #fff;
        border-radius: 9px;
        line-height: 100%;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
}
.inner-home .editor .list .item .tags a{
        display: inline-block;
}
.search-popup .result .item .tags a,
.inner-home .editor .list .item .tags a,
.inner-home .blogs .item .tags a,
.inner-home .grid .item .tags a,
.detail-blog .grid .item .tags a,
.inner-kamus .grid .item .tags a,
.inner-author .grid .item .tags a,
.inner-author .article .tags a{
        font-size: 14px;
        border-radius: 10px;
}
.search-popup .result .item .tags a:hover,
.inner-home .editor .list .item .tags a:hover,
.inner-home .blogs .item .tags a:hover,
.inner-home .grid .item .tags a:hover,
.detail-blog .grid .item .tags a:hover,
.inner-kamus .grid .item .tags a:hover,
.inner-author .grid .item .tags a:hover,
.inner-author .article .tags a:hover,
.inner-blog .main .tags a:hover,
.inner-blog .sidebar .liney a:hover{
        background: #99ae84;
        color: #fff;
}
.inner-blog .main{
        max-width: 79%;
        flex: 79%;
}
.inner-blog .main .info + *{
        margin-top: 50px;
}
.inner-blog .main .info figure{
        margin-bottom: 50px
}
.inner-blog .main .info figure img{
        border-radius: 10px;
        width: 100%;
}
.inner-blog .main .info h2{
        color: #5e7460;
        font-size: 24px;
        line-height: 130%;
        font-weight: 500;
        margin-bottom: 10px;
}
.inner-blog .main .info .format-text{
        font-weight: 500;
}
.search-popup .result .rowflex,
.inner-blog .main .list{
        display: flex;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;
}
.search-popup .result .item,
.inner-blog .main .list .item{
        max-width: calc(50% - 16px);
        flex: calc(50% - 16px);
        margin: 0 8px 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.search-popup .result .item figure,
.inner-blog .main .item figure{
        max-width: 38%;
        flex: 38%;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
}
.search-popup .result .item figure img,
.inner-blog .main .item figure img{
        border-radius: 5px;
}
.search-popup .result .item figure span,
.inner-home .grid .item figure span,
.sc-blog figure span,
.detail-blog .grid .item figure span,
.inner-kamus .grid .item figure span,
.inner-author .grid .item figure span,
.inner-author .article figure span,
.inner-blog .main .item figure span{
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
}
.search-popup .result .item figure span a,
.inner-home .grid .item figure span a,
.sc-blog figure span a,
.detail-blog .grid .item figure span a,
.inner-kamus .grid .item figure span a,
.inner-author .grid .item figure span a,
.inner-author .article figure span a,
.inner-blog .main .item figure span a{
        display: block;
        padding: 0 10px;
        background: #fff;
        height: 20px;
        line-height: 20px;
        color: #5e7460;
        font-size: 10px;
        font-weight: 600;
        border-radius: 0 0 5px 0;
        transition:all 0.2s ease-in;
}
.search-popup .result .item figure span a:hover,
.inner-home .grid .item figure span a:hover,
.detail-blog .grid .item figure span a:hover,
.sc-blog figure span a:hover,
.inner-kamus .grid .item figure span a:hover,
.inner-author .grid .item figure span a:hover,
.inner-author .article figure span a:hover,
.inner-blog .main .item figure span a:hover{
        color: #fff;
        background: #99ae84;
}
.search-popup .result .item .caption,
.inner-blog .main .item .caption{
        max-width: 58%;
        flex: 58%;
}
.search-popup .result .item h3,
.inner-home .grid .item h3,
.detail-blog .grid .item h3,
.inner-kamus .grid .item h3,
.inner-author .grid .item h3,
.inner-author .article h3,
.inner-blog .main .item h3{
        line-height: 150%;
        color: #616767;
        font-weight: 500;
        word-break: break-word;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
}
.search-popup .result .item h3 a,
.inner-home .grid .item h3 a,
.detail-blog .grid .item h3 a,
.inner-kamus .grid .item h3 a,
.inner-author .grid .item h3 a,
.inner-author .article h3 a,
.inner-blog .main .item h3 a{
        color: #616767;
        transition:color 0.2s ease-in;
}
.search-popup .result .item h3 a:hover,
.inner-home .grid .item h3 a:hover,
.detail-blog .grid .item h3 a:hover,
.inner-kamus .grid .item h3 a:hover,
.inner-author .grid .item h3 a:hover,
.inner-author .article h3 a:hover,
.inner-blog .main .item h3 a:hover{
        color: #99ae84;
}
.search-popup .result .item .tags,
.inner-home .editor .list .item .tags,
.inner-home .blogs .item .tags,
.inner-home .grid .item .tags,
.detail-blog .grid .item .tags,
.inner-kamus .grid .item .tags,
.inner-author .grid .item .tags{
        /* margin: 12px -4px 0; */
        margin: 12px 0 0;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        height: 20px;
}
.inner-home .grid .item .tags,
.inner-author .article .tags,
.inner-blog .main .tags{
        /*margin: 15px -4px 0;*/
        margin: 15px 0 0;
}
.search-popup .result .item .tags a,
.inner-home .grid .item .tags a,
.detail-blog .grid .item .tags a,
.inner-kamus .grid .item .tags a,
.inner-author .grid .item .tags a,
.inner-author .article .tags a,
.inner-blog .main .tags a{
        display: inline-block;
        margin: 0 7px 10px 0;
}
.inner-blog .loadmore{
        margin-top: 60px;
}
/** INNER AUTHOR **/
.inner-author .banner{
        margin-bottom: 70px;
}
.inner-home .editor .hentry,
.inner-home .product .hentry,
.inner-home .grid .hentry,
.detail-blog .grid .hentry,
.detail-blog .product .hentry,
.inner-kamus .heading,
.inner-kamus .hentry,
.inner-author .hentry{
        margin-bottom: 30px;
}
.inner-home .editor .hentry h2,
.inner-home .product .hentry h2,
.inner-home .grid .hentry h2,
.detail-blog .grid .hentry h2,
.detail-blog .product .hentry h2,
.inner-kamus .heading h2,
.inner-kamus .hentry h2,
.inner-author .profile h2,
.inner-author .hentry h2{
        float: left;
        color: #5e7460;
        font-size: 32px;
        font-weight: 700;
        line-height: 130%;
}
.inner-home .editor .hentry a,
.inner-home .product .hentry a,
.inner-home .grid .hentry a,
.detail-blog .grid .hentry a,
.detail-blog .product .hentry a,
.inner-kamus .hentry a,
.inner-author .hentry a{
        float: right;
        color: #5e7460;
        font-weight: 700;
        display: inline-block;
        line-height: 100%;
        position: relative;
        top: 12px;
}
.mainmenu li.layer a.cvr-bg-af:after,
.inner-home .editor .hentry a:after,
.inner-home .product .hentry a:after,
.inner-home .grid .hentry a:after,
.detail-blog .grid .hentry a:after,
.detail-blog .product .hentry a:after,
.inner-kamus .hentry a:after,
.inner-author .hentry a:after{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        width: 12px;
        height: 10px;
        top: -1px;
        right: 0;
        transition:right 0.2s ease-in;
        background-image: url('${arrowRightGreen}');
        margin-left: 10px;
}
.mainmenu li.layer a.cvr-bg-af:hover:after,
.inner-home .editor .hentry a:hover:after,
.inner-home .product .hentry a:hover:after,
.inner-home .grid .hentry a:hover:after,
.detail-blog .grid .hentry a:hover:after,
.detail-blog .product .hentry a:hover:after,
.inner-kamus .hentry a:hover:after,
.inner-author .hentry a:hover:after{
        right: -5px;
}
.inner-author .list{
        margin-bottom: 80px;
        position: relative;
}
.inner-author .list .rowflex{
        margin: 0 -8px 20px;
}
.inner-author .list .item{
        flex: calc(33.33333333333333333333% - 16px);
        max-width:  calc(33.33333333333333333333% - 16px);
        margin: 0 8px 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border: 1px solid #e2e2e2;
        border-radius: 10px;
        padding: 22px 20px 25px;
}
.inner-author .list .item figure{
        max-width: 72px;
        flex: 72px;
}
.inner-author .list .item figure img{
        border-radius: 50%;
}
.inner-author .list .item .caption{
        max-width: calc(100% - 92px);
        flex: calc(100% - 92px);
}
.inner-author .list .item  h3{
        color: #5e7460;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 7px;
}
.inner-author .list .item  h3 a{
        color: #5e7460;
        transition:color 0.2s ease-in;
}
.inner-author .list .item  h3 a:hover{
        color: #99ae84;
}
.inner-author .list .item span{
        display: block;
        line-height: 120%;
        font-size: 14px;
        color: #5e7460;
        margin-bottom: 8px;
}
.inner-author .list .item i{
        display: block;
        line-height: 100%;
        font-size: 14px;
        font-style: italic;
}
.inner-author .article{
        margin-bottom: 130px;
}
.inner-home .grid .item figure,
.detail-blog .grid .item figure,
.inner-kamus .grid .item figure,
.inner-author .grid .item figure,
.inner-author .article figure{
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        margin: 0 0 8px;
}
.inner-home .grid .item figure span a,
.detail-blog .grid .item figure span a,
.inner-kamus .grid .item figure span a,
.inner-author .grid .item figure span a,
.inner-author .article figure span a{
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
}
.inner-home .product .slider,
.inner-home .grid .slider,
.detail-blog .slider,
.inner-kamus .slider,
.inner-author .article .slider{
        position: relative;
}
.inner-home .product .slidenav,
.inner-home .grid .slidenav,
.inner-home .caro .slidenav,
.detail-blog .slider .slidenav,
.inner-kamus .slider .slidenav,
.inner-author .article .slidenav{
        position: absolute;
        height: 0;
        width: 100%;
        left: 0;
        top: 30%;
        -ms-transform: translateY(-30%);
        -webkit-transform: translateY(-30%);
        transform: translateY(-30%);
}
.inner-home .product .slidenav a,
.inner-home .grid .slidenav a,
.inner-home .caro .slidenav a,
.detail-blog .slider .slidenav a,
.inner-kamus .slider .slidenav a,
.inner-author .article .slidenav a{
        display: block;
        width: 42px;
        height: 43px;
        position: relative;
        opacity: 1;
        transition:opacity 0.2s ease-in;
}
.inner-home .product .slidenav a:hover,
.inner-home .grid .slidenav a:hover,
.inner-home .caro .slidenav a:hover,
.detail-blog .slider .slidenav a:hover,
.inner-kamus .slider .slidenav a:hover,
.inner-author .article .slidenav a:hover{
        opacity: .6;
}
.inner-home .product .slidenav a.prev,
.inner-home .grid .slidenav a.prev,
.inner-home .caro .slidenav a.prev,
.detail-blog .slider .slidenav a.prev,
.inner-kamus .slider .slidenav a.prev,
.inner-author .article .slidenav a.prev{
        float: left;
        background-image: url('${arrowLeftCircle}');
        left: -67px;
}
.inner-home .product .slidenav a.next,
.inner-home .grid .slidenav a.next,
.inner-home .caro .slidenav a.next,
.detail-blog .slider .slidenav a.next,
.inner-kamus .slider .slidenav a.next,
.inner-author .article .slidenav a.next{
        float: right;
        background-image: url('${arrowRightCircle}');
        right: -67px;
}
.inner-author .grid{
        margin-bottom: 80px;
        position:relative;
}
.inner-author .grid .rowflex{
        margin: 0 -8px;
}
.inner-author .grid .item{
        flex: calc(25% - 16px);
        max-width: calc(25% - 16px);
        margin: 0 8px 50px;
}
.inner-author .profile{
        padding-top: 60px;
        margin-bottom: 70px;
}
.inner-author .profile .rowflex{
        max-width: 900px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
}
.inner-author .profile figure{
        max-width: 49.5%;
        flex: 49.5%;
}
.inner-author .profile figure img{
        border-radius: 10px;
}
.inner-author .profile .caption{
        max-width: 39%;
        flex: 39%;
}
.inner-author .profile strong{
        display: block;
        line-height: 100%;
        color: #99ae84;
        font-weight: 700;
        margin-bottom: 5px;
}
.inner-author .profile h2{
        float: none;
        margin-bottom: 20px;
}
.inner-author .profile .format-text{
        line-height: 175%;
        margin-bottom: 15px;
}
.inner-author .profile .meta > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-author .profile .meta span{
        font-family: 'Nunito Sans';
        font-weight: 400;
        font-size: 14px;
        color: #94a694;
        margin-right: 50px;
        position: relative;
        top: 4px;
        line-height: 100%;
}
.detail-blog .intro .meta a,
.inner-kamus .detail .share a,
.inner-author .profile .social a{
        display: inline-block;
        vertical-align: middle;
        width: 18px;
        height: 18px;
        opacity: .6;
        transition:opacity 0.2s ease-in;
        margin: 0 15px 0 0;
}
.detail-blog .intro .meta a:hover,
.inner-kamus .detail .share a:hover,
.inner-author .profile .social a:hover{
        opacity: 1;
}
.inner-author .profile .social a.ig{
        background-image: url('${igGreen}');
}
.inner-author .profile .social a.fb{
        background-image: url('${fbGreen}');
}
.inner-author .profile .social a.tw{
        background-image: url('${twGreen}');
}
.inner-author .profile .social a.cp{
        background-image: url('${cpGreen}');
}
.detail-blog .intro .meta a.ig,
.inner-kamus .detail .share a.ig{
        background-image: url('${igGreenSM}');
}
.detail-blog .intro .meta a.fb,
.inner-kamus .detail .share a.fb{
        background-image: url('${fbGreenSM}');
}
.detail-blog .intro .meta a.tw,
.inner-kamus .detail .share a.tw{
        background-image: url('${twGreenSM}');
}
.detail-blog .intro .meta a.cp,
.inner-kamus .detail .share a.cp{
        background-image: url('${cpGreenSM}');
}
.inner-author .pamflet{
        margin-bottom: 160px;
}
.inner-author .pamflet img{
        width: 100%;
        border-radius: 10px;
}
/** INNER WELKAM **/

.inner-welkam .banner{
        margin-bottom: 100px;
}
.inner-kamus .banner img,
.inner-welkam .banner img{
        width: 100%;
}
.inner-welkam .intro{
        margin-bottom: 120px;
}
.inner-welkam .intro .hentry{
        margin: 0 auto 60px;
        max-width: 740px;
}
.inner-welkam .block h2,
.inner-welkam .intro h2{
        font-size: 32px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 20px;
        text-align: center;
}
.inner-welkam .block .format-text,
.inner-welkam .intro .format-text{
        font-weight: 500;
        line-height: 175%;
}
.inner-welkam .intro figure img{
        width: 100%;
        border-radius: 10px;
}
.inner-welkam .block{
        margin-bottom: 100px;
}
.inner-welkam .block .item{
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
}
.inner-welkam .block .caption{
        flex: 100%;
        max-width: 100%;
}
.inner-welkam .block figure + .caption,
.inner-welkam .block figure{
        max-width: 49%;
        flex: 49%;
}
.inner-welkam .pamflet img,
.inner-welkam .block figure img{
        width: 100%;
        border-radius: 10px;
}
.inner-welkam .block .holder{
        max-width: 355px;
        margin: 0 auto;
}
.inner-welkam .block .item:nth-child(even) .caption {
        order: 1;
}
.inner-welkam .block .item:nth-child(even) figure {
        order: 2;
}
.inner-welkam .block h2{
        text-align: left;
}
.inner-welkam .block .button{
        min-width: 190px;
        margin-top: 35px;
}
.inner-welkam .pamflet{
        margin-bottom: 120px;
}
/** INNER KAMUS **/
.inner-kamus .banner{
        margin-bottom: 35px;
}
.inner-kamus .search{
        margin-bottom: 30px;
}
.inner-kamus .search form{
        max-width: 720px;
        margin: 0 auto 25px;
        position: relative;
}
.inner-kamus .search form input{
        /* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
        
        width: 100%;
        display: block;
        height: 60px;
        border-radius: 30px;
        font-family: 'Karla';
        font-style: italic;
        color: #848484;
        font-size: 16px;
        padding: 0 65px 0 35px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #f2f2f2;
        background: #fff;
}
.inner-kamus .search form button{
        position: absolute;
        cursor: pointer;
        background: none;
        border: none;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${Search}');
        width: 22px;
        height: 24px;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        opacity: 1;
        right: 35px;
        opacity: 1;
        transition:opacity 0.2s ease-in;
}
.inner-kamus .search form button:hover{
        opacity: .6;
}
.inner-kamus .search .alpha{
        text-align: center;
        position: relative;
}
.inner-kamus .search .alpha > label{
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        margin: 0 7.5px;
        color: #848484;
        transition:color 0.2s ease-in;
        cursor: pointer;
}
.inner-kamus .search .alpha > label input{
        display: none;
}
.inner-kamus .search .alpha > label:hover{
        color: #5e7460;
}
.inner-kamus .search .alpha label input:checked + b{
        font-weight: 800;
}
.inner-kamus .glos{
        padding-bottom: 18px;
        margin-bottom: 49px;
        border-bottom: 1px solid #e2e2e2;
}
.inner-kamus .glos h2{
        float: left;
        font-weight: 600;
        font-size: 24px;
        color: #5e7460;
}

.inner-kamus .glos h2 b{
        font-weight: 700;
        font-size: 60px;
        position: relative;
        right: -15px;
}
.inner-kamus .glos span{
        float: right;
        font-weight: 600;
        position: relative;
        top: 40px;
}
.inner-kamus .list {
        margin-bottom: 100px;
        position: relative;
}
.inner-author .list.fetching:after,
.inner-author .grid.fetching:after,
.inner-kamus .list.fetching:after{
        display:block;
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        z-index:9999;
        background: rgba(255,255,255,.7);
        content: '';
}
.inner-kamus .list .pusher{
        max-width: 900px;
        margin: 0 auto;
}
.inner-kamus .list .rowflex{
        margin: 0 -8px;        
}
.inner-kamus .list .item{
        max-width: calc(50% - 16px);
        flex: calc(50% - 16px);
        margin: 0 8px 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
}
.inner-kamus .list .item figure{
        max-width: 30%;
        flex: 30%;
}
.inner-kamus .list .item figure img{
        width: 100%;
        border-radius: 5px;
}
.inner-kamus .list .item .caption{
        max-width: 66%;
        flex: 66%;
}
.inner-kamus .list .item h3{
        color: #5e7460;
        font-size: 20px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 5px;
}
.inner-kamus .list .item h3 a{
        color: #5e7460;
        transition:color 0.2s ease-in;
}
.inner-kamus .list .item h3 a:hover{
        color: #333;
}
.inner-kamus .list .centered{
        margin-top: 60px;
}
.inner-kamus .info {
        margin-bottom: 80px;
}
.inner-kamus .info .pusher{
        max-width: 900px;
        margin: 0 auto;
}
.inner-kamus .detail h2,
.inner-kamus .info h2{
        color: #5e7460;
        line-height: 130%;
        margin-bottom: 12px;
        font-size: 24px;
        font-weight: 500;
}
.inner-kamus .info .format-text{
        font-weight: 500;
}
.inner-kamus .pamflet{
        margin-bottom: 80px;
}
.inner-kamus .pamflet img{
        width: 100%;
        border-radius: 10px;
}
.inner-author .article .slick-track .item,
.inner-home .grid .slick-track .item,
.detail-blog .grid .slick-track .item,
.inner-kamus .slider .slick-track .item{
        padding: 0 8px;
        margin: 0 -8px;
}
.inner-author .article .slick-list,
.inner-home .grid .slick-list,
.detail-blog .grid .slick-list,
.inner-kamus .slider .slick-list{
        margin-right: -16px;
}
.inner-kamus .product {
        margin-bottom: 110px;
}
.inner-home .product .slider .slick-track .item,
.detail-blog .product .slider .slick-track  .item,
.inner-kamus .product .slider .slick-track .item{
        margin: 0 -16px;
        padding: 0 16px;
        text-align: center;
}
.inner-home .product .slick-list,
.detail-blog .product .slider .slick-list,
.inner-kamus .product .slider .slick-list{
        margin-right: -32px;
}
.inner-home .product .item,
.inner-kamus .product .item{
        text-align: center;
}
.inner-home .product h3,
.detail-blog .product h3,
.inner-kamus .product h3{
        max-width: 175px;
        margin-left: auto;
        margin-right: auto;
}
.inner-home .product .slick-dots,
.detail-blog .product  .slider .slick-dots,
.inner-kamus .product .slider .slick-dots{
        margin-top: 60px;
}
.inner-kamus .grid{
        margin-bottom: 120px;
}
.inner-home .grid .slick-dots,
.detail-blog .grid .slick-dots,
.inner-kamus .grid .slick-dots{
        margin-top: 40px;
}
.inner-kamus .heading h2{
        float: none;
        text-align: center;
        margin: 0 0 60px;
}
.inner-kamus .crumb{
        padding: 40px 0;
}
.inner-kamus .crumb .wrapper > *{
        display: inline-block;
        vertical-align: middle;
        color: #5e7460;
        transition:color 0.2s ease-in;
}
.inner-kamus .crumb .wrapper a:hover{
        color: #99ae84;
}
.inner-kamus .crumb .wrapper > span{
        font-weight: 600;
}
.inner-kamus .crumb i{
        margin: 0 24px;
        width: 8px;
        height: 14px;
        background-image: url('${arrowCrumb}');
}
.inner-kamus .detail {
        margin-bottom: 80px;
}
.inner-kamus .detail .rowflex{
        justify-content: space-between;
        align-items: center;
}
.inner-kamus .detail figure{
        max-width: 36%;
        flex: 36%;
}
.inner-kamus .detail figure img{
        width: 100%;
        border-radius: 10px;
}
.inner-kamus .detail .caption{
        max-width: 59%;
        flex: 59%;
}
.inner-kamus .detail h2{
        font-size: 32px;
}
.inner-kamus .detail .format-text{
        font-weight: 500;
        line-height: 180%;
}
.inner-kamus .detail .meta{
        margin-top: 35px;
}
.inner-kamus .detail .meta .like > *,
.inner-kamus .detail .meta .share > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-kamus .detail .meta span{
        color: #5e7460;
        font-weight: 600;
        line-height: 130%;
}
.inner-kamus .detail .like {
        float: left;
}
.detail-blog .main .info .like span b,
.detail-blog .intro .author strong b,
.detail-blog .intro .heading b,
.inner-kamus .detail .meta .like span em{
        display:inline-block !important;
        position:relative;
}
.detail-blog .main .info .like span b.fetching,
.detail-blog .intro .author strong b.fetching,
.detail-blog .intro .heading b.fetching,
.inner-kamus .detail .meta .like span em.fetching{
        color:rgba(0,0,0,0);
}
.detail-blog .main .info .like span b.fetching:before,
.detail-blog .intro .author strong b.fetching:before,
.detail-blog .intro .heading b.fetching:before,
.inner-kamus .detail .meta .like span em.fetching:before{
        width:16px;
        height:16px;
        display: block;
        position: absolute;
        left:-4px;
        top:2px;
        content: '';
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url('${LikeLoading}');
}
.detail-blog .main .info .like span b.fetching:before{
        left: -8px;
        top: -1px;
}
.detail-blog .intro .author strong a,
.detail-blog .intro .heading a,
.inner-kamus .detail .like a{
        width: 50px;
        height: 50px;
        background-image: url('${Like}');
        margin-right: 25px;
}
.detail-blog .intro .author strong a{
        width: 36px;
        height: 36px;
        margin: 0 auto 5px;
}
.detail-blog .intro .meta a,
.inner-kamus .detail .share a{
        width: 16px;
        height: 16px;
}
.inner-kamus .detail .share{
        float: right;
        position: relative;
        top: 14px;
}
.inner-kamus .detail .share span{
        margin-right: 30px;
}
/** DETAIL BLOG **/
.detail-blog{
        padding-top: 40px;
}
.detail-blog .intro{
        margin-bottom: 45px;
}
.detail-blog .intro .pusher{
        max-width: 720px;
        margin: 0 auto;
}
.detail-blog .intro .heading{
        position: relative;
        margin-bottom: 15px;
        padding-right: 100px;
}
.detail-blog.detail-page .intro .heading{
        padding: 0;
        text-align: center;
        margin-bottom: 0;
}
.detail-blog .intro .author{
        position: relative;
}
.detail-blog .intro .heading h1{
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
}
.detail-blog .intro .author strong,
.detail-blog .intro .heading span{
        display: inline-block;
        position: absolute;
        right: 0;
        top: 15px;
        text-align: center;
}
.detail-blog .intro .author strong a,
.detail-blog .intro .heading a{
        display: block;
        margin: 0 auto 8px;
}
.detail-blog .intro .author strong b,
.detail-blog .intro .author strong a b,
.detail-blog .intro .heading b{
        display: block;
        text-align: center;
        color: #5e7460;
        font-weight: 700;
}
.detail-blog .intro .meta{
        /*padding-left: 115px;*/
        margin-bottom: 30px;
}
.detail-blog .intro .meta > *{
        display: inline-block;
        vertical-align: middle;
        color: #94a694;
        font-size: 14px;
        font-family: 'Nunito Sans';
        font-weight: 400;
}
.detail-blog .intro .meta span{
        margin-right: 40px;
}
.detail-blog .utility .author > *,
.detail-blog .intro  .author > *{
        display: inline-block;
        vertical-align: middle;
}
.detail-blog .utility .author img,
.detail-blog .intro  .author img{
        border-radius: 50%;
}
.detail-blog .utility .author .caption,
.detail-blog .intro  .author .caption{
        margin-left: 20px;
}
.detail-blog .utility .author h3,
.detail-blog .intro .author  h3{
        color: #5e7460;
        font-size: 16px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 5px;
}
.detail-blog .utility .author h3 a,
.detail-blog .intro .author  h3 a{
        color: #5e7460;
        transition:color 0.2s ease-in;
}
.detail-blog .utility .author h3 a:hover,
.detail-blog .intro .author  h3 a:hover{
        color: #94a694;
}
.detail-blog .utility .author span,
.detail-blog .intro .author span{
        color: #94a694;
        font-size: 14px;
        display: block;
        line-height: 100%;
}
.detail-blog .featured{
        margin-bottom: 40px;
}
.detail-blog .featured img{
        width: 100%;
        height: auto;
}
.detail-blog .main{
        margin-bottom: 130px;
}
.detail-blog .main .rowflex{
        justify-content: space-between;
        width: 1320px;
        max-width: 100%;
        overflow: hidden;
        padding: 0 20px;
}
.detail-blog .featured .wrapper{
        max-width: 1320px;
        padding: 0 20px;
}
.detail-blog.detail-page .main .rowflex{
        width: 1080px;
        padding: 0;
        display:block;
}
.detail-blog .main .info{
        max-width: 19%;
        flex: 19%;
        border-right: 1px solid #f5f5f5;
}
.detail-blog .main .info .holder{
        padding-right: 30px;
}
.detail-blog .main .info .ftitle{
        margin-bottom: 15px;
}
.detail-blog .main .related h2,
.detail-blog .main .info .share h3,
.detail-blog .main .info .ftitle strong{
        display: block;
        font-weight: 600;
        font-size: 20px;
        line-height: 130%;
        margin-bottom: 15px;
        color: #94a694;
}
.detail-blog .main .info .ftitle span{
        display: block;
        line-height: 100%;
        margin-bottom: 5px;
}
.detail-blog .main .info .ftitle span a{
        color: #5e7460;
        font-size: 14px;
        font-weight: 600;
        transition:color 0.2s ease-in;
}
.detail-blog .main .info .ftitle span a:hover{
        color: #94a694;
}
.detail-blog .main .info .ftitle h3{
        color: #616767;
        font-size: 14px;
        font-weight: 500;
        line-height: 145%;
}
.detail-blog .main .info .like{
        margin-bottom: 40px;
}
.detail-blog .main .info .like > *{
        display: inline-block;
        vertical-align: middle;
        color: #5e7460;
        font-size: 12px;
}
.detail-blog .main .info .like a{
        width: 33px;
        height: 33px;
        background-image: url('${likeSM}');
        margin-right: 19px;
}
.detail-blog .main .info .like span b{
        font-weight: 700;
}
.detail-blog .main .info .share a{
        width: 25px;
        height: 25px;
        margin-right: 23px;
        opacity: 0.6;
        transition:opacity 0.2s ease-in;
        display: inline-block;
        vertical-align: middle;
}
.detail-blog .main .info .share a:hover{
        opacity: 1;
}
.detail-blog .main .info .share a.fb{
        background-image: url('${fbLG}');
}
.detail-blog .main .info .share a.tw{
        background-image: url('${twLG}');
}
.detail-blog .main .info .share a.ig{
        background-image: url('${igLG}');
}
.detail-blog .main .info .share a.cp{
        background-image: url('${cpLG}');
}
.detail-blog .main .content{
        max-width: 54.5%;
        flex: 54.5%;
}
.detail-blog.detail-page .main .content{
        max-width: 100%;
        flex: 100%;
}
.detail-blog .main .related .holder{
        padding-left: 20px;
}
.detail-blog .main .related .active .holder{
        position: relative;
        top: 95px;
}
.detail-blog .content .format-text{
        line-height: 200%;
}
.detail-blog .content .format-text > *{
        margin-top: 28px;
}
.detail-blog .content .format-text > *:first-child{
        margin: 0;
}
.detail-blog .content .tags{
        margin-top: 65px;
}
.detail-blog .content .tags h2{
        color: #708370;
        font-size: 24px;
        font-weight: 600;
        line-height: 160%;
        margin-bottom: 20px;
}
.detail-blog .main .related .tags a,
.detail-blog .content .tags a{
        display: inline-block;
        vertical-align: middle;
        color: #99ae84;
        font-size: 13px;
        font-weight: 600;
        height: 36px;
        line-height: 36px;
        border-radius: 18px;
        background: rgba(153, 174, 132, 0.1);
        transition:all 0.2s ease-in;
        padding:0 27px;
        margin: 0 15px 15px 0;
}
.detail-blog .main .related .tags a:hover,
.detail-blog .content .tags a:hover{
        color: #fff;
        background: #99ae84;
}
.detail-blog .main .related{
        max-width: 21%;
        flex: 21%;
        border-left: 1px solid #f5f5f5;
}
.detail-blog .main .related .list{
        margin-bottom: 30px;
}
.detail-blog .main .related .list .item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 12px;
        align-items: center;
}
.detail-blog .main .related .list .item:first-child{
        margin-top: 0;
}
.detail-blog .main .related .list .item:first-child + .item{
        margin-top: 16px;
}
.detail-blog .main .related .list .item img{
        display: block;
        width: 100%;
        border-radius: 5px;
}
.detail-blog .main .related .list .item figure{
        max-width: 31.7%;
        flex: 31.7%;
}
.detail-blog .main .related .list .item h3{
        color: #616767;
        font-size: 12px;
        font-weight: 500;
        line-height: 145%;
        max-width: 62.6%;
        flex: 62.6%;
}
.detail-blog .main .related .list .item:first-child figure,
.detail-blog .main .related .list .item:first-child h3{
        flex: 100%;
        max-width: 100%;
}
.detail-blog .main .related .list .item:first-child h3 {
        margin-top: 8px;
        font-size: 14px;
}
.detail-blog .main .related .list .item h3 a{
        color: #616767;
        transition:color 0.2s ease-in;
}
.detail-blog .main .related .list .item h3 a:hover{
        color: #99ae84;
}
.detail-blog .main .related .tags a{
        padding: 0 15px;
        margin: 0 12px 12px 0;
}
.detail-blog .main .info .holder,
.detail-blog .main .related .holder{
        /*opacity: 0;
        transition:opacity 0.2s ease-in;*/
}
.detail-blog .main .info .is-sticky .holder,
.detail-blog .main .related .is-sticky .holder{
        /*opacity: 1;*/
}
.detail-blog .product{
        padding-bottom: 120px;
}
.detail-blog .banner{
        padding-bottom: 80px;
}
.detail-blog .banner img{
        width: 100%;
}
.detail-blog .grid{
        padding-bottom: 120px;
}
.detail-blog .utility{
        padding-bottom: 130px;
}
.detail-blog .utility .pusher{
        max-width: 720px;
        margin: 0 auto;
}
.detail-blog .utility .author{
        position: relative;
        padding: 26px 23px;
        border-radius: 5px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.04);
        border: solid 1px #efefef;
        background: #fff;
        margin: 0 0 50px;
}
.detail-blog .utility .author strong{
        display: block;
        line-height: 100%;
        margin-bottom: 5px;
}
.detail-blog .utility .author h3{
        font-size: 20px;
        margin-bottom: 7px;
}
.detail-blog .utility .author small{
        color: #94a694;
        font-size: 14px;
        position: absolute;
        right:23px;
        top: 26px;
}
.detail-blog .utility .comment h2{
        font-weight: 600;
        font-size: 20px;
        line-height: 130%;
        margin: 0 0 20px;
}
.detail-blog .utility form{
        margin-bottom: 60px;
}
.detail-blog .utility  form textarea,
.detail-blog .utility form input{
        /* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
        display: block;
        border-radius: 0;
        width: 100%;
        font-family: 'Karla';
        font-weight: 400;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #d1d1d1;
        padding: 16px 20px;
}
.detail-blog .utility  form textarea{
        border-radius: 5px;
        border: 1px solid #d1d1d1;
        min-height: 130px;
        resize: vertical;
}
.detail-blog .utility  form textarea:focus,
.detail-blog .utility form input:focus{
        border-color: #708370;
}
.detail-blog .utility form > *{
        margin-top: 15px;
}
.detail-blog .utility  .list .item:first-child,
.detail-blog .utility form > *:first-child{
        margin: 0;
}
.detail-blog .utility .rightned{
        margin-top: 25px;
}
.detail-blog .utility .rightned .button{
        min-width: 190px;
}
.detail-blog .utility  .list .item{
        margin-top: 16px;
        border: 1px solid #efefef;
        padding: 25px 22px;
        border-radius: 5px;
}
.detail-blog .utility  .list .item .hcom{
        position: relative;
        margin-bottom: 20px;
}
.detail-blog .utility  .list .item .hcom h3{
        color: #5e7460;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        margin-bottom: 5px;
}
.detail-blog .utility  .list .item .hcom small,
.detail-blog .utility  .list .item .hcom span{
        display: block;
        font-size: 14px;
        color: #94a694;
        line-height: 100%;
}
.detail-blog .utility  .list .item .hcom span{
        position: absolute;
        right: 0;
        top: 0;
}
.detail-blog .utility  .list .format-text{
        line-height: 200%;
}
.detail-blog .utility  .list .item .child{
        padding: 20px 0 0 50px;
        margin: 20px 0 0;
        border-top: 1px solid #efefef;
}
.detail-blog .utility .list .item .child .hcom{
        margin-bottom: 10px;
}
/** INNER HOME **/
.inner-home {
        padding-bottom: 50px;
}
.inner-home .caro{
        margin-bottom: 70px;
}
.inner-home > *:first-child{
        margin-bottom: 20px;
}
.inner-home .caro a.full img,
.inner-home .caro a.full{
        display: block;
        width: 100%;
}
.inner-home .caro a.full{
        margin: -40px 0;
}
.inner-home .caro .slidenav{
        z-index: 3;
        top: 45%;
        -ms-transform: translateY(-45%);
        -webkit-transform: translateY(-45%);
        transform: translateY(-45%);
}
.inner-home .caro .slidenav a.prev{
        left: 80px;
}
.inner-home .caro .slidenav a.next{
        right: 80px;
}
.inner-home .caro .slick-track{
        display: flex;
}
.inner-home .caro .slider{
        position: relative;
}
.inner-home .caro .slick-track > *{
        display: flex !important;
        align-items: center;
        float: none;
        height: auto;
        position: relative;
        padding: 40px 0;
}
.inner-home .caro .slick-track > * > *{
        width: 100%;
}
.inner-home .caro .item .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 1;
}
.inner-home .blogs .bg.mbg,
.inner-home .tagging .bg.mbg,
.inner-home .caro .item .mbg{display:none;}
.inner-home .caro .item .wrapper{
        position: relative;
        z-index: 2;
        align-items: center;
        justfy-content: space-between;
}
.inner-home .caro .item figure{
        flex: 50%;
        max-width: 50%;
        text-align: center;
}
.inner-home .caro .item figure img{
        max-width: 80%;
        display: inline-block;
}
.inner-home .caro .item .caption{
        flex: 100%;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
}
.inner-home .caro .item figure + .caption{
        max-width: 40%;
        flex: 40%;
        text-align: left;
        margin: 0;
}
.inner-home .caro .item .caption span{
        display: block;
        line-height: 100%;
        color: #99ae84;
        font-weight: 700;
        margin-bottom: 12px;
}
.inner-home .caro .item .caption span a{
        color: #99ae84;
        transition:color 0.2s ease-in;
}
.inner-home .caro .item .caption span a:hover{
        color: #5e7460;
}
.inner-home .caro .item .caption h2{
        color: #5e7460;
        font-size: 32px;
        line-height: 125%;
        font-weight: 700;
}
.inner-home .caro .item .caption h2 a{
        color: #5e7460;
        transition:color 0.2s ease-in;
}
.inner-home .caro .item .caption h2 a:hover{
        color: #99ae84;
}
.inner-home .caro .item .caption .button{
        margin-top: 20px;
}
.inner-home .tagging{
        position: relative;
        padding: 70px 0 80px;
        margin-bottom: 70px;
}
.inner-home .tagging .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 1;
        background-position: left bottom;
}
.inner-home .tagging .wrapper{
        position: relative;
        z-index: 2;
}
.inner-home .tagging h2{
        color: #5e7460;
        font-size: 32px;
        font-weight: 700;
        line-height: 125%;
        margin-bottom: 35px;
}
.inner-home .tagging.switched h2{
        margin-bottom: 0;
}
.inner-home .tagging .rowflex{
        justify-content: space-between;
        align-items: center;
}
.inner-home .tagging figure{
        max-width: 32.7%;
        flex: 32.7%;
}
.inner-home .tagging.switched figure{
        order: 2;
}
.inner-home .tagging figure img{
        width: 100%;
        border-radius: 10px;
}
.inner-home .tagging .caption{
        max-width: 61%;
        flex: 61%;
}
.inner-home .tagging.switched .caption{
        order: 1;
}
.inner-home .tagging .caption a{
        display: inline-block;
        vertical-align: middle;
        color: #99ae84;
        font-weight: 600;
        transition:all 0.2s ease-in;
        margin: 0 16px 16px 0;
        background: #f5f7f2;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        padding: 0 30px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
}
.inner-home .tagging .caption a:hover{
        color: #fff;
        background: #99ae84;
}
.inner-home .grid{
        margin-bottom: 60px;
}
.inner-home .blogs{
        position: relative;
        padding: 65px 0 85px;
        margin-bottom: 30px;
}
.inner-home .blogs .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: block;
}
.inner-home .blogs .wrapper{
        position: relative;
        z-index: 2;
        justify-content: space-between;
}
.inner-home .blogs h2{
        font-size: 60px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 15px;
}
.inner-home .blogs .thumb{
        max-width: 41.2%;
        flex: 41.2%;
}
.inner-home .blogs .thumb img{
        width: 100%;
        border-radius: 10px;
}
.inner-home .blogs .wrap{
        max-width: 50%;
        flex: 50%;
        position: relative;
        top: 30px;
}
.inner-home .blogs .wrap > h3{
        font-size: 32px;
        font-weight: 500;;
        line-height: 125%;
        margin-bottom: 20px;
}
.inner-home .blogs .item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 16px;
}
.inner-home .blogs .item:first-child{
        margin-top: 0;
}
.inner-home .blogs .item figure{
        max-width: 31.5%;
        flex: 31.5%;
}
.inner-home .blogs .item figure img{
        width: 100%;
        border-radius: 5px;
}
.inner-home .blogs .item .caption{
        max-width: 65%;
        flex: 65%;
}
.inner-home .editor .list h3,
.inner-home .blogs .item h3{
        color: #616767;
        font-weight: 500;
        line-height: 150%;
        margin-bottom: 10px;
}
.inner-home .editor .list h3 a,
.inner-home .blogs .item h3 a{
        color: #616767;
        transition:color 0.2s ease-in;
}
.inner-home .blogs .item h3 a:hover{
        color: var(--hover-color);
}
.inner-home .editor .list h3 a:hover{
        color: #99ae84;
}
.inner-home .editor .list .cats,
.inner-home .blogs .item .cats{
        margin-bottom: 15px;
}
.search-popup .result .item .cats a,
.inner-home .editor .list .cats a,
.inner-home .blogs .item .cats a{
        color: #5e7460;
        font-size: 14px;
        font-family: 'Nunito Sans';
}
.inner-home .blogs .item .tags a{
        background: rgba(0,0,0,0);
        display: inline-block;
}
.inner-home .blogs .item .tags a:hover{
        color: #fff !important;
        background: var(--hover-bg);
}
.inner-home .product{
        margin-bottom: 100px;
}
.inner-home .editor .author{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px 30px;
}
.inner-home .editor .author .item{
        flex: calc(33.333333333333333333% - 20px);
        max-width: calc(33.333333333333333333% - 20px);
        margin: 0 10px ;
}
.inner-home .editor .author.duo .item{
        flex: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 0 10px ;
}
.inner-home .editor .person > *,
.inner-home .editor .author .item > *{
        display: inline-block;
        vertical-align: middle;
}
.inner-home .editor .person figure img{
        border-radius: 50%;
}
.inner-home .editor .person .caption,
.inner-home .editor .author .item  .caption{
        max-width: calc(100% - 100px);
        margin-left: 15px;
}
.inner-home .editor .person h3,
.inner-home .editor .author .item h3{
        color: #5e7460;
        font-weight: 600;
        line-height: 145%;
        margin-bottom: 5px;
}
.inner-home .editor .person h3 a,
.inner-home .editor .author .item h3 a{
        color: #5e7460;
        transition:color 0.2s ease-in;
}
.inner-home .editor .person h3 a:hover,
.inner-home .editor .author .item h3 a:hover{
        color: #99ae84;
}
.inner-home .editor .person span,
.inner-home .editor .author .item span{
        display: block;
        line-height: 100%;
        color: #5e7460;
        font-size: 14px;
}
.inner-home .editor .person{
        margin-bottom: 30px;
}
.inner-home .editor .list:not(.onlyone) .rowflex{
        margin: 0 -8px;
}
.inner-home .editor .list:not(.onlyone) .rowflex .col{
        margin: 0 8px  40px;
        max-width: calc(50% - 16px);
        flex: calc(50% - 16px);
}
.inner-home .editor .list.onlyone .wrapitem{
        display: flex;
        margin: 0 -8px;
        flex-wrap: wrap;
}
.inner-home .editor .list.onlyone .wrapitem .item{
        max-width: calc(33.3333333333333333% - 16px);
        flex: calc(33.3333333333333333% - 16px);
        margin: 0 8px 16px;
}
.inner-home .editor .list .item{
        margin:  0 0 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
.inner-home .editor .list .item figure{
        max-width: 31.5%;
        flex: 31.5%;
}
.inner-home .editor .list .item figure img{
        width: 100%;
        border-radius: 5px;
}
.inner-home .editor .list .item .caption{
        max-width: 65.5%;
        flex: 65.5%;
}
.inner-home .editor{
        margin-bottom: 120px;
}
.inner-home .editor .centered{
        margin-top: 50px;
}
.popup-filter{
	max-width: 90%;
        width: 360px;
	padding: 30px 15px 40px;
	border-radius: 10px;
	box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
}
.popup-filter .hentry{
	text-align: center;
	margin-bottom: 30px;
}
.popup-filter .hentry h2{
	font-weight: 600;
	font-size: 24px;
	line-height: 130%;
	margin-bottom: 3px;
        float: none;
}
.popup-filter .hentry p{
	color: #616767;
}
.popup-filter .wrap{
	display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding:  0 15px;
}
.popup-filter .wrap label{
        cursor: pointer;
        max-width: 48%;
        flex: 48%;
        overflow: hidden;
        margin: 0 0 13px;
}
#popup-alpha.popup-filter .wrap label{
        max-width: none;
        margin: 0;
        overflow: visible;
        flex: auto;
        max-width: 16%;
}
#popup-alpha.popup-filter .wrap label:last-child{
        max-width: 66%;
}
#popup-alpha.popup-filter .wrap {
        margin: 0 -8px;
}
#popup-alpha.popup-filter .wrap label b{
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        background: #f4f4f4;
        margin: 0 8px 16px;
        color: #848484;
        font-size: 16px;
}
#popup-alpha.popup-filter .wrap label:last-child b{
        width: auto;
}
#popup-alpha.popup-filter .wrap label input:checked + b{
        background: #5e7460;
        color: #fff;
        font-weight: 700;
}
.popup-filter .wrap label input{
        display: none;
}
.popup-filter .wrap label b{
        display: block;
        width: 100%;
        text-align: center;
        height: 34px;
        border-radius: 17px;
        text-align: center;
        line-height: 34px;
        background-color: rgba(153, 174, 132, 0.1);
        color: #99ae84;
        transition: all 0.2s ease-in;
        padding: 0 5px;
        font-size: 13px;
}
.popup-filter .wrap label input:checked + b{
        background: #99ae84;
        color: #fff;
}
.popup-filter .action{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 35px  15px  0;
}
.popup-filter .action > *{
	max-width: 48%;
	flex: 48%;
}
.popup-layer{
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        z-index: 9999;
        background: rgba(0,0,0,.6);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
}
.popup-layer > *{
        background: #fff;
        position: relative;
}
.popup-layer .close-popup{
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        position: absolute;
        top:12px;
        right:3px;
        width: 30px;
        height:30px;
        opacity: 1;
        transition:opacity 0.2s ease-in;
}
.popup-layer .close-popup:hover{
        opacity: .7;
}
.popup-layer .close-popup:after{
        position: absolute;
        top: 5px;
        left: 6px;
        display: block;
        width: 10px;
        height: 10px;
        background-image: url('${Close}');
}
.rcs-custom-scroll .rcs-custom-scrollbar{
        width: 3px;
        opacity: 1;
        right: 0;
}
.rcs-custom-scroll .rcs-inner-handle{
        background: #e4e4e4;
}

/** POPUP LIKE **/
#popup-like .form-basic{
        padding: 0 5px;
}
#popup-like input{
        /* Remove First */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
        display: inline-block;
        vertical-align: middle;
        border-radius: 3px;
        width:calc(100% - 110px);
        margin-right:10px;
        height:40px;
        border: 1px solid #f2f2f2;
        font-family: 'Karla';
        font-size: 14px;
        padding: 0 15px;
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
}
#popup-like button.button{
        display: inline-block;
        vertical-align: middle;
        border-radius: 3px;
        width: 100px;
        padding: 0 5px;
        font-size: 14px;
}
#popup-like .form-basic{
        position:relative;
}
/** INNER 404 **/
.inner-404{
        text-align: center;
        padding: 100px 0 160px;
}
.inner-404 p{
        margin: 40px 0 35px;
}
.inner-404 .button{
        min-width: 155px;
        margin: 0 7px;
}
/** SEARCH **/
#top .dsearch{
        display: block;
        position: absolute;
        width: 35px;
        height: 35px;
        background-image: url('${SearchDesktop}');
        top: 0;
        left: -55px;
        opacity: 1;
        transition:opacity 0.2s ease-in;
        color: rgba(0,0,0,0);
        overflow: hidden;
}
.dsearch:hover{
        opacity: .7;
}
#top .msearch,
.sidemenu .dsearch{
        display:none;
}
.sidemenu .msearch{
        display: block;
        width: 175px;
        height: 36px;
        border-radius: 18px;
        background: none;
        background: #f5f7f2;
        color: #c1c7bb;
        font-style: italic;
        margin-bottom: 50px;
        line-height: 36px;
        padding: 0 0 0 50px;
        position: relative;
}
.sidemenu .msearch:before{
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 16.621px;
        height: 17.621px;
        background-image: url('${SearchSide}');
        display: block;
        position: absolute;
        left: 17px;
        top: 10px;
        content: '';
}
.search-popup{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,.5);
        z-index: 99999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0 20px;
}
.search-popup .layer{
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
        position: relative;
        padding: 40px 60px 30px;
        flex: 100%;
        max-width: 1024px;
}
.search-popup .cls{
        width: 16px;
        height: 16px;
        background-image: url('${Close}');
        position: absolute;
        right: 28px;
        top: 28px;
        opacity: .6;
}
.search-popup .form{
        text-align: center;
        margin-bottom: 50px;
}
.search-popup .result h2,
.search-popup .form h2{
        color: #5e7460;
        font-weight: 700;
        font-size: 32px;
        line-height: 130%;
        margin-bottom: 20px;
}
.search-popup .form form{
        max-width: 560px;
        width: 100%;
        margin: 0 auto;
        position: relative;
}
.search-popup .form form input{
        display: block;
        width: 100%;
        height: 50px;
        border-radius: 25px;
        border: 1px solid #b7b8b1;
        background: #fff;
        padding: 0 115px 0 25px;
        color: #848484;
        font-size: 16px;
        font-family: 'Karla';
}
.search-popup .form form button{
        display: block;
        position: absolute;
        right:0;
        top:0;
        width: 94px;
        height: 50px;
        background-color: none;
        border: none;
        border-radius: 0 25px 25px 0;
        background-image: url('${SearchBG}');
        cursor: pointer;
}
.search-popup .result h2{
        font-size: 24px;
}
.search-popup .result .item{
        margin-bottom: 12px;
}
.search-popup .result .item figure{
        max-width: 23%;
        flex: 23%;
}
.search-popup .result .item .caption{
        max-width: 73%;
        flex: 73%;
}
.search-popup .result .item h3{
        font-size: 14px;
}
.search-popup .result .item .cats a{
        font-size: 10px;
}
.search-popup .result .item .tags{
        margin: 5px 0 0;
}
.search-popup .result .item .tags a{
        font-size: 9px;
}
.inner-search{
        padding: 50px 0 120px;
}
.inner-search .search-popup{
        position: relative;
        z-index: 1;
        width: auto;
        height: auto;
        left: auto;
        top: auto;
        background: none;
        padding: 0;
}
.inner-search .search-popup .layer{
        background: none;
        max-width: 100%;
        border-radius: 0;
        padding: 0;
        box-shadow: 0 0 0 0 rgba(0,0,0,0);
}
.inner-search .rcs-custom-scroll {
        height: auto !important;
}
.inner-search .rcs-custom-scroll .rcs-outer-container{
        overflow: visible;
}
.inner-search .search-popup .result .rowflex{
        margin: 0;
}
.inner-search .search-popup .result .rowflex .item{
        flex: 100%;
        max-width: 100%;
        margin: 0 0 15px;               
}
.inner-search .search-popup .form h2{
        font-size: 24px;
}
.inner-search .search-popup .form form input{
        height: 40px;
        border-radius: 20px;
        padding-right: 90px;
}
.inner-search .search-popup .form form button{
        width: 75px;
        height: 40px;
}
.inner-search .search-popup .result .item figure{
        max-width: 30%;
        flex: 30%;
}
.inner-search .search-popup .result .item  .caption{
        max-width: 65%;
        flex: 65%;
}
.inner-search .search-popup .result h2 {
        font-size: 20px;
}
.inner-blog .main .info .format-text > *,
.inner-product .copy .format-text > *,
.inner-kamus .info .format-text > *{
        display: inline;
}
/* MEDIA QUERY FOR WEBKIT BASED BROWSER **/
@media screen and (-webkit-min-device-pixel-ratio:0) {

}

/* MEDIA QUERY FOR GECKO BASED BROWSER **/
@-moz-document url-prefix(){
        
}

`
export default Style;