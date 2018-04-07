import "../../style/tickets/hUserCenterNav.scss";
import { FormattedMessage } from 'react-intl';

const userIconDefault=require("../../images/layer/layer-icon-user-default.png");
const userIconSelected=require("../../images/layer/layer-icon-user-selected.png");
const orderIconDefault=require("../../images/layer/layer-icon-order-default.png");
const orderIconSelected=require("../../images/layer/layer-icon-order-selected.png");
const passIconDefault=require("../../images/layer/layer-icon-password-default.png");
const passIconSelected=require("../../images/layer/layer-icon-password-selected.png");
const ticketIconDefault=require("../../images/layer/layer-icon-ticket-default.png");
const ticketIconSelected=require("../../images/layer/layer-icon-ticket-selected.png");
const messageIconDefault=require("../../images/layer/layer-icon-message-default.png");
const messageIconSelected=require("../../images/layer/layer-icon-message-selected.png");
const packageIconDefault=require("../../images/layer/layer-icon-package-default.png");
const packageIconSelected=require("../../images/layer/layer-icon-package-selected.png");

const upIcon=require("../../images/layer/layer-icon-up.png");
const downIcon=require("../../images/layer/layer-icon-down.png");


export default class Nav extends React.PureComponent{
    constructor(props){
        super(props);
        this.menuList = [
            {path:"/personalInfo",key:"personalInfo",value:"个人信息",imgDefault:userIconDefault,imgActive:userIconSelected},
            {path:"/myOrder",key:"myOrder",value:"我的订单",imgDefault:orderIconDefault,imgActive:orderIconSelected},
            {path:"/myTickets",key:"myTickets",value:"我的车票",imgDefault:ticketIconDefault,imgActive:ticketIconSelected},
            {path:"/personalInfo",key:"1",value:"我的包裹",imgDefault:packageIconDefault,imgActive:packageIconSelected},
            {path:"/personalInfo",key:"2",value:"更改密码",imgDefault:passIconDefault,imgActive:passIconSelected},
            {path:"/personalInfo",key:"3",value:"我的消息",imgDefault:messageIconDefault,imgActive:messageIconSelected},
        ];
        this.state={
            iconType:true,
            displayType:true,
            height:100,
        };

        this.showNav=this.showNav.bind(this);
    }

    componentDidMount(){
       let height=$(window).height();
       this.setState({
           height:height
       });
    }

    navShow(){
        let {iconType,displayType}=this.state;
        this.setState({
            iconType:!iconType,
            displayType:!displayType,
        },()=>{
            $(".user-nav-wrapper").slideToggle("fast");
        });
    }

    showNav(){
       this.navShow();
    }

    bgClick(){
        this.navShow();
    }

    static defaultProps={
        /*传入参数类型key  value*/
        selected:"个人信息",
        active:"personalInfo"
    };

    navClick(value,path){
        this.props.history.push(path);
        this.setState({
            selected:value,
        })
    }

    render(){
        let {iconType,displayType,height}=this.state;
        let {active,selected}=this.props;
        return(
            <div className="h-user-center-nav">
                <div className="h-user-center-nav-show">
                    <button
                        className={iconType?"h-user-center-nav-show-btn":"h-user-center-nav-show-btn active"}
                        onClick={this.showNav}
                    >
                        <span className="h-user-center-nav-show-btn-txt">{selected}</span>
                        <img src={upIcon} alt="" className="h-user-center-nav-show-btnImg"/>
                    </button>
                </div>
                <div
                    id = "user-nav-layer"
                    className={"user-nav-layer"}
                    style={displayType?{opacity:0,height:height}:{opacity:1,height:height}}
                    onClick={this.bgClick.bind(this)}
                >
                   <div className="user-nav-wrapper">
                       <div
                           className="user-nav-layer-container"
                       >
                           {
                               this.menuList.map((item,index)=>{
                                   return (
                                       <div
                                           key={index}
                                           className={item.key===active?"user-nav-layer-item font-yellow":"user-nav-layer-item font-gary"}
                                           onClick={this.navClick.bind(this,item.value,item.path)}
                                       >
                                           <img src={item.key===active?item.imgActive:item.imgDefault} alt="" className="user-nav-layer-container-img"/>
                                           <span className="user-nav-layer-item-font">
                                        {item.value}
                                    </span>
                                       </div>
                                   )
                               })
                           }
                       </div>
                   </div>
                </div>
            </div>
        )
    }

}