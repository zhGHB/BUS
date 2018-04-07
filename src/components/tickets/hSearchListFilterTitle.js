import "../../style/tickets/hList.scss";
import { FormattedMessage } from 'react-intl';
import SearchSort from "../../components/tickets/hSearchSort";
import SearchBox from "../../components/portal/searchBox";
import SearchScreen from "../../components/tickets/hSearchScreen";


const iconSelected = require("../../images/tickets/drop.png");
const iconDefault = require("../../images/tickets/drop-more.png");
export default class List extends React.PureComponent{
	constructor(props){
		super(props);
		this.state={
            displayType:true,
            selected:"",
			height:100,
			searchList:[
				{txtId:"h.search.list.filter.search.btn",value:"搜索"},
				{txtId:"h.search.list.filter.filter.btn",value:"筛选"},
				{txtId:"h.search.list.filter.sort.btn",value:"排序"},
			],
            tabType:""
		}
	}

	componentDidMount(){
        let height=$(window).height();
        this.setState({
            height:height
        });
	}

    searchClick(index){
		let {selected}=this.state;
		if(selected===index){
            this.setState({
                selected:"",
                displayType:true,
            },()=>{
				// $(".h-list-item-show").slideToggle("slow");
			})
		}else {
            this.setState({
                selected:index,
                displayType:false,
                tabType:index,
            },()=>{
                // $(".h-list-item-show").slideToggle("slow");
			})
		}
    }

    bgClick(){
    	let {selected}=this.state;
    	this.setState({
            selected:"",
            displayType:true
		},()=>{
            // $(".h-list-item-show").slideToggle("slow");
        })
	}

	render(){
		let {selected,searchList,displayType,height,tabType}=this.state;
		return(
			<div className="visible-xs visible-sm h-list-filter-container">
				<div className="h-list-filter-item">
					<div className="h-list-filter-item-wrapper">
						{
                            searchList.map((item,index)=>{
                            	return(
									<div
										className={selected!==index?"h-list-filter-item-search search-default":"h-list-filter-item-search search-selected"}
										onClick={this.searchClick.bind(this,index)}
										key={index}
									>
										<FormattedMessage
											id={item.txtId}
										/>
										<img
											src={selected!==index?iconDefault:iconSelected}
											className="h-list-filter-item-search-img-def"
										/>
									</div>
									)
							})
						}

					</div>
				</div>
				<div
					className="h-list-item-container"
					style={displayType?{opacity:0,height:height,zIndex:-1}:{opacity:1,height:height,zIndex:2}}
				>
					<div className="h-list-item-show" style={{background:"#fff"}}>
						<div style={{maxHeight:height-120,overflow:"auto",background:'#fff',paddingBottom:5}}>
							{
								tabType===0&&<SearchBox/>
								||
								tabType===1&&<SearchScreen/>
								||
								tabType===2&&<SearchSort/>

							}
						</div>
					</div>
					<div className="h-list-item-container-bg" onClick={this.bgClick.bind(this)}>
					</div>
				</div>
			</div>
		)
	}
}