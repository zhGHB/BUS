/**
 * Created by luojie on 2018/1/23.
 */
import "../../style/components/dialog.scss";

const closeIcon = require("../../images/user/close.png");
export default class Dialog extends React.PureComponent{
	constructor(props){
		super(props);
		this.close = this.close.bind(this);
	}
	show(){
		this.dialog =layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			skin: 'comp-dialog',
			shadeClose: true,
			content: $("#compDialog"),
			end:function(){
				$("#compDialog").hide();
			}
		});
	}
	close(){
		layer.close(this.dialog)
	}
	render(){
		return(
			<div id = "compDialog" style={{display:"none"}}>
				<div className="comp-dialog-title-wrapper">
					<div>{this.props.title}</div>
					<button onClick = {this.close}>
						<img src={closeIcon} alt=""/>
					</button>
				</div>
				{
					this.props.children
				}
			</div>
		)
	}
}