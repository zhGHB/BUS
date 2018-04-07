/**
 * Created by luojie on 2018/2/24.
 * 座位图1
 */

import "../../style/order/site.scss";

const driverIcon = require("../../images/order/driver.png");

export default class Site extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			siteList:[
				{key:"1A",value:"1A",checked:1},
				{key:"2A",value:"2A",checked:1},
				{key:"3A",value:"3A",checked:1},
				{key:"4A",value:"4A",checked:1},
				{key:"5A",value:"",checked:1},
				{key:"6A",value:"",checked:1},
				{key:"7A",value:"7A",checked:1},
				{key:"8A",value:"8A",checked:1},
				{key:"9A",value:"9A",checked:1},
				{key:"10A",value:"10A",checked:1},
				{key:"11A",value:"11A",checked:1},
				{key:"1B",value:"1B",checked:1},
				{key:"2B",value:"2B",checked:1},
				{key:"3B",value:"3B",checked:1},
				{key:"4B",value:"4B",checked:1},
				{key:"5B",value:"",checked:1},
				{key:"6B",value:"",checked:1},
				{key:"7B",value:"7B",checked:1},
				{key:"8B",value:"8B",checked:2},
				{key:"9B",value:"9B",checked:1},
				{key:"10B",value:"",checked:1},
				{key:"11B",value:"",checked:2},
				{key:"1C",value:"1C",checked:1},
				{key:"2C",value:"2C",checked:2},
				{key:"3C",value:"3C",checked:1},
				{key:"4C",value:"4C",checked:1},
				{key:"5C",value:"5C",checked:2},
				{key:"6C",value:"6C",checked:1},
				{key:"7C",value:"7C",checked:1},
				{key:"8C",value:"8C",checked:1},
				{key:"9C",value:"9C",checked:3},
				{key:"10C",value:"10C",checked:1},
				{key:"11C",value:"11C",checked:1},
				{key:"1D",value:"1D",checked:1},
				{key:"2D",value:"2D",checked:3},
				{key:"3D",value:"3D",checked:3},
				{key:"4D",value:"4D",checked:1},
				{key:"5D",value:"5D",checked:3},
				{key:"6D",value:"6D",checked:1},
				{key:"7D",value:"7D",checked:1},
				{key:"8D",value:"8D",checked:1},
				{key:"9D",value:"9D",checked:1},
				{key:"10D",value:"10D",checked:1},
				{key:"11D",value:"11D",checked:1},
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
								if(index>8){
									return null
								}
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
				<div className="top-site-container m-t-25 m-b-20">
					<div className="top-site-title">下层</div>
					<div className="top-site-content">
						{
							siteList.map((item,index)=>{
								if(index <= 8){
									return null
								}
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