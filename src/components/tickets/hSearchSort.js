import "../../style/components/hSearchSort.scss";
import { FormattedMessage } from 'react-intl';
import CheckBox from "../../components/ui/checkBox";

export default class List extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            checkBoxLabel:[
                {id:"出发早到晚"},
                {id:"出发晚到早"},
                {id:"价格由低到高"},
                {id:"价格由高到低"},
            ]
        }
    }

    componentDidMount(){
        let height=$(window).height();
        this.setState({
            height:height/2
        });
    }

    render(){
        let {checkBoxLabel}=this.state;
        return(
            <div className="h-search-sort-container">
                <div className="h-search-sort-container-title">
                    <span>排序方式</span>
                </div>
                <div className="h-search-sort-container-checkbox">
                    {
                        checkBoxLabel.map((item,index)=>{
                            return(
                                <div key={index} className="checkbox-child">
                                    <CheckBox label={item.id} />

                                </div>
                            )
                         })
                    }

                </div>
            </div>
        )
    }
}