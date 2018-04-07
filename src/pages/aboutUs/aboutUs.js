import Layout from "../../components/layout";
import "../../style/aboutUs/aboutUs.scss";

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
                    <div className="about-us-container">
                        <div className="about-us-container-content">
                            <div className="about-us-container-content-title">关于我们</div>
                            <div className="about-us-container-content-txt">
                                <p>如果您还没到过泰国或者对泰国还不是那么熟悉，当您要搭乘汽车交通从一个城市去到另一个城市，那么购买车票就似乎就不是一件那么容易的事情了，因为语言的不同，您很有可能因为沟通不畅，从而买错车票，相信大家都不想体会去错目的地那种懊恼和无奈。</p>
                                <p>不过，现在有了我们的网络预订票系统，大家就可以避免这样尴尬的事情发生，还可以提前安排好您的行程，尽情享受的您的假期。我们是一家提供网上泰国车票预订服务的优质一站式门户网站。除了汽车票，我们的还提供泰国各地火车票订购、租车和其他旅行配套的服务。</p>
                                <p>不过，现在有了我们的网络预订票系统，大家就可以避免这样尴尬的事情发生，还可以提前安排好您的行程，尽情享受的您的假期。我们是一家提供网上泰国车票预订服务的优质一站式门户网站。除了汽车票，我们的还提供泰国各地火车票订购、租车和其他旅行配套的服务。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}