/**
 * Created by luojie on 2018/1/15.
 */
import "../../style/tickets/searchList.scss";
import Layout from "../../components/layout";
import SearchListNav from "../../components/tickets/searchListNav";
import BreadMenu from "../../components/breadMenu";
import Select from "../../components/select";
import SearchListDateNav from "../../components/tickets/searchListDateNav";
import SearchListFilterTitle from "../../components/tickets/searchListFilterTitle";
import SearchList from "../../components/tickets/list";
import HSearchList from "../../components/tickets/hList";
import FilterComp from "../../components/tickets/filter"

import HSearchListFilterTitle from "../../components/tickets/hSearchListFilterTitle";
import HSearchListDateNav from "../../components/tickets/hSearchListDateNav";

import Api from "../../util/api";

export default class List extends React.PureComponent{
	constructor(props){
		super(props);
		let {getMessage} = props.lan;
		let query = props.location.query || {};
		console.log(query)
		this.state = {
			defaultSelected:{
				key:"筛选",
				value:"0"
			},
			selectData:[
				{key:"筛选1",value:1},
				{key:"筛选2",value:1},
				{key:"筛选2",value:1},
			],
			request:{
				departure:query.start || "",
				destination:query.arrive || "",
				lineTime:query.time || "",
			}
		};
		this.breadMenu = [
			{path:"portal",key:getMessage("layout.nav.tab.index")},
			{path:"searchList",key:getMessage("layout.nav.tab.busTicket")},
		]
	}
	componentDidMount(){
		// console.log(this.state.request)
		let {request} = this.state;
		console.log(request)
		ajax(Api.searchLine,request,"post").then((result)=>{
			console.log(result)
		})
	}
	render(){
		let {selectData,defaultSelected} = this.state;
		return(
			<Layout {...this.props}>
				<SearchListNav {...this.props}/>
				<BreadMenu menu = {this.breadMenu} />
				<HSearchListFilterTitle/>

				<div className="container search-list ">
					<div className=" visible-lg visible-md">
						<FilterComp/>
					</div>
					<div className="visible-lg visible-md">
						<div className="search-list-return-wrapper ">
							<div className="search-list-return-btn active">
								<div>去程</div>
								<div className="font-18">曼谷——清迈</div>
								<div>共23个车次</div>
							</div>
							<div className="search-list-line"/>
							<div className="search-list-return-btn">
								<div>去程</div>
								<div className="font-18">曼谷——清迈</div>
								<div>共23个车次</div>
							</div>
						</div>
					</div>
					<div className="visible-xs visible-sm">
						<div className="search-list-return-wrapper ">
							<div className="search-list-return-h-btn active">
								<div className="font-12">去程</div>
								<div className="font-18">曼谷——清迈</div>
								<div className="font-12">共12个车次</div>

							</div>
						</div>
					</div>
					<HSearchListDateNav {...this.props}/>
					<SearchListDateNav {...this.props}/>
					<SearchListFilterTitle {...this.props}/>
					<SearchList {...this.props}/>
					<HSearchList {...this.props}/>
				</div>
			</Layout>
		)
	}
}