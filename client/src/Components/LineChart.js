import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class LineChart extends Component {

	chartRef = React.createRef();
  state = {
    events:[],
    labels :[],
    data :[],
    totalParticip :[],
    //  totalEvent 
  }

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");

    
    

    fetch('http://localhost:5000/api/evenement')
    .then((response) => response.json())
    .then(eventsList => {
        this.setState({ events: eventsList.response });
        this.state.events.map((event) => (this.state.labels.push(event.title)))
        this.state.events.map((event) => {this.state.data.push(event.participant.length); })
    });
		
		new Chart(ctx, {
			type: "line",
			data: {
				labels: this.state.labels,
				datasets: [{ 
					data: this.state.data,
					label: "Events/Participants",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
				}
				]
			},
		});


	}
	render() {
		return (
			<div>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
			)
	}
}
