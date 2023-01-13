function switchTheme() {
    let checkbox = document.querySelector('.switchThemeBtn');
    if (checkbox.classList.contains('unselected')) {
        localStorage.setItem('Theme', 'dark');

        checkbox.classList.remove('unselected');
        checkbox.classList.add('selected');

        document.querySelectorAll('.lightTheme').forEach((item) => {
            item.classList.remove('lightTheme');
            item.classList.add('darkTheme');
        })

        document.querySelectorAll('.dashboardFontLight').forEach((item) => {
            item.classList.remove('dashboardFontLight');
            item.classList.add('dashboardFontDark');
        })

        document.querySelectorAll('.fontLightTheme').forEach((item) => {
            item.classList.remove('fontLightTheme');
            item.classList.add('fontDarkTheme');
        })

        document.querySelector('.dashboard').classList.remove('dashboardLight');
        document.querySelector('.dashboard').classList.add('dashboardDark');

        document.querySelector('.sidebar').style.borderRight = '1px solid #111';

        document.querySelectorAll('.accordionLight').forEach((item) => {
            item.classList.remove('accordionLight');
            item.classList.add('accordionDark');
        })

        document.querySelectorAll('.accordionBtnLight').forEach((item) => {
            item.classList.remove('accordionBtnLight');
            item.classList.add('accordionBtnDark')
        })

    } else if (checkbox.classList.contains('selected')) {
        localStorage.setItem('Theme', '');

        checkbox.classList.remove('selected');
        checkbox.classList.add('unselected');

        document.querySelectorAll('.darkTheme').forEach((item) => {
            item.classList.remove('darkTheme');
            item.classList.add('lightTheme');
        })

        document.querySelectorAll('.dashboardFontDark').forEach((item) => {
            item.classList.remove('dashboardFontDark');
            item.classList.add('dashboardFontLight');
        })

        document.querySelectorAll('.fontDarkTheme').forEach((item) => {
            item.classList.remove('fontDarkTheme');
            item.classList.add('fontLightTheme');
        })

        document.querySelector('.dashboard').classList.remove('dashboardDark');
        document.querySelector('.dashboard').classList.add('dashboardLight');

        document.querySelector('.sidebar').style.borderRight = '1px solid #ddd'

        document.querySelectorAll('.accordionDark').forEach((item) => {
            item.classList.remove('accordionDark');
            item.classList.add('accordionLight');
        })

        document.querySelectorAll('.accordionBtnDark').forEach((item) => {
            item.classList.remove('accordionBtnDark');
            item.classList.add('accordionBtnLight')
        })

    }
}

document.addEventListener('DOMContentLoaded', () => {
    let theme = localStorage.getItem('Theme');
    let checkbox = document.querySelector('.switchThemeBtn');
    if (theme) {
        checkbox.setAttribute('checked', '');

        checkbox.classList.remove('unselected');
        checkbox.classList.add('selected');

        document.querySelectorAll('.lightTheme').forEach((item) => {
            item.classList.remove('lightTheme');
            item.classList.add('darkTheme');
        })

        document.querySelectorAll('.dashboardFontLight').forEach((item) => {
            item.classList.remove('dashboardFontLight');
            item.classList.add('dashboardFontDark');
        })

        document.querySelectorAll('.fontLightTheme').forEach((item) => {
            item.classList.remove('fontLightTheme');
            item.classList.add('fontDarkTheme');
        })

        document.querySelector('.dashboard').classList.remove('dashboardLight');
        document.querySelector('.dashboard').classList.add('dashboardDark');

        document.querySelector('.sidebar').style.borderRight = '1px solid #111';

        document.querySelectorAll('.accordionLight').forEach((item) => {
            item.classList.remove('accordionLight');
            item.classList.add('accordionDark');
        })

        document.querySelectorAll('.accordionBtnLight').forEach((item) => {
            item.classList.remove('accordionBtnLight');
            item.classList.add('accordionBtnDark')
        })
    }
})

const menuOp = document.querySelector('.menuOpener');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sideBarCloseBtn');
const backDrop = document.querySelector('.backDrop');

menuOp.addEventListener('click', () => {
    let sidebarPos = sidebar.getBoundingClientRect();
    if (sidebarPos.left === -300) {
        sidebar.style.marginLeft = '0';
        menuOp.style.opacity = '0';
        menuOp.style.cursor = 'auto'
        backDrop.style.display = 'block';
        setTimeout(() => {
            backDrop.style.opacity = '0.5';
        })
    }
})

closeBtn.addEventListener('click', () => {
    if (sidebar.style.marginLeft === '0px') {
        sidebar.style.removeProperty('margin-left');
        menuOp.style.opacity = '1';
        menuOp.style.cursor = 'pointer'
        backDrop.style.opacity = '0';
        backDrop.style.display = 'none';
    }
})

backDrop.addEventListener('click', () => {
    sidebar.style.removeProperty('margin-left');
    menuOp.style.opacity = '1';
    menuOp.style.cursor = 'pointer'
    backDrop.style.opacity = '0';
    backDrop.style.display = 'none';
})

var options01 = {
    series: [{
        name: 'Inflation',
        data: [5.4, 2.3, 4.5, 10.1, 6.7, 4.5, 2.5, 5.6, 1.4, 0.8, 2.3, 4.5]
    }],
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#000"]
        }
    },

    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            }
        }

    },
    title: {
        text: '',
    },
    theme: {
        palette: 'palette2'
    }
};

var chart = new ApexCharts(document.querySelector(".graph01"), options01);
chart.render();