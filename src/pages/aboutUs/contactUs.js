import Layout from "../../components/layout";
import "../../style/aboutUs/contactUs.scss";

const phoneIcon=require("../../images/aboutUs/contact-us-phone.png");
const emailIcon=require("../../images/aboutUs/contact-us-email.png");
const addressIcon=require("../../images/aboutUs/contact-us-address.png");
const bgImg=require("../../images/aboutUs/contact-us-bg.png");

export default class Demo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <Layout>
                <div className="container">
                    <div className="flex">
                        <div className="contact-us-container">
                            <div className="contact-us-container-content">
                                <div className="contact-us-container-content-title">联系我们</div>
                                <div className="contact-us-container-content-detail">
                                    <div className="detail-container">
                                        <img src={phoneIcon} alt=""/>
                                        <span>+66-0002-4126</span>
                                    </div>
                                    <div>
                                        <img src={emailIcon} alt=""/>
                                        <span>Bostong@busonline.cn.th</span>
                                    </div>
                                    <div>
                                        <img src={addressIcon} alt=""/>
                                        <span>Moo 21, Klonghae, Hatyai,Songkhla, Thailand</span>
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