import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/help/theFAQ.scss";
import HelpMenu from "./helpMenu";

export default class RefundSuccess extends React.PureComponent{
    constructor(props){
        super(props);
        let {getMessage} = props.lan;
        this.state = {

        };
        this.breadMenu = [
            {path:"portal",key:getMessage("layout.nav.tab.index")},
            {path:"login",key:getMessage("login")},
        ];
    }
    componentDidMount(){
    }
    render(){
        return(
            <Layout {...this.props}>
                <BreadMenu menu = {this.breadMenu} />
                <div className="container">
                    <div className="help-guide-box">
                        <HelpMenu active="theFAQ"/>
                        <div className="the-FAQ">
                            <div className="they-FAQ-title">
                                <span>用户常见问题</span>
                            </div>
                            <div className="the-FAQ-content">
                                <div className="the-FAQ-content-margin">
                                    <span className="font-title-16">
                                        一、购买好车票后，上车前需要取票吗？
                                    </span>
                                    <span className="font-content-15">
                                        不需要，乘客上车前只需要向乘务员出示电子车票图片或含有车票编号的邮件图片即可。
                                    </span>
                                </div>
                                <div className="the-FAQ-content-margin">
                                    <span className="font-title-16">
                                        二、可以接受哪些支付方式？
                                    </span>
                                    <span className="font-content-15">
                                        Alipay、Paypal、信用卡/借记卡。
                                    </span>
                                </div>
                                <div className="the-FAQ-content-margin">
                                    <span className="font-title-16">
                                       三、购票有手续费吗？
                                    </span>
                                    <span className="font-content-15">
                                        本网站是一个方便快捷的免费服务网站，不向用户收取购票手续费。
                                    </span>
                                </div>
                                <div className="the-FAQ-content-margin">
                                    <span className="font-title-16">
                                        四、必须要注册账号才能购票吗？
                                    </span>
                                    <span className="font-content-15">
                                        本网站的用户注册非常灵活。没有进行注册的用户也能进行网上购票。不过，我们鼓励频繁使用预订服务的的乘客注册为本网站的用户，这可 以让您的购票更加方便快捷。
                                    </span>
                                </div>
                                <div className="the-FAQ-content-margin">
                                    <span className="font-title-16">
                                        五、可以进行车票改签吗？
                                    </span>
                                    <span className="font-content-15">
                                        一旦购票成功，是不可以进行车票改签的，所以购票时请认真确认车票信息。
                                    </span>
                                </div>
                                <div className="the-FAQ-content-margin">
                                    <span className="font-title-16">
                                        六、可以进行退票吗？
                                    </span>
                                    <span className="font-content-15">
                                        可以，需要注意的是发车前24小时，系统将关闭退票服务。所以，如果您需要退票，请在发车前24小时之前处理。
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}