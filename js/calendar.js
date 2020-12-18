function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Calendar2(id, year, month) {
  var Dlast = new Date(year, month + 1, 0).getDate(),
    D = new Date(year, month, Dlast),
    DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
    calendar = '<tr>',
    month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  if (DNfirst != 0) {
    for (var i = 1; i < DNfirst; i++) calendar += '<td>';
  } else {
    for (var i = 0; i < 6; i++) calendar += '<td>';
  }
  for (var i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    } else {
      calendar += '<td>' + i;
    }
    if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#' + id + ' tbody').innerHTML = calendar;
  document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
}

function Calendar3(id, year, month) {
  var Dlast = new Date(year, month + 1, 0).getDate(),
    D = new Date(year, month, Dlast),
    DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
    calendar = '<tr>',
    month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  if (DNfirst != 0) {
    for (var i = 1; i < DNfirst; i++) calendar += '<td>';
  } else {
    for (var i = 0; i < 6; i++) calendar += '<td>';
  }
  for (var i = 1; i <= Dlast; i++) {
      var x = getRandomInt(6);
      if((i+DNfirst)%7 == 1){
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
          calendar += '<td class="today a6">' + i + '<span class="tooltiptext">Пар нет</span>';
        } else {
          calendar += '<td class="num a6">' + i + '<span class="tooltiptext">Пар нет</span>';
        }
      }
      else {
        switch (x) {
          case 0:
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
              calendar += '<td class="today a1">' + i + '<span class="tooltiptext">9:00-19:30</span>';
            } else {
              calendar += '<td class="num a1">' + i + '<span class="tooltiptext">9:00-19:30</span>';
            }
            break;

          case 1:
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
              calendar += '<td class="today a2">' + i + '<span class="tooltiptext">9:00-16:20</span>';
            } else {
              calendar += '<td class="num a2">' + i + '<span class="tooltiptext">9:00-16:20</span>';
            }
            break

          case 2:
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
              calendar += '<td class="today a3">' + i + '<span class="tooltiptext">10:40-16:20</span>';
            } else {
              calendar += '<td class="num a3">' + i + '<span class="tooltiptext">10:40-16:20</span>';
            }
            break

          case 3:
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
              calendar += '<td class="today a4">' + i + '<span class="tooltiptext">14:20-19:30</span>';
            } else {
              calendar += '<td class="num a4">' + i + '<span class="tooltiptext">14:20-19:30</span>';
            }
            break

          case 4:
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
              calendar += '<td class="today a5">' + i + '<span class="tooltiptext">9:00-10:30</span>';
            } else {
              calendar += '<td class="num a5">' + i + '<span class="tooltiptext">9:00-10:30</span>';
            }
            break

          case 5:
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
              calendar += '<td class="today a6">' + i + '<span class="tooltiptext">Пар нет</span>';
            } else {
              calendar += '<td class="num a6">' + i + '<span class="tooltiptext">Пар нет</span>';
            }
            break

          default:
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
              calendar += '<td class="today">' + i;
            } else {
              calendar += '<td class="num">' + i;
            }
        }
      }
    if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#' + id + ' tbody').innerHTML = calendar;
  document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
}

window.onload = function () {
  Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
  // переключатель минус месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
  }
  // переключатель плюс месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
  }



  Calendar3("calendar3", new Date().getFullYear(), new Date().getMonth());
  // переключатель минус месяц
  document.querySelector('#calendar3 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar3("calendar3", document.querySelector('#calendar3 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar3 thead td:nth-child(2)').dataset.month) - 1);
  }
  // переключатель плюс месяц
  document.querySelector('#calendar3 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar3("calendar3", document.querySelector('#calendar3 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar3 thead td:nth-child(2)').dataset.month) + 1);
  }
}
