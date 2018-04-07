import Modal from 'react-modal';
import "../../style/order/selectBackSeat.scss";
import Button from "../button";
const closeIcon = require("../../images/user/close.png");
const upIcon = require("../../images/order/back-seat-up.png");
const downIcon = require("../../images/order/back-seat-down.png");

export default class SelectBackSeat extends React.PureComponent{
    constructor(props){
        super(props);
        this.close = this.close.bind(this);
        this.deleteNum = this.deleteNum.bind(this);
        this.upNum = this.upNum.bind(this);
        this.state = {
            isShow:false,
            seatNum:1,
            maxNum:30,
        }
    }
    show(){
        this.setState({
            isShow:true,
        })
    }
    close(){
        this.setState({
            isShow:false,
        })
    }

    deleteNum(){
        let {seatNum}=this.state;
        if(seatNum===1) {
            this.setState({
                seatNum:1
            })
        }else {
            this.setState({
                seatNum:seatNum-1
            })
        }
    }
    upNum(){
        let {seatNum,maxNum}=this.state;
        if(seatNum===maxNum) {
            this.setState({
                seatNum:maxNum
            })
        }else {
            this.setState({
                seatNum:seatNum+1
            })
        }
    }
    render(){
        let {isShow,seatNum} = this.state;
        return(
            <Modal
                style = {
                    customStyles
                }
                ariaHideApp = {false}
                isOpen = {isShow}
            >
                <div className="select-back-dialog">
                    <div className="select-back-dialog-title">
                        <div>选择回程座位</div>
                        <img onClick = {this.close} src={closeIcon} alt=""/>
                    </div>
                    <div className="select-back-dialog-content">
                        <div className="select-back-dialog-toast">
                           不支持选座，请选择座位数量：
                        </div>
                        <div className="select-back-dialog-select">
                            <img onClick = {this.deleteNum} src={downIcon} alt="" />
                            <div className="num-txt">{seatNum}<span>seat</span></div>
                            <img onClick = {this.upNum} src={upIcon} alt=""/>
                        </div>
                        <div className="select-back-dialog-tips">
                            身高90cm以下的儿童，如与父母共享座位可免费
                        </div>
                    </div>
                    <div className="select-back-dialog-bottom">
                        <Button type = "black">确定</Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

const customStyles = {
    content : {
        // top: '50%',
        // left: '50%',
        // right: '50%',
        // bottom: '50%',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        // backgroundColor:"rgba(0,0,0,0)",
        // border:null,
        overflow:"visible"
    },
    overlay:{
        display:"flex",
        backgroundColor:"rgba(0,0,0,.6)",
        overflow:"auto",
        alignItems:"center",
        justifyContent:"center",
    }
};