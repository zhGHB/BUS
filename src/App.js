import React, { Component } from 'react';
import './style/App.scss';

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import {
    FeedBack,
    ContactUs,
    AboutUs,
    BuyTicket,
	HelpGuide,
	TheFAQ,
    OrderInquiry,
    Refund,
    TheyWill,
	Home,
	Map,
	PayPal,
	Portal,
	SearchList,
	OrderInfo,
	Demo,
	PayWay,
	CreditCardPay,
	Login,
	Register,
	ResetPassword,
	PersonalCenter,
	EditPersonalInfo,
	MyOrder,
	OrderDetail,
	MyTickets,
	SearchBusDynamic,
	BusDynamic,
} from "./pages/entryConfig";

import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import th from 'react-intl/locale-data/th';
import zh_CN from './locales/zh-CN.js';
import en_US from './locales/en-US.js';
import th_THAI from "./locales/th-THAI";
addLocaleData([...en, ...zh,...th]);
import store from './store/store';
import { Provider } from 'react-redux';


class App extends Component {
	constructor(props){
		super(props);
		this.messages = {
			"en":en_US,
			"zh":zh_CN,
			"th":th_THAI,
		}
	}
	componentDidMount(){
	}
	render() {
		let lan = localStorage.lan || "en";
		return (
			<IntlProvider
				locale={lan}
				messages={this.messages[lan]}
			>
			   <Provider store={store}>
				<Router>
					<Switch>
						<Route path = "/demo" component = {Demo}/>
						<Route path = "/home" component = {Home}/>
						<Route path = "/map" component = {Map}/>
						<Route path = "/payPal" component = {PayPal}/>
						<Route path = "/portal" component = {Portal}/>
						<Route path = "/searchList" component = {SearchList}/>
						<Route path = "/orderInfo" component = {OrderInfo}/>
						<Route path = "/payWay" component = {PayWay}/>
						<Route path = "/creditCardPay" component = {CreditCardPay}/>
						<Route path = "/login" component = {Login}/>
						<Route path = "/register" component = {Register}/>
						<Route path = "/resetPassword" component = {ResetPassword}/>

						<Route path = "/theyWill" component = {TheyWill}/>
						<Route path = "/refund" component = {Refund}/>
						<Route path = "/orderInquiry" component = {OrderInquiry}/>
						<Route path = "/helpGuide" component = {HelpGuide}/>
						<Route path = "/theFAQ" component = {TheFAQ}/>
						<Route path = "/buyTicket" component = {BuyTicket}/>
						<Route path = "/aboutUs" component = {AboutUs}/>
						<Route path = "/contactUs" component = {ContactUs}/>
						<Route path = "/feedBack" component = {FeedBack}/>

						<Route path = "/personalInfo" component = {PersonalCenter}/>
						<Route path = "/editPersonalInfo" component = {EditPersonalInfo}/>
						<Route path = "/myOrder" component = {MyOrder}/>
						<Route path = "/orderDetail" component = {OrderDetail}/>
						<Route path = "/myTickets" component = {MyTickets}/>
						<Route path = "/searchBusDynamic" component = {SearchBusDynamic}/>
						<Route path = "/busDynamic" component = {BusDynamic}/>
						<Redirect from="/" to="/portal"/>
					</Switch>
				</Router>
				</Provider>
			</IntlProvider>
		);
	}
}

export default App;

