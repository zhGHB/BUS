/**
 * Created by luojie on 2018/2/3.
 * 首页-客车动态
 */

import Layout from "../../components/layout";
import "../../style/portal/busDynamic.scss";
import Input from "../../components/ui/input";
import Button from "../../components/button";
import { FormattedMessage } from 'react-intl';
import DatePicker from "../../components/ui/datePicker";
import moment from "moment";
const bgImg = require("../../images/demo/demo1.jpg");
export default class Dynamic extends React.PureComponent{
	constructor(props){
		super(props);

	}
	handleChange(){

	}
	render(){
		return(
			<Layout active = "busTrack" {...this.props}>
				<img className="bus-dynamic-bg-img" src = {bgImg} alt=""/>
				<div className="container">
					<div className="bus-dynamic">
						<div className="bus-dynamic-wrapper">
							<div className="bus-dynamic-inner">
								<div className="bus-dynamic-label">
									<div>
										<FormattedMessage
											id={"search-bus-label"}
										/>
									</div>
								</div>
								<Input className = "bus-dynamic-input"/>
								<div className="bus-dynamic-date-input-wrapper">
									<DatePicker
										value = {moment().format("L")}
										dateFormat = "L"
										inputClassName = "bus-dynamic-date-input"/>
								</div>
								<Button className = "bus-dynamic-search-btn">
									<FormattedMessage
										id={"search-bus-btn"}
									/>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}
