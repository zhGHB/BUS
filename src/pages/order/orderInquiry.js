import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/order/orderInquiry.scss";
import MsgInput from "../../components/ui/getMsgInput";
import Input from "../../components/ui/input";
import Button from "../../components/button";
import { FormattedMessage } from 'react-intl';

export default class OrderInquiry extends React.PureComponent{
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
            <Layout active = "orderSearch" {...this.props}>
                <BreadMenu menu = {this.breadMenu} />
                <div className="container">
                    <div className="order-inquiry">
                        <div className="order-inquiry-header">
                            <span>
                                <FormattedMessage
                                    id={"order-inquiry-label-text"}
                                />

                            </span>
                        </div>
                        <div className="order-inquiry-body">
                            <div className="flex1 input-row input-bottom24">
                                <MsgInput
                                    placeholder = "order-inquiry-msgInput-holder"
                                    className="flex1"
                                />
                            </div>
                            <div className="flex1 input-row input-bottom34">
                                <Input
                                    placeholder = "order-inquiry-input-holder"
                                    className="flex1"
                                />
                            </div>
                            <div className="flex1 input-row">
                                <Button
                                    type="black"
                                    className="flex1"
                                >
                                    <FormattedMessage
                                        id={"order-inquiry-label-text-btn"}
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