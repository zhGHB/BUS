/**
 * Created by luojie on 2018/1/15.
 */
import "../style/components/breadMenu.scss";

export default class Menu extends React.PureComponent{
	constructor(props){
		super(props);
	}
	static defaultProps = {
		menu:[
			{path:"portal",key:"首页"},
			{path:"searchList",key:"车票搜索结果"},

		]
	}
	render(){
		let {menu} = this.props;
		return(
			<div className="bread-menu visible-lg visible-md">
				<div className="container">
					<div className="bread-menu-wrapper">
						{
							menu.map((item,index)=>{
								if(index === menu.length - 1){
									return null;
								}
								return(
									<div className="flex" key = {index}>
										<a href={`/${item.path}`}>{item.key}</a>
										<span className="bread-menu-cut-line">/</span>
									</div>
								)
							})
						}
						<span>{menu[menu.length-1].key}</span>
					</div>
				</div>
			</div>
		)
	}
}