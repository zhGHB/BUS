/**
 * Created by luojie on 2017/11/14.
 */

import "../style/components/select.scss";
export default class Select extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			showMore:false,
			height:0,
			defaultValue:props.defaultValue,
			data:props.data,
			overflow:"hidden"
		};
		this.show = this.show.bind(this);
		this.select = this.select.bind(this);
		this.ul = null;
	}
	static defaultProps = {
		defaultValue:{key:"请选择",value:0},
		data:[]
	};
	componentWillReceiveProps(nextProps){
		this.setState({
			defaultValue:nextProps.defaultValue,
			data:nextProps.data,
		})
	}
	componentDidMount(){
		let _this = this;
		// $(document).add("click",(e)=>{
		// 	let node = $('.ys-select-ul');   // 设置目标区域
		// 	if(!node.is(e.target) && node.has(e.target).length === 0){ // Mark 1
		// 		console.log(2222)
		// 		if(_this.state.showMore){
		// 			_this.setState({
		// 				showMore:false,
		// 			})
		// 		}
		//
		// 	}
		// })

		$(document).on("click",(e)=>{
			var _con = $(".ys-select-wrapper");   // 设置目标区域
			if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
				if(_this.state.showMore){
					_this.setState({
						showMore:false,
					})
				}
			}
		})
	}
	show(){
		let {disabled} = this.props;
		if(disabled){
			return;
		}
		let {showMore} = this.state;
		let height = ReactDOM.findDOMNode(this.ul).scrollHeight;
		this.setState({
			showMore:!showMore,
			height,
			overflow:height>100?"auto":"hidden"
		})
	}
	select(item){
		let {onChange} = this.props;
		this.setState({
			defaultValue:item,
		},()=>{
			onChange && onChange(item);
		})
	}

	render(){
		let {showMore,height,defaultValue,data,overflow} = this.state;
		let {disabled,className} = this.props;
		return(
			<div disabled={disabled} className={showMore?"ys-select-wrapper active " + className:"ys-select-wrapper "+className}
				 onClick = {this.show}>
				<div className="ys-select-value">{defaultValue.key}</div>
				<div className="over-scroll">
					<ul
						className="ys-select-ul" ref = {(c)=>{this.ul = c}}
						style = {{height:showMore?height:0,borderWidth:showMore?1:0,overflow}}>
						{
							data.length>0 && data.map((item,index)=>{
								return(
									<li
										key = {`select-${index}`}
										onClick = {this.select.bind(this,item)}
										className="ys-select-li">
										<div className="ys-select-li-option">
											{item.key}
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>

			</div>
		)
	}
}