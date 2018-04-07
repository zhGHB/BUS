/**
 * Created by luojie on 2018/2/3.
 */
import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/portal/busDynamic.scss";
import GoogeMap from "../../components/portal/googleMap";
const busIcon = require("../../images/user/car.png");

export default class Bus extends React.PureComponent{
	constructor(props){
		super(props);
		this.breadMenu = [
			{path:"portal",key:"个人中心"},
			{path:"myTickets",key:"我的车票"},
		];
	}
	componentDidMount(){
		var directionsDisplay;
		var directionsService = new google.maps.DirectionsService();
		console.log(directionsService)
		var map;
	}
	render(){
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu}/>
				<div className="container">
					<div className="bus-dynamic-detail">
						<div className="bus-dynamic-detail-info">
							<div className="font-16 ">
								车次：
								<span className="bold m-r-20">D434</span>
								<span className="font-16"> 2018-02-12（周一）</span>
							</div>
							<div className="bus-dynamic-detail-station-row">
								<div className="font-16">
									成都（火车北站）
								</div>
								<div>
									<div className="flex-item-center relative">
										<div className="bus-dynamic-detail-info-circle"/>
										<div className="bus-dynamic-detail-info-line">
											<div className="inner-line"></div>
											<img className="bus-icon" src={busIcon} alt=""/>
										</div>
										<div className="bus-dynamic-detail-info-circle"/>
									</div>
									<div className="bus-dynamic-detail-driver-info">
										<div>已经行驶</div>
										<div>剩余</div>
									</div>
									<div className="bus-dynamic-detail-driver-info">
										<div>1h30min</div>
										<div>40min</div>
									</div>
									<div className="bus-dynamic-detail-driver-info">
										<div>36km</div>
										<div>100km</div>
									</div>
								</div>
								<div className="font-16">
									上海（火车北站）
								</div>
							</div>
						</div>
						<GoogeMap/>
					</div>
				</div>
			</Layout>
		)
	}
}