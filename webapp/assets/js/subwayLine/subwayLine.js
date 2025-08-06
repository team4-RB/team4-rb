document.addEventListener('DOMContentLoaded', function () {
  const lines = [
    { id: 'all', name: '전체', mapClass: 'subway_allline_img', stationListId: 'allline_station' },
    { id: 'line2', name: '2호선', mapClass: 'subway_line2_img', stationListId: 'line2_stations' },
    { id: 'line3', name: '3호선', mapClass: 'subway_line3_img', stationListId: 'line3_stations' },
    { id: 'line4', name: '4호선', mapClass: 'subway_line4_img', stationListId: 'line4_stations' },
    { id: 'line7', name: '7호선', mapClass: 'subway_line7_img', stationListId: 'line7_stations' },
    { id: 'line9', name: '9호선', mapClass: 'subway_line9_img', stationListId: 'line9_stations' },
    { id: 'dxline', name: '신분당선', mapClass: 'subway_dxline_img', stationListId: 'dxline_stations' }
  ];

  const mapDivs = document.querySelectorAll('.map_section div');
  const stationInfo = document.querySelector('.station_info');
  const buttons = document.querySelectorAll('.subway_subwayLine button');

  document.getElementById('all').classList.add('selected-btn');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const clickedId = button.id;
      let currentLine = null;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].id === clickedId) {
          currentLine = lines[i];
          break;
        }
      }

      if (!currentLine) return;

      buttons.forEach(function (btn) {
        btn.classList.remove('selected-btn');
      });
      button.classList.add('selected-btn');

      mapDivs.forEach(div => {
        div.style.display = 'none';
      });

      for (let i = 0; i < lines.length; i++) {
        const listDiv = document.getElementById(lines[i].stationListId);
        if (listDiv) {
          listDiv.style.display = 'none';
        }
      }

      const showList = document.getElementById(currentLine.stationListId);

      stationInfo.innerHTML = '요 역을 클릭하면 정보가 나옵니다.';
    });
  });

  document.getElementById('all').click();
});
