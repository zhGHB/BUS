/**
 * Created by luojie on 2017/10/17.
 */
import Enhance from "../components/mixin/Enhance";
import Bundle from "../bundle";
const Home = Enhance(require( "./demo/home").default);
const Map = Enhance(require( "./demo/googleMap").default);
const PayPal = Enhance(require( "./demo/payPal").default);
// const Portal = Enhance(require( "./portal").default);

import PortalComp from "bundle-loader?lazy&name=app-[name]!./portal";
import SearchListComp from "bundle-loader?lazy&name=app-[name]!./tickets/searchList";
import OrderInfoComp from "bundle-loader?lazy&name=app-[name]!./order/orderInfo";
import PayWayComp from "bundle-loader?lazy&name=app-[name]!./order/payWay";
import CreditCardPayComp from "bundle-loader?lazy&name=app-[name]!./order/creditCardPay";
import LoginComp from "bundle-loader?lazy&name=app-[name]!./user/login";
import RegisterComp from "bundle-loader?lazy&name=app-[name]!./user/register";
import ResetPasswordComp from "bundle-loader?lazy&name=app-[name]!./user/resetPassword";
import TheyWillComp from "bundle-loader?lazy&name=app-[name]!./order/theyWill";
import RefundComp from "bundle-loader?lazy&name=app-[name]!./user/refundSuccess";
import OrderInquiryComp from "bundle-loader?lazy&name=app-[name]!./order/orderInquiry";
import HelpGuideComp from "bundle-loader?lazy&name=app-[name]!./help/helpGuide";
import TheFAQComp from "bundle-loader?lazy&name=app-[name]!./help/theFAQ";
import PersonalCenterComp from "bundle-loader?lazy&name=app-[name]!./user/personalInfo";
import EditPersonalInfoComp from "bundle-loader?lazy&name=app-[name]!./user/editPersonalInfo";
import MyOrderComp from "bundle-loader?lazy&name=app-[name]!./user/myOrder";
import OrderDetailComp from "bundle-loader?lazy&name=app-[name]!./user/orderDetail";
import MyTicketsComp from "bundle-loader?lazy&name=app-[name]!./user/myTickets";
import SearchBusDynamicComp from "bundle-loader?lazy&name=app-[name]!./portal/searchBusDynamic";
import BusDynamicComp from "bundle-loader?lazy&name=app-[name]!./portal/busDynamic";
import BuyTicketComp from "bundle-loader?lazy&name=app-[name]!./tickets/buyTicket";
import AboutUsComp from "bundle-loader?lazy&name=app-[name]!./aboutUs/aboutUs";
import ContactUsComp from "bundle-loader?lazy&name=app-[name]!./aboutUs/contactUs";
import FeedBackComp from "bundle-loader?lazy&name=app-[name]!./aboutUs/feedBack";

let arr = [
	{key:"Portal",comp:PortalComp},
	{key:"SearchList",comp:SearchListComp},
	{key:"OrderInfo",comp:OrderInfoComp},
	{key:"PayWay",comp:PayWayComp},
	{key:"CreditCardPay",comp:CreditCardPayComp},
	{key:"Login",comp:LoginComp},
	{key:"Register",comp:RegisterComp},
	{key:"ResetPassword",comp:ResetPasswordComp},
	{key:"TheyWill",comp:TheyWillComp},
	{key:"Refund",comp:RefundComp},
	{key:"OrderInquiry",comp:OrderInquiryComp},
	{key:"HelpGuide",comp:HelpGuideComp},
	{key:"TheFAQ",comp:TheFAQComp},
	{key:"PersonalCenter",comp:PersonalCenterComp},
	{key:"EditPersonalInfo",comp:EditPersonalInfoComp},
	{key:"MyOrder",comp:MyOrderComp},
	{key:"OrderDetail",comp:OrderDetailComp},
	{key:"MyTickets",comp:MyTicketsComp},
	{key:"SearchBusDynamic",comp:SearchBusDynamicComp},
	{key:"EditPersonalInfo",comp:EditPersonalInfoComp},
	{key:"BusDynamic",comp:BusDynamicComp},
	{key:"BuyTicket",comp:BuyTicketComp},
	{key:"AboutUs",comp:AboutUsComp},
	{key:"ContactUs",comp:ContactUsComp},
	{key:"FeedBack",comp:FeedBackComp},
];

