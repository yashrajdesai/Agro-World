import React, {useState} from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { Container, Row, Col } from 'react-bootstrap';

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'weekly', selectedOpt: 'weekly'};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({selectedOpt: event.target.value});
      }

    render()
    {
    const { selectedOpt } = this.state;
    const optionspieweekly = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR)"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: [
                { y: 48.2, label: "Cereal And Pulses" },
                { y: 27.1, label: "Fruits" },
                { y: 24.5, label: "Vegetables" }
            ]
        }]
    }

    const optionspiemonthly = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR)"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: [
                { y: 44.3, label: "Cereal And Pulses" },
                { y: 25.4, label: "Fruits" },
                { y: 30.3, label: "Vegetables" }
            ]
        }]
    }

    const optionspieyearly = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR)"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: [
                { y: 40.7, label: "Cereal And Pulses" },
                { y: 23.1, label: "Fruits" },
                { y: 35.6, label: "Vegetables" }
            ]
        }]
    }

    const optionsbarweekly = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR) V/S Category"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { label: "Cereal And Pulses", y: 4000 },
                { label: "Fruits", y: 2245 },
                { label: "Vegetables", y: 2030 }
            ]
        }]
    }

    const optionsbarmonthly = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR) V/S Category"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { label: "Cereal And Pulses", y: 3800 },
                { label: "Fruits", y: 2005 },
                { label: "Vegetables", y: 2310 }
            ]
        }]
    }

    const optionsbaryearly = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR) V/S Category"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { label: "Cereal And Pulses", y: 3670 },
                { label: "Fruits", y: 1985 },
                { label: "Vegetables", y: 2640 }
            ]
        }]
    }

    return (
        <div>
            <h1 className="text-center my-4 heading">Statistics</h1>
                <Container>
                <Row className="justify-content-md-center">
                    <Col>
                    <div className="text-center statsSelector">
                        <label> Sales   
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option selected value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </label>
                    </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col xs={12} md={6}>
                        <div className="pie-chart">
                           { selectedOpt && selectedOpt === "weekly" ? (
                                <CanvasJSChart options = {optionspieweekly}/>
                              ) : selectedOpt && selectedOpt === "monthly" ? (
                                 <CanvasJSChart options = {optionspiemonthly}/> 
                              ) : selectedOpt && selectedOpt === "yearly" ? (
                                    <CanvasJSChart options = {optionspieyearly}/>
                              ) : <CanvasJSChart options = {optionspieweekly}/>
                            }
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="pie-chart">
                        { selectedOpt && selectedOpt === "weekly" ? (
                                <CanvasJSChart options = {optionsbarweekly}/>
                              ) : selectedOpt && selectedOpt === "monthly" ? (
                                 <CanvasJSChart options = {optionsbarmonthly}/> 
                              ) : selectedOpt && selectedOpt === "yearly" ? (
                                    <CanvasJSChart options = {optionsbaryearly}/>
                              ) : <CanvasJSChart options = {optionsbarweekly}/>
                            }
                        </div>
                    </Col>
                </Row>
                </Container>
        </div>
    );
    }
}

export default Statistics;