import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/help/helpGuide.scss";
import HelpMenu from "./helpMenu";

const img1=require("../../images/help/htlp-guide-1.png");
const img2=require("../../images/help/htlp-guide-2.png");
const img3=require("../../images/help/htlp-guide-3.png");
const img4=require("../../images/help/htlp-guide-4.png");
const img5=require("../../images/help/htlp-guide-5.png");

export default class RefundSuccess extends React.PureComponent{
    constructor(props){
        super(props);
        let {getMessage} = props.lan;
        this.state = {
            imgList:[
                {src:img1,alt:"img1"},
                {src:img2,alt:"img2"},
                {src:img3,alt:"img3"},
                {src:img4,alt:"img4"},
                {src:img5,alt:"img5"},
            ],
        };
        this.breadMenu = [
            {path:"portal",key:getMessage("layout.nav.tab.index")},
            {path:"login",key:getMessage("login")},
        ];
    }
    componentDidMount(){
        let {imgList}=this.state;
        const mySwiper = new Swiper ('#helpSwiper', {
            loop: false,
            // autoplay:5000,//自动播放时间
            // 如果需要分页器
            pagination:'.swiper-pagination',
            paginationType:'custom',
            clickable:true,
            paginationCustomRender: function (swiper, current, total) {
                let _html = '';
                for (let i = 1; i <= total; i++) {
                    if (current === i) {
                        _html += '<div class="swiper-pagination-customs swiper-pagination-customs-active">' + i + '</div>';
                    }else{
                        _html += '<div class="swiper-pagination-customs">' + i  + '</div>';
                    }
                }
                return _html;
            },

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
        $('.swiper-pagination').on('click','div',function(){
            let index = this.innerHTML;
            mySwiper.slideTo(index-1, 500, false);//切换到第一个slide，速度为1秒
        })

    }
    
    render(){
        let {imgList}=this.state;
        return(
            <Layout {...this.props}>
                <BreadMenu menu = {this.breadMenu} />
                <div className="container">
                    <div className="help-guide-box">
                        <HelpMenu active="helpGuide"/>
                        <div className="helpSwiper">
                            <div className="swiper-container " id = "helpSwiper">
                                <div className="swiper-wrapper">
                                    {
                                        imgList.map((item,index)=>{
                                            return(
                                                <div key = {`home-banner-${index}`} className="swiper-slide ">
                                                    <img src={item.src} className="swiper-img" alt=""/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}