import Layout from "../../components/layout";
import SearchBox from "../../components/portal/searchBox";
import "../../style/tickets/buyTickets.scss";

const helpIcon=require("../../images/tickets/buy-ticket-help.png");

export default class Demo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount(){

    }

    render(){
        return(
            <Layout {...this.props} active = "busTicket">
                <div className="container">
                    <div className="buy-ticket-container">
                        <div className="buy-ticket-container-searchBox">
                            <SearchBox/>
                        </div>
                        <div className="buy-ticket-container-help">
                            <a className="buy-ticket-container-help-btn" onClick={()=>{this.props.history.push("/theFAQ")}}>
                                <img src={helpIcon} alt=""/>
                                <span >帮助指南</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}