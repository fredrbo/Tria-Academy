import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'node_modules/chart.js';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    Chart.register(...registerables)
  }

  @ViewChild("numberAccess", { static: true }) numberAccess: ElementRef;
  @ViewChild("timeAccess", { static: true }) timeAccess: ElementRef;
  @ViewChild("download", { static: true }) download: ElementRef;

  ngOnInit(): void {
    new Chart(this.numberAccess.nativeElement, {
      type: 'line',
      options: {
        scales: {
          x: {
            ticks: {
              color: "black"
            }
          },
          y: {
            weight: 20,
            max: 500,
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: "black",
              count: 6
            }
          }

        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 0
          }
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 10,
              padding: 25,
              pointStyle: "circle",
              usePointStyle: true,

            }
          }
        }
      },
      data: {
        labels: ["", "03/10", "04/10", "05/10", "06/10", "07/10", "08/10"],
        datasets: [
          {
            data: [60, 10, 100, 120, 320, 220, 280],
            borderColor: "#1DF84D",
            backgroundColor: "#1DF84D",
            label: "Global"
          },
          {
            data: [0, 180, 220, 170, 380, 320, 450],
            borderColor: "#FF8F84",
            backgroundColor: "#FF8F84",
            label: "Brasil"
          },
          {
            data: [130, 270, 180, 220, 150, 390, 320],
            borderColor: "#8FC0FF",
            backgroundColor: "#8FC0FF",
            label: "Bulgária",

          },
        ]
      }
    });

    new Chart(this.timeAccess.nativeElement, {
      type: 'line',
      options: {
        scales: {
          x: {
            ticks: {
              color: "black"
            }
          },
          y: {
            //  max: 130,
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: "black",
              stepSize: 30,
              callback: function (value: number) {
                return this.getLabelForValue(value) + 'h'
              }

            }
          }

        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 0,
            backgroundColor: "#fff"
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      },
      data: {
        labels: ["", "Jan.", "Fev.", "Mar.", "Abr.", "Mai.", "Jun."],
        datasets: [
          {
            data: [8, 31, 7, 28, 119, 10, 33],
            borderColor: "#8FC0FF",
          }
        ]
      }


    });

    new Chart(this.download.nativeElement, {
      type: 'line',
      options: {
        scales: {
          x: {
            ticks: {
              color: "black"
            }
          },
          y: {
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: "black",
              stepSize: 100,
              // count: 6,
            }
          }

        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 0,
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      },
      data: {
        labels: ["", "Jan.", "Fev.", "Mar.", "Abr.", "Mai.", "Jun."],
        datasets: [
          {
            data: [30, 195, 270, 190, 430, 410, 480],
            borderColor: "#FF8F84",
          }
        ]
      }


    });
  }

  openFilter(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '350px'
    });

  }

}
