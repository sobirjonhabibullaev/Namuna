  google.charts.load('current', {packages: ['corechart']});
  google.charts.load("current", {packages:["calendar"]});
  google.charts.setOnLoadCallback(drawChart3);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart1);
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Bomdod',     11],
          ['Peshin',      2],
          ['Asr',  2],
          ['Shom', 2],
          ['Xufton',    7],
          ['Vitr', 2],
          ["Ro'za", 2]
        ]);

        var options = {
          title: "Qazo namozlari miqdoriy ko'rsatkichlari",
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

 	    
    function drawChart() {
  		var data = google.visualization.arrayToDataTable([
        ['','Bomdod', 'Peshin', 'Asr', 'Shom', 'Xufton',
         'Vitr', "Ro'za", { role: 'annotation' } ],
        ["Samarali hafta", 10, 24, 20, 32, 18, 5,2, ""],
        ['Joriy hafta', 16, 22, 23, 30, 16, 9, 2,''],
        ['Eng samarasiz hafta', 28, 19, 29, 30, 12, 13,2, '']
      ]);

      var options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      }; 
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(data, options);
  }

  function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ['Ibodatlar', 'Miqdor'],
        ['Bomdod',     11],
        ['Peshin',      2],
        ['Asr',  2],
        ['Shom', 2],
        ['Xufton',    7]
      ]);

      var options = {
        title: 'My Daily Activities',
        pieHole: 0.5,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

      

   function drawChart3() {
      
       var dataTable = new google.visualization.DataTable();
       
       dataTable.addColumn({ type: 'date', id: 'Date' });
       dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
       dataTable.addRows([
          [ new Date(2020, 3, 13), 370 ],
          [ new Date(2020, 3, 14), 360 ],
          [ new Date(2020, 3, 15), 380 ],
          [ new Date(2020, 3, 16), 388 ],
          [ new Date(2020, 3, 17), 382 ],
          // Many rows omitted for brevity.

        ]);

        

       var options = {
        title: 'Yil Davomidagi',
        height: 500,

        calendar: {
          daysOfWeek: "DSChPJSY",
          cellSize: 20,
          underYearSpace: 20, // Bottom padding for the year labels.

          yearLabel: {
            fontName: 'Times-Roman',
            fontSize: 64,
            color: '#1A8763',
            bold: true,
            italic: true
          },
          monthLabel: {
            fontName: 'Times-Roman',
            fontSize: 24,
            color: '#981b48',
            bold: true,
            italic: true
          },
          monthOutlineColor: {
            stroke: '#981b48',
            strokeOpacity: 0.8,
            strokeWidth: 4
          },
          unusedMonthOutlineColor: {
            stroke: '#bc5679',
            strokeOpacity: 0.8,
            strokeWidth: 2
          },
          underMonthSpace: 32,
        }
      };

      var visualization = new google.visualization.Calendar(document.getElementById('calendar_basic'));
      visualization.draw(dataTable, options);
   }