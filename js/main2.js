(function ($) {
  $(window).on("load", function () {
    var masonryGrid = $(".grid");
    masonryGrid.imagesLoaded(function () {
      masonryGrid.masonry({
        itemSelector: ".tableList",
        percentPosition: true
      });
    });
  });
  $(document).on("click", ".burger", function () {
    $(".burger").toggleClass("close");
    $("#menu").toggleClass("show");
  });
})(jQuery);
