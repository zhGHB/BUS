import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/user/refundSuccess.scss";
import { FormattedMessage } from 'react-intl';
import Button from "../../components/button";

const succeedIcon = require("../../images/user/larger-success.png");

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
        this.goBackTickets=this.goBackTickets.bind(this);
    }
    componentDidMount(){
    }
    goBackTickets(){
        console.log("aaa")
    }
    render(){
        return(
            <Layout {...this.props}>
                <BreadMenu menu = {this.breadMenu} />
                <div className="container">
                    <div className="refund-success">
                        <div className="refund-success-top">
                            <img src={succeedIcon} alt=""/>
                            <span className="font-24">
                                <FormattedMessage
                                    id={"refund-success-label-text"}
                                />
                            </span>
                        </div>
                        <div className="refund-success-bottom">
                            <div className="refund-success-bottom-font">
                                <span className="font-14-right">
                                     <FormattedMessage
                                         id={"refund-success-money-text"}
                                     />
                                </span>
                                <span>THB 120.00</span>
                            </div>
                            <div className="refund-success-btn">
                                <Button
                                    onClick = {this.goBackTickets}
                                    type="default"
                                    className="refund-success-btn-left"
                                >
                                    <FormattedMessage
                                        id={"refund-success-goBack-text"}
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