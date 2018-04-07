import "../../style/components/hSearchScreen.scss";
import { FormattedMessage } from 'react-intl';
import CheckBox from "../../components/ui/checkBox";
import Button from "../../components/button";

export default class List extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            screenLabel:[
                {
                    value:"发车时段",
                    list:[
                        {label:"不限"},
                        {label:"上午 12 : 00—17 : 59"},
                        {label:"中午 18 : 00—23 : 59"},
                        {label:"晚上 24 : 00—05 : 59"},
                    ]
                },
                {
                    value:"出发车站",
                    list:[
                        {label:"不限"},
                        {label:"东站"},
                        {label:"北站"},
                    ]
                },
                {
                    value:"到达车站",
                    list:[
                        {label:"不限"},
                        {label:"东站"},
                        {label:"北站"},
                    ]
                },
            ],

        }
    }

    componentDidMount(){

    }

    render(){
        let {screenLabel}=this.state;
        return(
            <div className="h-search-Screen-container">
                {
                    screenLabel.map((item,index)=>{
                        return(
                            <div key={index} className="h-search-Screen">
                                <div className="h-search-Screen-title">
                                    <span>{item.value}</span>
                                </div>
                                <div className="h-search-Screen-checkbox">
                                    {
                                        item.list.map((item,index)=>{
                                            return(
                                                <div key={index} className="checkbox-child">
                                                    <CheckBox label={item.label} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })
                }
                <div className="h-search-Screen-btn-box">
                    <Button className="h-search-Screen-btn">确定</Button>
                </div>
            </div>
        )
    }
}