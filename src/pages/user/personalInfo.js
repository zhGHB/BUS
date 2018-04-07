/**
 * Created by luojie on 2018/1/29.
 */
import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import UserCenterMenu from "../../components/user/userCenterMenu";
import "../../style/user/personalInfo.scss";
import Button from "../../components/button";
import { FormattedMessage } from 'react-intl';

const defaultUserLogo = require("../../images/demo/demo1.jpg");

export default class Info extends React.PureComponent{
	constructor(props){
		super(props);

		this.breadMenu = [
			{path:"portal",key:"首页"},
			{path:"personalInfo",key:"个人信息"},
		]
	}
	render(){
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu}/>
				<div className="container">
					<div className="personal-info">
						<UserCenterMenu active = "personalInfo"/>
						<div className="personal-info-wrapper">
							<img src={defaultUserLogo} className="user-logo" alt=""/>
							<div className="flex1">
								<div className="personal-info-edit-row">
									<div className="font-20">Hello</div>
									<Button type = "white">
										<FormattedMessage
											id={"personal-info-edit-btn"}
										/>
									</Button>
								</div>
								<div>
									<div className="info-row">
										<span className="color-333">
											<FormattedMessage
												id={"personal-info-phone-num"}
											/>

										</span>
										<span className="color-999">183132131232</span>
									</div>
									<div className="info-row">
										<span className="color-333">
											<FormattedMessage
												id={"personal-info-email"}
											/>
										</span>
										<span className="color-999">123@qq.com</span>
									</div>
									<div className="info-row">
										<span className="color-333">
											<FormattedMessage
												id={"personal-info-papers"}
											/>
										</span>
										<span className="color-999">131241</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}