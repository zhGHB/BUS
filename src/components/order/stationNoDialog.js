/**
 * Created by luojie on 2018/2/9.
 */
import Dialog from "../ui/dialog";
const demoImg = require("../../images/demo/demo1.jpg");
export default class StationNoDialog extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			stationList:[
				{station:"成都南站",time:"08:30"},
				{station:"西门车韩",time:"08:30"},
				{station:"火车北站",time:"08:30"},
				{station:"火车北站",time:"08:30"},
			]
		}
	}
	show(){
		this.dialog.show()
	}
	render(){
		let {stationList} = this.state;
		return(
			<Dialog
				title = "车次时间表与车型"
				ref = {(r)=>{this.dialog = r}}>
				<div className="dialog-train-num">
					<div className="dialog-train-num-station-wrapper">
						<div className="train-num m-r-20">
							B40231
						</div>
						<div className="train-station">
							<div>
								<span className="color-999 m-r-10">始</span>
								<span className="font-20 bold">成都，火车北站</span>
								<span className="color-999">（01/02/2018 08 : 15 am)</span>
							</div>
							<div>
								<span className="color-999 m-r-10">终</span>
								<span className="font-20 bold">上海，火车北站</span>
								<span className="color-999">（01/03/2018 08 : 15 am)</span>
							</div>
						</div>
					</div>
					<div className="dialog-train-num-station-list">
						<div className="dialog-train-num-station-list-title">
							<div>车站名称</div>
							<div>预计时间</div>
						</div>
						{
							stationList.map((item,index)=>{
								let stationStyle = "train-line";
								let circleStyle = "train-circle";
								if(index === 0 ){

								}else if(index === stationList.length-1){
									stationStyle = "train-line bottom-line";
									circleStyle = "train-circle bottom-circle";
								}else{
									stationStyle = "train-line middle-line";
									circleStyle = "train-circle middle-circle";
								}
								return(
									<div className="station-list" key = {index}>
										<div className="station-name">{item.station}</div>
										<div className="station-time">
											<span>{item.time}</span>
											<div className={stationStyle}>
												<div className={circleStyle}/>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					<div className="station-tips">
						全程预计耗时 01h 30m* ，出发车站详细地址：详细到某某某街道
					</div>
					<div className="dialog-site-img-wrapper">
						<div className="dialog-site-label">车型</div>
						<img src={demoImg} alt=""/>
						<div className="m-t-10">座位平面图展示</div>
					</div>
				</div>
			</Dialog>
		)
	}
}
