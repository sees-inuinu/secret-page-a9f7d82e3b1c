//スムーススクロール
$(() => {
  $('a[href^="#"]').click(function () {
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top;
    const speed = 500;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });
});

//PCメニュー
$(() => {
  $(window).on("load scroll resize", () => {
    const st = $(window).scrollTop();
    const wh = $(window).height();

    $(".sec-scroll-point").each(function (i) {
      const tg = $(this).offset().top;
      const id = $(this).attr("id");

      if (st > tg - wh + wh / 2) {
        $(".header__link").removeClass("is-active");
        const link = $(`.header__link[href *= ${id}]`);
        $(link).addClass("is-active");
      }
    });
  });
});