//
// const CreditCardPay = Enhance(require( "./order/creditCardPay").default);
// const Login = Enhance(require( "./user/login").default);
// const Register = Enhance(require( "./user/register").default);
// const ResetPassword = Enhance(require( "./user/resetPassword").default);
//
// const TheyWill = Enhance(require( "./order/theyWill").default);
// const Refund = Enhance(require( "./user/refundSuccess").default);
// const OrderInquiry = Enhance(require( "./order/orderInquiry").default);
//
// const HelpGuide = Enhance(require( "./help/helpGuide").default);
// const TheFAQ = Enhance(require( "./help/theFAQ").default);
//
// const PersonalCenter = Enhance(require( "./user/personalInfo").default);
//
//
// const EditPersonalInfo = Enhance(require( "./user/editPersonalInfo").default);
// const MyOrder = Enhance(require( "./user/myOrder").default);
// const OrderDetail = Enhance(require( "./user/orderDetail").default);
// const MyTickets = Enhance(require( "./user/myTickets").default);
// const SearchBusDynamic = Enhance(require( "./portal/searchBusDynamic").default);
// const BusDynamic = Enhance(require( "./portal/busDynamic").default);

const SearchList = Enhance((props) => (
	<Bundle  load={SearchListComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const OrderInfo = Enhance((props) => (
	<Bundle  load={OrderInfoComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const Login = Enhance((props) => (
	<Bundle  load={LoginComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const PayWay = Enhance((props) => (
	<Bundle  load={PayWayComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const CreditCardPay = Enhance((props) => (
	<Bundle  load={CreditCardPayComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const Register = Enhance((props) => (
	<Bundle  load={RegisterComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const ResetPassword = Enhance((props) => (
	<Bundle  load={ResetPasswordComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const TheyWill = Enhance((props) => (
	<Bundle  load={TheyWillComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const Refund = Enhance((props) => (
	<Bundle  load={RefundComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const OrderInquiry = Enhance((props) => (
	<Bundle  load={OrderInquiryComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const HelpGuide = Enhance((props) => (
	<Bundle  load={HelpGuideComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const TheFAQ = Enhance((props) => (
	<Bundle  load={TheFAQComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const PersonalCenter = Enhance((props) => (
	<Bundle  load={PersonalCenterComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const EditPersonalInfo = Enhance((props) => (
	<Bundle  load={EditPersonalInfoComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const MyOrder = Enhance((props) => (
	<Bundle  load={MyOrderComp}>
		{(List) => <List {...props} />}
	</Bundle>
));
const OrderDetail = Enhance((props) => (
	<Bundle  load={OrderDetailComp}>
		{(List) => <List {...props} />}
	</Bundle>
));
const MyTickets = Enhance((props) => (
	<Bundle  load={MyTicketsComp}>
		{(List) => <List {...props} />}
	</Bundle>
));
const SearchBusDynamic = Enhance((props) => (
	<Bundle  load={SearchBusDynamicComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const BusDynamic = Enhance((props) => (
	<Bundle  load={BusDynamicComp}>
		{(List) => <List {...props} />}
	</Bundle>
));

const BuyTicket = Enhance((props) => (
	<Bundle  load={BuyTicketComp}>
        {(List) => <List {...props} />}
	</Bundle>
));

const AboutUs = Enhance((props) => (
	<Bundle  load={AboutUsComp}>
        {(List) => <List {...props} />}
	</Bundle>
));

const ContactUs = Enhance((props) => (
	<Bundle  load={ContactUsComp}>
        {(List) => <List {...props} />}
	</Bundle>
));

const FeedBack = Enhance((props) => (
	<Bundle  load={FeedBackComp}>
        {(List) => <List {...props} />}
	</Bundle>
));


let obj = {};
arr.map((item)=>{
	obj[item.key] = Enhance((props) => (
		<Bundle  load={item.comp}>
			{(List) => <List {...props} />}
		</Bundle>
	));
});
console.log(obj);
// const SearchList = Enhance(require( "./tickets/searchList").default);
// const OrderInfo = Enhance(require( "./order/orderInfo").default);
//
// const PayWay = Enhance(require( "./order/payWay").default);


import Demo from "./demo/demo";
const Demo2 = (props) => (
	<Bundle  load={PortalComp}>
		{(List) => <List {...props} />}
	</Bundle>
)
const Portal = Enhance(Demo2)

// console.log(Demo1)
// console.log(PortalComp)

export {
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
	TheyWill,
	PersonalCenter,
	EditPersonalInfo,
	MyOrder,
	OrderDetail,
	MyTickets,
	SearchBusDynamic,
	BusDynamic,
	Refund,
	OrderInquiry,
	HelpGuide,
	TheFAQ,
    BuyTicket,
    AboutUs,
    ContactUs,
    FeedBack,
}