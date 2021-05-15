import React, {useState} from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { Container, Row, Col } from 'react-bootstrap';
import { useStateValue } from "../StateProvider";

function Statistics() {

    const [value, setValue] = useState('weekly');
    const [{user,userId},dispatch] = useStateValue();
    console.log(user)
    const handleChange = e => {
        setValue(e.target.value)
    }

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
                { label: "Cereal And Pulses", y: 38000 },
                { label: "Fruits", y: 20050 },
                { label: "Vegetables", y: 23100 }
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
                { label: "Cereal And Pulses", y: 367000 },
                { label: "Fruits", y: 198500 },
                { label: "Vegetables", y: 264000 }
            ]
        }]
    }

    // const optionspiesitemonthly = {
    //     animationEnabled: true,
    //     exportEnabled: true,
    //     theme: "light2", // "light1", "dark1", "dark2"
    //     title:{
    //         text: "Transaction Amount(in INR)"
    //     },
    //     data: [{
    //         type: "pie",
    //         indexLabel: "{label}: {y}%",		
    //         startAngle: -90,
    //         dataPoints: [
    //             { y: 50, label: "Cereal And Pulses" },
    //             { y: 20, label: "Fruits" },
    //             { y: 30, label: "Vegetables" }
    //         ]
    //     }]
    // }

    // const optionspiesiteyearly = {
    //     animationEnabled: true,
    //     exportEnabled: true,
    //     theme: "light2", // "light1", "dark1", "dark2"
    //     title:{
    //         text: "Transaction Amount(in INR)"
    //     },
    //     data: [{
    //         type: "pie",
    //         indexLabel: "{label}: {y}%",		
    //         startAngle: -90,
    //         dataPoints: [
    //             { y: 40.4, label: "Cereal And Pulses" },
    //             { y: 23.9, label: "Fruits" },
    //             { y: 35.7, label: "Vegetables" }
    //         ]
    //     }]
    // }

    const optionsbarsitemonthly = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Transaction Amount(in INR) Per Category V/S Month"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "line", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            name: "Cereal And Pulses", 
            xValueFormatString: "MMMM",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2021, 0), y: 38000 },
                { x: new Date(2021, 1), y: 37050 },
                { x: new Date(2021, 2), y: 40100 },
                { x: new Date(2021, 3), y: 39090 },
                { x: new Date(2021, 4), y: 37550 },
                { x: new Date(2021, 5), y: 39200 },
                { x: new Date(2021, 6), y: 38200 },
                { x: new Date(2021, 7), y: 39510 },
                { x: new Date(2021, 8), y: 37400 },
                { x: new Date(2021, 9), y: 35800 },
                { x: new Date(2021, 10), y: 40500 },
                { x: new Date(2021, 11), y: 36700 }
            ]
        },
        {
            type: "line", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            name: "Fruits", 
            showInLegend: true,
            dataPoints: [
                { x: new Date(2021, 0), y: 21000 },
                { x: new Date(2021, 1), y: 20050 },
                { x: new Date(2021, 2), y: 22000 },
                { x: new Date(2021, 3), y: 21000 },
                { x: new Date(2021, 4), y: 23650 },
                { x: new Date(2021, 5), y: 20900 },
                { x: new Date(2021, 6), y: 19850 },
                { x: new Date(2021, 7), y: 22250 },
                { x: new Date(2021, 8), y: 23400 },
                { x: new Date(2021, 9), y: 21700 },
                { x: new Date(2021, 10), y: 21350 },
                { x: new Date(2021, 11), y: 24000 }
            ]
        },
        {
            type: "line", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            name: "Vegetables", 
            showInLegend: true,
            dataPoints: [
                { x: new Date(2021, 0), y: 23800 },
                { x: new Date(2021, 1), y: 26050 },
                { x: new Date(2021, 2), y: 23100 },
                { x: new Date(2021, 3), y: 27400 },
                { x: new Date(2021, 4), y: 25650 },
                { x: new Date(2021, 5), y: 24700 },
                { x: new Date(2021, 6), y: 24600 },
                { x: new Date(2021, 7), y: 22750 },
                { x: new Date(2021, 8), y: 21100 },
                { x: new Date(2021, 9), y: 23700 },
                { x: new Date(2021, 10), y: 25000 },
                { x: new Date(2021, 11), y: 24010 }
            ]
        }
        ]
    }
    
    const optionsbarsiteyearly = {
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
            type: "bar", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            name: "Cereal And Pulses", 
            showInLegend: true,
            dataPoints: [
                { label: "2020", y: 436800 },
                { label: '2021', y: 459100 }
            ]
        },{
            type: "bar", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            name: "Fruits", 
            showInLegend: true,
            dataPoints: [
                { label: "2020", y: 247820 },
                { label: '2021', y: 261150}
          ]
        },
        {
            type: "bar", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            name: "Vegetables", 
            showInLegend: true,
            dataPoints: [
                { label: "2020", y: 284510 },
                { label: '2021', y: 291860}
            ]
        }
    ]
    }

    const optionsbarsitemonthlyvisits = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Total Visits Per Month"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "spline", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside", 
            xValueFormatString: "MMMM",
        
            dataPoints: [
                { x: new Date(2021, 0), y: 15 },
                { x: new Date(2021, 1), y: 60 },
                { x: new Date(2021, 2), y: 102 },
                { x: new Date(2021, 3), y: 120 },
                { x: new Date(2021, 4), y: 155 },
                { x: new Date(2021, 5), y: 178 },
                { x: new Date(2021, 6), y: 192 },
                { x: new Date(2021, 7), y: 130 },
                { x: new Date(2021, 8), y: 174 },
                { x: new Date(2021, 9), y: 185 },
                { x: new Date(2021, 10), y: 240 },
                { x: new Date(2021, 11), y: 210 }
            ]
        }        
        ]
    }
    
    const optionsbarsiteyearlyvisits = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Total Visits Per Year"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { label: "2020", y: 1243 },
                { label: '2021', y: 1761 }
            ]
        }
    ]
    }

    return (
        <div>
            <h1 className="text-center my-4 heading">Personal Statistics</h1>
                <Container>
                <Row className="justify-content-md-center">
                    <Col>
                    <div className="text-center statsSelector">
                        <label> Sales   
                            <select onChange={handleChange}>
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
                            { value && value === "weekly" ? (
                                <CanvasJSChart options = {optionspieweekly}/>
                              ) : value && value === "monthly" ? (
                                 <CanvasJSChart options = {optionspiemonthly}/> 
                              ) : value && value === "yearly" ? (
                                    <CanvasJSChart options = {optionspieyearly}/>
                              )  
                          : <CanvasJSChart options = {optionspieweekly}/>}
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="pie-chart">
                        { value && value === "weekly" ? (
                                <CanvasJSChart options = {optionsbarweekly}/>
                              ) : value && value === "monthly" ? (
                                 <CanvasJSChart options = {optionsbarmonthly}/> 
                              ) : value && value === "yearly" ? (
                                    <CanvasJSChart options = {optionsbaryearly}/>
                              ) 
                        : <CanvasJSChart options = {optionsbarweekly}/>}
                        </div>
                    </Col>
                </Row>
                </Container>

                <h1 className="text-center my-4 heading">Site Statistics</h1>
                <Container>
                <Row className="justify-content-md-center">
                    <Col>
                    <div className="text-center statsSelector">
                        <label> Sales   
                            <select onChange={handleChange}>
                                <option selected value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </label>
                    </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col xs={12} md={12}>
                        <div className="site-chart">
                        { value && value === "monthly" ? (
                                 <CanvasJSChart options = {optionsbarsitemonthly}/> 
                              ) : value && value === "yearly" ? (
                                    <CanvasJSChart options = {optionsbarsiteyearly}/>
                              ) 
                        : <CanvasJSChart options = {optionsbarsitemonthly}/>}
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col xs={12} md={12}>
                        <div className="site-chart">
                        { value && value === "monthly" ? (
                                 <CanvasJSChart options = {optionsbarsitemonthlyvisits}/> 
                              ) : value && value === "yearly" ? (
                                    <CanvasJSChart options = {optionsbarsiteyearlyvisits}/>
                              ) 
                        : <CanvasJSChart options = {optionsbarsitemonthlyvisits}/>}
                        </div>
                    </Col>
                </Row>
                </Container>
        </div>
    );
    }

export default Statistics;