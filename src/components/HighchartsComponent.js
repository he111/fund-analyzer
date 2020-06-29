import React, {useState, useEffect} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../../src/App.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";


function HighChartsComponent() {
    const [data, setData] = useState([]);
    useEffect(()=>{
    const fetchData = async () => {
        await axios.get(
          `https://my-json-server.typicode.com/he111/simple-JSON-server/profile`
        )
        .then((res) => {
          const datum = res.data;
          console.log(datum[0].data);
          this.setState({ data: datum[0].data });
          console.log(this.state.data);
        });
    }
    fetchData();
    },[]);
    const options = {
      chart: {
        type: "column",
        width: 800,
      },
      title: {
        text: "Potential Cost Over Time",
        align: "left",
      },
      series: [
        {
          name: "Annual Operating Expense",
          data: this.state.data,
          //   [
          //     0,
          //     0.1,
          //     0.32,
          //     0.33,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //     0.45,
          //   ],
        },
        { name: "Front-End Sales Charges" },
        { name: "Back-End Sales Charges" },
        { name: "Potential Redemption Fees" },
      ],
      xAxis: {
        allowDecimals: false,
        title: {
          text: "Year",
        },
        categories: [
          "0",
          "0-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          format: "{value}%",
          // step:2.5,
        },
        max: 10,
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow: true,
      },
      tooltip: {
        formatter: function () {
          return (
            "Year: " +
            this.point.x +
            "<br/>Annual Operating Expenses:" +
            this.point.y +
            "%"
          );
        },
      },
    };
    
    return (
      <div id="highcharts" >
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div className="warning">
          <FontAwesomeIcon
            className="fa-exclamation-triangle"
            icon={faExclamationTriangle}
          />
            <span>
                <strong>Account Wrap &amp; Flat Fees:</strong>
                These account-based fees may be charged in addition to fund fees
                as a percentage-based or flat-fee or both. They can have a
                significant impact on your overall returns. Use our advanced
                options to analyze wrap and flat fees.
            </span>
          </div>
      </div>
    );
}

export default HighChartsComponent
