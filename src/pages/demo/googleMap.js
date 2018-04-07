import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Polyline,Marker  } from "react-google-maps"
import testPath from "./mapTestData";
const car = require("../../images/car.png");
const MyMapComponent = compose(
	withProps({
		loadingElement: <div style={{ height: "400px" ,width:"100%"}} />,
		containerElement: <div style={{ height: `400px`,width:"100%" }} />,
		mapElement: <div style={{ height: "400px",width:"100%" }} />,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>{
	let {lat = 0,lng = 0} = props;
		return(

			<GoogleMap
				defaultZoom={8}
				defaultCenter={{lat, lng}}
				center = {{lat, lng}}
			>
				<Polyline
					path={testPath}
					options={{strokeColor:"#00B2FD",strokeWeight:5,border:"1px solid #ccc"}}
					onClick={props.onMarkerClick} />
				<Marker
					position={{ lat:30.542597, lng:104.060732}} />
			</GoogleMap>
		)
	}
)

class MyFancyComponent extends React.PureComponent {
	constructor(props){
		super(props);
		this.state = {
			isMarkerShown: false,
			lat:0,
			lng:0,
		}
	}

	componentDidMount() {
		this.delayedShowMarker();
		this.getGeolocation();
	}
	getGeolocation(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((position)=>{
				this.setState({
					// lat: position.coords.latitude,
					// lng: position.coords.longitude,
					lat:30.542597,
					lng:104.060732,
				})
			})
		}
	}
	delayedShowMarker = () => {
		setTimeout(() => {
			this.setState({ isMarkerShown: true })
		}, 3000)
	}

	handleMarkerClick = () => {
		this.setState({ isMarkerShown: false })
		this.delayedShowMarker()
	}

	render() {
		let {lat,lng} = this.state;
		let position = {lat,lng};
		return (
			<MyMapComponent
				{...position}
				isMarkerShown={this.state.isMarkerShown}
				onMarkerClick={this.handleMarkerClick}
			/>
		)
	}
}

export default MyFancyComponent;