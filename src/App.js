import logo from './logo.svg';
import './App.scss';
import Chart from './component/Chart';
import React from "react";
import ReactDOM from "react-dom";
import mask from './assets/images/mask.png'
import watch from './assets/images/watch.png'
import { Doughnut, Bar, Line } from 'react-chartjs-2';
class App extends React.Component {
  state = {
    chartData: {}
  };

  UNSAFE_componentWillMount() {
    this.getChartData();
  }


  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            //backgroundColor:'green',
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        {/* <h1>React &amp; Chart.js</h1> */}
        <div className="section1">
          <div className="company">Diycam</div>
          <div className="date">20-08-2021</div>
        </div>
        <div className="section2">
          <div className="visitors">
            <div className="container">
              <div className="graph-header">
                Total Visitors
              </div>
              <div className="flex">
                <img src={mask} alt="" className='icon' />
                <span className='count'>124</span>
              </div>
            </div>

            <div className="container">
              <div className="graph-header">
                Average Visit Duration
              </div>
              <div className="flex">
                <img src={watch} alt="" className='icon' />
                <span className='count'>26min</span>
              </div>
            </div>
          </div>
          <div className="customers">
            <div className="container">
              <div className="graph-header">
                Returning customers
              </div>
              <div className="graph">
                <div className="pie">
                  <Doughnut
                    data={this.state.chartData}
                    options={{
                      plugins: {
                        legend: {
                          display: false
                        },
                      },
                      title: {
                        // display: props.displayTitle,
                        text: "Largest Cities in Massachusetts",
                        fontSize: 25
                      },
                      legend: {
                        display: false,
                        position: false,
                        labels: {
                          fontColor: "#000"
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="data">
                    <p>New</p>
                    <p className='count'>40%</p>
                  </div>

                  <div className="data">
                    <p>Returning</p>
                    <p className='count'>60%</p>
                  </div></div>
              </div>

            </div>
          </div>
          <div className="peak">
            <div className="container">
              <div className="graph-header">
                Peak Hour
              </div>
              <div className="flex">
                <img src={mask} alt="" className='icon' />
                <span className='count'>12PM</span>
              </div>
            </div>

            <div className="container">
              <div className="graph-header">
                Lowest Hour
              </div>
              <div className="flex">
                <img src={watch} alt="" className='icon' />
                <span className='count'>9AM</span>
              </div>
            </div>
          </div>
        </div>
        {/* <Chart chartData={this.state.chartData} displayLegend={false} /> */}

        <div className="section3">
          <div className="bar">
            <div className="graph-header">
              Duration
            </div>
            <Bar
              data={this.state.chartData}
              options={{
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false
                  },
                },
                indexAxis: "y",
                title: {
                  display: false,
                  text: "Largest Cities in Massachusetts",
                  fontSize: 25
                },
                legend: {
                  display: false,
                  position: false,
                  labels: {
                    fontColor: "#000"
                  }
                }
              }}
            />
          </div>
          <div className="wave">
            <div className="graph-header">
              Outside Opportunity
            </div>
            <Line
              data={this.state.chartData}
              options={{
                plugins: {
                  legend: {
                    display: false
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                  },
                },
                title: {
                  display: false,
                  text: "Largest Cities in Massachusetts",
                  fontSize: 25
                },
                legend: {
                  display: false,
                  position: false,
                  labels: {
                    fontColor: "#000"
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
