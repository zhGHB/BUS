import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/order/theyWill.scss";
import { FormattedMessage } from 'react-intl';
import Button from "../../components/button";

const succeedIcon = require("../../images/user/larger-success.png");

export default class TheyWill extends React.PureComponent{
    constructor(props){
        super(props);
        let {getMessage} = props.lan;
        this.state = {

        };
        this.breadMenu = [
            {path:"portal",key:getMessage("layout.nav.tab.index")},
            {path:"login",key:getMessage("login")},
        ];
        this.goDetail=this.goDetail.bind(this);
        this.goBackHome=this.goBackHome.bind(this);
    }
    componentDidMount(){
    }

    goDetail(){
        console.log("aaa")
    }
    goBackHome(){
        console.log("aaa")
    }
    render(){
        return(
            <Layout {...this.props}>
                <BreadMenu menu = {this.breadMenu} />
                <div className="container">
                    <div className="they-will">
                        <div className="they-will-top">
                            <img src={succeedIcon} alt=""/>
                            <span className="font-24">
                                 <FormattedMessage
                                     id={"they-will-label-text"}
                                 />
                            </span>
                        </div>
                        <div className="they-will-bottom">
                            <span className="font-14">
                                 <FormattedMessage
                                     id={"they-will-label-text-hint"}
                                 />

                            </span>
                            <div className="they-will-btn">
                                <Button
                                    onClick = {this.goDetail}
                                    type="default"
                                    className="they-will-btn-left"
                                >
                                    <FormattedMessage
                                        id={"they-will-btn-text-left"}
                                    />

                                </Button>
                                <Button
                                    onClick = {this.goBackHome}
                                    type="orange"
                                    className="they-will-btn-right"
                                >
                                    <FormattedMessage
                                        id={"they-will-btn-text-right"}
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