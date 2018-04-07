import Layout from "../../components/layout";
import "../../style/aboutUs/feedBack.scss";
import Button from "../../components/button";
import { FormattedMessage } from 'react-intl';

export default class Demo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            areaValue:"",
        };
        this.getContact = this.getContact.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.sendClick = this.sendClick.bind(this);
        this.goBack = this.goBack.bind(this);

    }

    componentDidMount(){

    }

    onChangeContent(e){
        this.setState({
            areaValue:e.target.value,
        })
    }

    getContact(e){
        this.setState({
            inputValue:e.target.value,
        })
    }

    sendClick(){
        let {areaValue,inputValue}=this.state;
        console.log(areaValue,"+",inputValue)
    }

    goBack(){

    }
    render(){
        let {inputValue,areaValue}=this.state;
        return(
            <Layout>
                <div className="container">
                    <div className="flex">
                        <div className="feed-back-container">
                            <div className="feed-back-container-content">
                                <div className="feed-back-container-content-title">意见反馈</div>
                                <div className="feed-back-container-content-detail">
                                    <div className="feed-back-text-area-container">
                                        <textarea
                                            placeholder="任何产品中的问题，欢迎反馈给我们"
                                            className="feed-back-text-area"
                                            onChange={this.onChangeContent}
                                            value={areaValue}
                                        />
                                        <input
                                            placeholder="请留下联系方式（电话、邮箱）"
                                            className="feed-back-text-area"
                                            value={inputValue}
                                            onChange={this.getContact}
                                        />
                                    </div>
                                    <div className="feed-back-btn">
                                        <Button className="btn-border" onClick={this.sendClick}> 发送意见</Button>
                                        <Button className="btn-border" type="white" onClick={this.goBack}> 取消</Button>
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