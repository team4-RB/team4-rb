document.addEventListener('DOMContentLoaded', function () {
  var lines = [
    { id: 'all', name: '전체', lineImg: 'subway_allline_img', stationListId: 'allline_station' },
    { id: 'line2', name: '2호선', lineImg: 'subway_line2_img', stationListId: 'line2_stations' },
    { id: 'line3', name: '3호선', lineImg: 'subway_line3_img', stationListId: 'line3_stations' },
    { id: 'line4', name: '4호선', lineImg: 'subway_line4_img', stationListId: 'line4_stations' },
    { id: 'line7', name: '7호선', lineImg: 'subway_line7_img', stationListId: 'line7_stations' },
    { id: 'line9', name: '9호선', lineImg: 'subway_line9_img', stationListId: 'line9_stations' },
    { id: 'dxline', name: '신분당선', lineImg: 'subway_dxline_img', stationListId: 'dxline_stations' }
  ];

  var mapDivs = document.querySelectorAll('.map_section div');
  var stationInfo = document.querySelector('.station_info');
  var buttons = document.querySelectorAll('.subway_subwayLine button');

  document.getElementById('all').classList.add('selected-btn');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var clickedId = button.id;
      var currentLine = null;

      for (var i = 0; i < lines.length; i++) {
        if (lines[i].id === clickedId) {
          currentLine = lines[i];
          break;
        }
      }

      if (currentLine === null) {
        return;
      }
      buttons.forEach(function (btn) {
        btn.classList.remove('selected-btn');
      });
      button.classList.add('selected-btn');

      for (var j = 0; j < mapDivs.length; j++) {
        mapDivs[j].style.display = 'none';
      }
      var showMap = document.querySelector('.' + currentLine.lineImg);
      if (showMap) {
        showMap.style.display = 'block';
      }

      for (var k = 0; k < lines.length; k++) {
        var listDiv = document.getElementById(lines[k].stationListId);
        if (listDiv) {
          listDiv.style.display = 'none';
        }
      }

      var showList = document.getElementById(currentLine.stationListId);
      if (showList) {
        showList.style.display = 'block';
      }

      var stations = showList.querySelectorAll('.station_name');
      stations.forEach(function (station) {
        station.onclick = function () {
          var name = station.textContent();
          stationInfo.innerHTML = "";
        };
      });
    })
    document.getElementById("all").click();
  });
});