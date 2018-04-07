/*默认图片*/
import "../../style/components/orderTicket.scss";

const orderImg=require("../../images/defaultPage/order-default-img.png");
const ticketImg=require("../../images/defaultPage/ticket-default-img.png");
const searchListImg=require("../../images/defaultPage/searchList-default-img.png");
const trainNumImg=require("../../images/defaultPage/train-num-default-img.png");
const packageImg=require("../../images/defaultPage/package-default-img.png");
export default class Select extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            imgList:[
                {src:orderImg,key:"order"},
                {src:ticketImg,key:"ticket"},
                {src:searchListImg,key:"search"},
                {src:trainNumImg,key:"train"},
                {src:packageImg,key:"package"},
            ]
        };

    }
    componentDidMount(){

    }

    static defaultProps={
        type:"package"
    };

    render(){
        let {type}=this.props;
        let {imgList}=this.state;
        return(
            <div className="default-page-container">
                {
                    imgList.map((item,index)=>{
                        if(type===item.key){
                            return(
                                <img src={item.src} alt="" key={index}/>
                            )
                        }

                    })

                }
            </div>
        )
    }
}