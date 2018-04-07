/**
 * Created by luojie on 2018/2/24.
 * 座位图3
 */

import "../../style/order/site.scss";

const driverIcon = require("../../images/order/driver.png");

export default class Site extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			siteList:[
				{key:"1A",value:"1",checked:1},
				{key:"2A",value:"5",checked:1},
				{key:"3A",value:"9",checked:1},
				{key:"4A",value:"13",checked:1},
				{key:"5A",value:"17",checked:1},
				{key:"6A",value:"exit",checked:1},
				{key:"7A",value:"",checked:1},
				{key:"8A",value:"25",checked:1},
				{key:"9A",value:"29",checked:1},
				{key:"10A",value:"33",checked:1},
				{key:"1B",value:"2",checked:1},
				{key:"2B",value:"6",checked:1},
				{key:"3B",value:"10",checked:1},
				{key:"4B",value:"14",checked:1},
				{key:"5B",value:"18",checked:1},
				{key:"6B",value:"",checked:1},
				{key:"7B",value:"",checked:1},
				{key:"8B",value:"26",checked:2},
				{key:"9B",value:"30",checked:1},
				{key:"10B",value:"34",checked:1},
				{key:"1C",value:"3",checked:1},
				{key:"2C",value:"7",checked:2},
				{key:"3C",value:"11",checked:1},
				{key:"4C",value:"15",checked:1},
				{key:"5C",value:"19",checked:2},
				{key:"6C",value:"21",checked:1},
				{key:"7C",value:"23",checked:1},
				{key:"8C",value:"27",checked:1},
				{key:"9C",value:"",checked:3},
				{key:"10C",value:"35",checked:1},
				{key:"1D",value:"4",checked:1},
				{key:"2D",value:"8",checked:3},
				{key:"3D",value:"12",checked:3},
				{key:"4D",value:"16",checked:1},
				{key:"5D",value:"20",checked:3},
				{key:"6D",value:"22",checked:1},
				{key:"7D",value:"24",checked:1},
				{key:"8D",value:"28",checked:1},
				{key:"9D",value:"",checked:1},
				{key:"10D",value:"36",checked:1},
			]
		}
	}
	componentDidMount(){
		let {siteList} = this.state;
		siteList.sort((a,b)=>{
			return(parseInt(a.key)-parseInt(b.key));
		});
		let list = formatArr(siteList,4);
		list.map((item)=>{
			item.sort((a,b)=>{
				if(a.key>b.key){
					return 1
				}else if(a.key<b.key){
					return -1;
				}else{
					return 0;
				}
			})
		});
		this.setState({
			siteList:list
		})
	}
	selectSite(index,iIndex){
		console.log(iIndex,index)
		let {siteList} = this.state;
		let checked = siteList[index][iIndex].checked;
		if(checked === 3){
			return;
		}else{
			siteList[index][iIndex].checked = checked === 1?2:1;
		}
		this.setState({
			siteList:[].concat(siteList)
		})
	}
	getButton(item,index,iIndex){
		let value = item[iIndex].value;
		if(value){
			if(value === "exit"){
				return(
					<div className="place-holder-site">
						{value}
					</div>
				)
			}else{
				return(
					<button onClick={this.selectSite.bind(this,index,iIndex)}
							className={item[iIndex].checked === 1?"":(item[iIndex].checked === 2?"site-active":"site-disabled")}>
						{item[iIndex].value}
					</button>
				)
			}
		}else{
			return(
				<div className="place-holder-site"/>
			)
		}
	}
	render(){
		let {siteList} = this.state;
		console.log(siteList)
		return(
			<div className="site-container">
				<div className="top-site-container">
					<div className="top-site-title">上层</div>
					<div className="flex">
						<div className="flex1"/>
						<div className="driver-site">
							<img src={driverIcon} alt=""/>
						</div>
					</div>
					<div className="top-site-content">
						{
							siteList.map((item,index)=>{
								return(
									<div className="flex" key = {index}>
										<div className="flex">
											{
												item.length>0 &&
												<div>
													{
														this.getButton(item,index,0)
													}
												</div>
											}
											{
												item.length>0 &&
												<div>
													{
														this.getButton(item,index,1)
													}
												</div>
											}
										</div>
										<div className="flex1"/>
										<div className="flex">
											{
												item.length>0 &&
												<div>
													{
														this.getButton(item,index,2)
													}
												</div>
											}
											{
												item.length>0 &&
												<div>
													{
														this.getButton(item,index,3)
													}
												</div>
											}
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}