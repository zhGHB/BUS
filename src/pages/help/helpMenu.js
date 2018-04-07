import {Link} from "react-router-dom";
import "../../style/help/helpMenu.scss";
export default class Center extends React.PureComponent{
    constructor(props){
        super(props);
        this.menuList = [
            {path:"/helpGuide",key:"helpGuide",value:"购票流程"},
            {path:"/theFAQ",key:"theFAQ",value:"常见问题"},
        ]
    }
    render(){
        let {active} = this.props;
        return(
            <ul className="help-menu-container">
                {
                    this.menuList.map((item,index)=>{
                        return(
                            <li className={item.key === active?"menu-li active":"menu-li"} key = {index}>
                                <Link to = {item.path}>{item.value}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}