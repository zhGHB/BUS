/**
 * Created by luojie on 2018/1/30.
 */
import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import UserCenterMenu from "../../components/user/userCenterMenu";
import "../../style/user/personalInfo.scss";
import Button from "../../components/button";
import Input from "../../components/ui/input";
import AreaSelect from "../../components/ui/areaSelect";
import Radio from "../../components/ui/radio";
import { FormattedMessage } from 'react-intl';

const defaultUserLogo = require("../../images/demo/demo1.jpg");

export default class Edit extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			sex:1
		}
		this.breadMenu = [
			{path:"portal",key:"首页"},
			{path:"personalInfo",key:"个人信息"},
		]
	}
	onChangeSex(sex){
		this.setState({
			sex
		})
	}
	render(){
		let {sex} = this.state;
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu}/>
				<div className="container">
					<div className="edit-personal-info">
						<UserCenterMenu active = "personalInfo"/>
						<div className="edit-personal-info-wrapper">
							<div className="edit-personal-info-title">
								<FormattedMessage
									id={"edit-personal-info-title"}
								/>

							</div>
							<div className="edit-personal-info-fill">
								<div className="edit-personal-info-cell">
									<div className="edit-personal-info-row">
										<label htmlFor="">
											<FormattedMessage
												id={"edit-personal-info-userName"}
											/>
										</label>
										<Input size = "larger" className = "flex1"/>
									</div>
									<div className="edit-personal-info-row">
										<label htmlFor="">
											<FormattedMessage
												id={"edit-personal-info-userSex"}
											/>
										</label>
										<div className="m-r-40">
											<Radio
												onChange = {this.onChangeSex.bind(this,1)}
												checked = {sex === 1?true:false}
												value = "edit-personal-info-userSex-man"

											/>
										</div>
										<Radio
											onChange = {this.onChangeSex.bind(this,2)}
											checked = {sex === 2?true:false}
											value = "edit-personal-info-userSex-woman"
										/>
									</div>
									<div className="edit-personal-info-row">
										<label htmlFor="">
											<FormattedMessage
												id={"edit-personal-info-phoneNum"}
											/>
										</label>
										<AreaSelect/>
									</div>
									<div className="edit-personal-info-row">
										<label htmlFor="">
											<FormattedMessage
												id={"edit-personal-info-email"}
											/>
										</label>
										<Input size = "larger" className = "flex1"/>
									</div>
									<div className="edit-personal-info-row">
										<label htmlFor="">
											<FormattedMessage
												id={"edit-personal-info-papers"}
											/>
										</label>
										<Input size = "larger" className = "flex1"/>
									</div>

								</div>
								<div className="edit-personal-info-cell">
									<img src={defaultUserLogo} className="edit-user-logo" alt=""/>
									<div><Button type = "white" className = "edit-btn">

										<FormattedMessage
											id={"edit-personal-info-img"}
										/>
									</Button></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}