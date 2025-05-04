document.addEventListener('DOMContentLoaded', function () {
  var url_string = window.location.href
  var url = new URL(url_string);
  var show = url.searchParams.get('show');
  if (show == 1) {
    var div = document.getElementsByClassName('phoneHide');
    div[0].style.display = 'block';

    var div = document.getElementsByClassName('phoneShow');
    div[0].style.display = 'none';

    var link = document.getElementsByClassName('download-cv');
    link[0].style.display = 'none';

  }
  var phoneHide = document.getElementById('phoneHide');
  var phoneShow = document.getElementById('phoneShow');
  phoneShow.onclick = function () {
    phoneHide.style.display = 'block';
    phoneShow.style.display = 'none';
  };
});
$(".logo").hover(
  function () {
    $(this).append($("<p>#OPENTOSTUDY</p>"));
  }, function () {
    $(this).find("p").last().remove();
  }
);

$(document).ready(function () {
  $("#hide").click(function () {
    $(".download-cv").hide();
  });
});