/**
 * Created by luojie on 2018/1/8.
 */
import "../style/components/banner.scss"
const banner1 = require("../images/demo/banner1.jpg");
const banner2 = require("../images/demo/banner2.jpg");
const banner3 = require("../images/demo/banner3.jpg");
import Api from "../util/api";
export default class Banner extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			bannerList:[

			]
		}
	}
	componentDidMount(){
		this.getBannerList();

	}
	getBannerList(){
		ajax(Api.getBannerList,{ "category": "Advert"},"post").then((result)=>{
			if(result.status == 1){
				this.setState({bannerList:result.data.items},()=>{
					const mySwiper = new Swiper ('#homeBanner', {
						loop: true,
						autoplay:5000,//自动播放时间
						// 如果需要分页器
						pagination: '.swiper-pagination',
						// 如果需要前进后退按钮
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
					})
				});
			}
		});
	}
	render(){
		let {bannerList} = this.state;
		return(
			<div className="home-banner">
				<div className="swiper-container " id = "homeBanner">
					<div className="swiper-wrapper">
						{
							bannerList.map((item,index)=>{
								return(
									<div key = {`home-banner-${index}`} className="swiper-slide ">
										<img src={item.imagePath} className="swiper-img" alt=""/>
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
		)
	}
}