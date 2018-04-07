/**
 * Created by luojie on 2018/1/17.
 */
import "../../style/tickets/searchListFilterTitle.scss";
import { FormattedMessage } from 'react-intl';
export default class Filter extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			startTimeSortType:1,//1为升序，2为降序
		};
		this.startSort = this.startSort.bind(this);
	}
	startSort(){
		let {startTimeSortType} = this.state;
		this.setState({
			startTimeSortType:startTimeSortType === 1?2:1
		})
	}
	render(){
		let {startTimeSortType} = this.state;
		return(
			<div className="search-list-filter-title visible-lg visible-md">
				<div className="search-list-filter-title-wrapper">
					<div className="filter-title-col1 pointer " onClick = {this.startSort}>
						<FormattedMessage
							id={"search.list.filter.start.time"}
						/>
						<i className={startTimeSortType === 1?"filter-sort asc":"filter-sort des"}/>
					</div>
					<div className="filter-title-col2">
						<FormattedMessage
							id={"search.list.filter.start.station"}
						/>
					</div>
					<div className="filter-title-col3">
						<FormattedMessage
							id={"search.list.filter.transport.company"}
						/>
					</div>
					<div className="filter-title-col4">
						<FormattedMessage
							id={"search.list.filter.remain.site"}
						/>
					</div>
					<div className="filter-title-col4">
						<FormattedMessage
							id={"search.list.filter.adult"}
						/>
						<i className={startTimeSortType === 1?"filter-sort asc":"filter-sort des"}/>
					</div>
					<div className="filter-title-col4">
						<FormattedMessage
							id={"search.list.filter.older"}
						/>
					</div>
					<div className="filter-title-col4">
						<FormattedMessage
							id={"search.list.filter.child"}
						/>
					</div>
					<div className="filter-title-col5/"/>
				</div>
			</div>
		)
	}

}