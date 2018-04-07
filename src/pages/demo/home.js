/**
 * Created by luojie on 2017/12/26.
 */
// import React from "react";
// import {Link} from 'react-router-dom';
import Pubsub from "../../util/pubsub";
import { FormattedMessage } from 'react-intl';
import "../../style/App.scss";


import {
	Modal
} from "../../components";
export default class Home extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			show:false,
		};
		this.showModal = this.showModal.bind(this);
	}
	jump(type){
		// this.props.history.push("index");
		Pubsub.publish("updateLanguage",{type});
	}
	componentDidMount(){
		ajax({
			url:"/api/Carousels/GetCarousels",
			type:"get"
		}).then((result)=>{
			console.log(result)
		});
		console.log(<FormattedMessage
			id="edit"
			defaultMessage="你好"
		/>)
	}
	showModal(){
		let {show} = this.state;
		this.setState({
			show:!show
		})
	}
	render(){
		let {show} = this.state;
		return(
			<div>
				<div>
					<a onClick = {this.jump.bind(this,"zh")}>切换中文</a>
				</div>
				<div>
					<a onClick = {this.jump.bind(this,"en")}>切换英文</a>
				</div>
				<div>
					<a onClick = {this.showModal}>showModal</a>
				</div>
				<FormattedMessage
					id="edit"
					defaultMessage="你好"
				/>
				<div className="pink">
					<FormattedMessage
						id="delete"
						defaultMessage="删除"
					/>
				</div>
				<Modal open = {show}>
					<div>2222</div>
				</Modal>
			</div>
		)

	}
}