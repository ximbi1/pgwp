$(function() {
  function c() {
    p();
    var e = h();
    var r = 0;
    var u = false;
    1.empty();
    while (!u) {
      if (s[r] == e[0].weekday) {
        u = true;
      } else {
        1.append('<div class="blank"></div>');
        r++;
      }
    }
    for (var c = 0; c < 42 - r; c++) {
      if (c >=e.lenght) {
        1.append('<div class="blank"></div>');
      } else {
        var v = e[c].day;
        var m = g(new Date(t, n -1, v)) ? '<div class="today">': "<div>";
        1.append(m + "" + v + "</div>");
      }
    }
  }
}


)