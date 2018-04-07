/**
 * Created by luojie on 2018/1/9.
 */
const banner1 = require("../../images/demo/banner1.jpg");
const banner2 = require("../../images/demo/banner2.jpg");
const banner3 = require("../../images/demo/banner3.jpg");
export default class Banner extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			bannerList:[
				{url:banner1},
				{url:banner2},
				{url:banner3},
			]
		}
	}
	componentDidMount(){
		const mySwiper = new Swiper ('#midBanner', {
			loop: true,
			// 如果需要分页器
			autoplay:5000,//自动播放时间
			pagination: '.swiper-pagination',
		})
	}
	render(){
		let {bannerList} = this.state;
		return(
			<div className="home-banner">
				<div className="swiper-container" id = "midBanner">
					<div className="swiper-wrapper">
						{
							bannerList.map((item,index)=>{
								return(
									<div key = {`home-banner-${index}`} className="swiper-slide ">
										<img src={item.url} className="swiper-img" alt=""/>
									</div>
								)
							})
						}
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
}