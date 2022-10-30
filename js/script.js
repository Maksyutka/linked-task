function placeholderAnimationInit() {
  $(".main__form-input").focus(function () {
    $(this).parents(".main__form-wrapper").addClass("focused");
  });

  $(".main__form-input").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".main__form-wrapper").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });
}

function passwordInputHandleInit() {
  $(".main__form-change-btn").click(function (e) {
    e.preventDefault();
    if ($(this).text() === "Показать") {
      $(this).text("Скрыть");
      $(".main__form-input_pass").get(0).type = "text";
    } else if ($(this).text() === "Скрыть") {
      e.preventDefault();
      $(this).text("Показать");
      $(".main__form-input_pass").get(0).type = "password";
    }
  });
}

function jobAccorrdeomInit() {
  $(".job__toggle").click(function () {
    $(".job__list").toggleClass("visible");

    if ($(".job__toggle-text").text() === "Показать") {
      $(".job__toggle-text").text("Скрыть");
      $(".job__toggle").addClass("active");
    } else if ($(".job__toggle-text").text() === "Скрыть") {
      $(".job__toggle-text").text("Показать");
      $(".job__toggle").removeClass("active");
    }
  });
}

function sliderInit() {
  $(".container_slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".slider-block__btn_prev"),
    nextArrow: $(".slider-block__btn_next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $(".container_slider").on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide === 0) {
      $(".slider-block__btn_prev").addClass("disabled");
    } else if (slick.$slides.length - 1 == currentSlide) {
      $(".slider-block__btn_next").addClass("disabled");
    } else {
      $(".slider-block__btn").removeClass("disabled");
    }
  });
}

function dropdownInit() {
  $(".topics__list").hide();

  $(".topics__dropdown").click(function () {
    $(this).toggleClass("active");
    $(".topics__list").slideToggle(300);
  });
}

function langDropdownInit() {
  $(".footer__lang").click(function () {
    $(this).toggleClass("active");
    $(".lang-dropdown").fadeToggle(300);
  });
}

$(document).ready(function () {
  placeholderAnimationInit();
  passwordInputHandleInit();
  jobAccorrdeomInit();
  sliderInit();
  dropdownInit();
  langDropdownInit();
});
