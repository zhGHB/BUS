/**
 * Created by luojie on 2018/1/22.
 */

import UserNav from "../../components/tickets/hUserCenterNav";
import UserTtile from "../../components/tickets/hSearchListFilterTitle";
import UserTtile1 from "../../components/tickets/hSearchSort";
import DefaultPage from "../../components/defaultPage/ticketOrder";
import SelectBackSeat from "../../components/order/selectBackSeat";
import SelectSiteDialog from "../../components/order/selectSiteDialog";
import DatePicker from "../../components/ui/datePicker";


export default class Demo extends React.PureComponent{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.backupArr = []
		this.state = {
			selectData:[
				{value:"A",id:1,options:[{value:"A"}]},
				{value:"B",id:2,options:[{value:"B"}]},
				{value:"C",id:3,options:[{value:"C"}]},
				{value:"D",id:4,options:[{value:"D"}]},
			],
			siteList:[]

		};
        this.selectbackDialog=null;
        this.selectSiteDialog = null;
	}
	componentDidMount(){
		let arr = [{value:"22"},{value:33},{value:44}];
		// console.log(this.C(arr,2))
	}

	onChange(obj,e){
		let arr = [{id:1}]
		let index  = arr.find((item)=>{
			return item.id === 2;
		});
		console.log(e.target.value);
		this.backupArr.push({value:e.target.value,});
		let newArr = this.C(this.backupArr,2);
		// console.log(newArr)
		this.setState({
			siteList:[].concat(newArr)
		})
	}
	C(arr, num){
		var r=[];
		(function f(t,a,n){
			if (n==0)
			{
				return r.push(t);
			}
			for (var i=0,l=a.length; i<=l-n; i++)
			{
				f({key:t.value,value:a[i].value}, a.slice(i+1), n-1);
			}
		})({},arr,num);
		return r;
	}

    showSelectSiteDialog(){
        this.selectSiteDialog.show();
    }

    openModal(){
        this.selectbackDialog.show();
	}
	render(){
		let {selectData,siteList} = this.state;
		return(
			<div >
				{/*{*/}
					{/*selectData.map((item,index)=>{*/}
						{/*return(*/}
							{/*<div key = {index}>*/}
								{/*<select onChange={this.onChange.bind(this,item)} name="" id="">*/}
									{/*<option value="0">{"请选择"}</option>*/}
									{/*{*/}
										{/*item.options.map((sItem,sIndex)=>{*/}
											{/*return(*/}
												{/*<option value={sItem.value} key = {sIndex}>{sItem.value}</option>*/}
											{/*)*/}
										{/*})*/}
									{/*}*/}
								{/*</select>*/}
							{/*</div>*/}
						{/*)*/}
					{/*})*/}
				{/*}*/}
				{/*<div>*/}
					{/*{*/}
						{/*siteList.map((item,index)=>{*/}
							{/*console.log(item,"item")*/}
							{/*return(*/}
								{/*<div key = {index}>*/}
									{/*<div>{item.key}------{item.value}</div>*/}
								{/*</div>*/}
							{/*)*/}
						{/*})*/}
					{/*}*/}
				{/*</div>*/}

				<div style={{display:"flex",flexDirection:'column',flex:1}}>
					<div style={{height:68,background:"red",marginBottom:5}}>

					</div>
					{/*<UserNav*/}
						{/*selected="个人信息"*/}
						{/*active="personalInfo"*/}
						{/*{...this.props}*/}
					{/*/>*/}

					<UserTtile
                        {...this.props}
					/>
					{/*<UserTtile1 {...this.props}/>*/}
					<div style={{flex:1}}>
						{/*<DefaultPage/>*/}
						<button onClick={this.openModal.bind(this)}>sssss</button>
						<div>8888</div>
						<button onClick={this.showSelectSiteDialog.bind(this)}>ssssdddd</button>
					</div>


				</div>

				<SelectBackSeat
					ref = {(r)=>{this.selectbackDialog = r}}
				/>
				<SelectSiteDialog ref = {(r)=>{this.selectSiteDialog = r}}/>

				<div style={{display:"flex",justifyContent:"center"}}>
					<DatePicker/>
				</div>
			</div>
		)
	}
}