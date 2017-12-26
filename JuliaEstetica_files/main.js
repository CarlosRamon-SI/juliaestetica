$(document).ready(function () {
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
});

$(document).ready(function () {
    $(".popup-mobilemenu").hide();

    $(".toggle-mobilemenu").click(function () {
        $(".popup-mobilemenu").fadeToggle(100);
    });

    $(".popup-mobilemenu").hide();

    $(".popup-mobilemenu").click(function () {
        $(".popup-mobilemenu").fadeOut(100);
    });
});

$(document).ready(function () {
    $(".popup-debug").hide();

    $(".toggle-debug").click(function () {
        $(".popup-debug").fadeToggle(100);
    });

    $(".popup-debug").hide();

    $(".popup-debug").click(function () {
        $(".popup-debug").fadeOut(100);
    });
});

$(document).ready(function () {
    var resolution = $(".debug-resolution");
    var canvas = $(".debug-canvas");
    window.addEventListener("resize", displayViewportSize, false);
    displayViewportSize(null);
    function displayViewportSize(e) {
        resolution.text("");
        canvas.text("");
        resolution.append(window.screen.width + " x " + window.screen.height);
        canvas.append(document.documentElement.clientWidth + " x " + document.documentElement.clientHeight);
    }
});

$(document).ready(function () {
    $('.debug-mobile').text(navigator.mobile)
    $('.debug-browser').text(navigator.browser)
    $('.debug-codename').text(navigator.product)
    $('.debug-version').text(navigator.version)
    $('.debug-webkit').text(navigator.webkit)
    $('.debug-platform').text(navigator.platform)
    $('.debug-cookies').text(navigator.cookieEnabled)
    $('.debug-language').text(navigator.language)
    $('.debug-online').text(navigator.onLine)
    $('.debug-agent').text(navigator.userAgent)
    $('.debug-java').text(navigator.javaEnabled())
});

$(document).ready(function () {
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg'];
    $('.dynamic-banner').css({ 'background': 'no-repeat center top url(./JuliaEstetica_files/img/banners/' + images[Math.floor(Math.random() * images.length)] + ')' });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $("#menu-con-menubar").css('border-bottom', 'solid 1px rgba(255,255,255,.0)');
    } else {
        $("#menu-con-menubar").css('border-bottom', 'solid 1px rgba(255,255,255,.1)');
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $("#menu-und-l1").fadeIn(800);
    } else { $("#menu-und-l1").fadeOut(1000); }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $("#menu-und-l2").fadeIn(800);
    } else {
        $("#menu-und-l2").fadeOut(600);
    }
});

$(window).load(function () {
    $('#header-img-head').fadeIn(300);
});

$(window).load(function () {
    $('.dynamic-wavebar').delay(1000).queue(function (next) {
        $(this).css('opacity', '1');
        next();
    });
});

$(window).load(function () {
    var $wavebarFX = $(".visual-wavebar"), wavebarWidth = 15, wavebarCount = $(window).width() / wavebarWidth;
    for (var i = 0; i < wavebarCount; i++) {
        $wavebar = $("<div>").addClass('wavebar-1').css('width', wavebarWidth + 'px').css('left', i * wavebarWidth + 'px').css('animation-delay', (i / wavebarCount) + 's');
        $wavebar.appendTo($wavebarFX);
    }
});

$(window).load(function () {
    var $wavebarFX = $(".visual-wavebar-2"), wavebarWidth = 15, wavebarCount = $(window).width() / wavebarWidth;
    for (var i = 0; i < wavebarCount; i++) {
        $wavebar = $("<div>").addClass('wavebar-2').css('width', wavebarWidth + 'px').css('left', i * wavebarWidth + 'px').css('animation-delay', (i / wavebarCount) + 's');
        $wavebar.appendTo($wavebarFX);
    }
});

$(window).load(function () {
    $('.delayed-fade').delay(900).fadeIn(288);
});

$(window).load(function () {
    $('.delay-fadeout').delay(8000).fadeOut(288);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.fade-on-scroll').fadeIn(288);
    } else {
        $('.fade-on-scroll').fadeOut(288);
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.fade-in-sc').fadeOut();
    } else { $('.fade-in-sc').fadeIn(); }
});

$(window).load(function () {
    $(function () {
        if ($('body').is('.gallery-page')) {
            $('.darkmode-menubar').toggleClass("gm-menubar-l0"); $('.darkmode-menubar-l1').toggleClass("gm-menubar-l1"); $('.darkmode-menubar-l2').toggleClass("gm-menubar-l2");
        }
    });
});

$(document).ready(function () {
    $('a[rel="anchor"]').click(function () {
        $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top }, 500);
        return false;
    });
});

$(document).ready(function () {
    $(function () {
        $('.support-subtrigger').hover(function () {
            $('.support-submenu').fadeIn(100);
        }, function () {
            $('.support-submenu').fadeOut(100);
        });
    });
});

$(document).ready(function () {
    $(".page-video-1").click(function () {
        var iframe = $("#video-1"); iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-2").click(function () {
        var iframe = $("#video-2");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-3").click(function () {
        var iframe = $("#video-3");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page- video - 4").click(function () {
        var iframe = $("#video-4");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-5").click(function () {
        var iframe = $("#video-5");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-6").click(function () {
        var iframe = $("#video-6");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-7").click(function () {
        var iframe = $("#video-7");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-8").click(function () {
        var iframe = $("#video-8");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-9").click(function () {
        var iframe = $("#video-9");
        iframe.attr("src", iframe.data("src"));
    });

    $(".page-video-10").click(function () {
        var iframe = $("#video-10");
        iframe.attr("src", iframe.data("src"));
    });
});

$(document).ready(function () {
    $(".toggle-blogsidebar").hide();

    $(".nav-blog").click(function () {
        $(".toggle-blogsidebar").fadeToggle(100);
    });

    $(".toggle-blogsidebar").hide();

    $(".toggle-blogsidebar").click(function () {
        $(".toggle-blogsidebar").fadeOut(100);
    });
});

$(document).ready(function () {
    $(".toggle-navsidebar").hide();

    $(".nav-standard").click(function () {
        $(".toggle-navsidebar").fadeToggle(100);
    });

    $(".toggle-navsidebar").hide();

    $(".toggle-navsidebar").click(function () {
        $(".toggle-navsidebar").fadeOut(100);
    });
});

$(document).ready(function () {
    $(".toggle-video-1").hide();

    $(".page-video-1").click(function () {
        $(".toggle-video-1").fadeIn('fast');
    });

    $(".toggle-video-1").hide();

    $(".toggle-video-1").click(function () {
        $(".toggle-video-1").fadeOut('fast');
    });

    $(".toggle-video-2").hide();

    $(".page-video-2").click(function () {
        $(".toggle-video-2").fadeIn('fast');
    });

    $(".toggle-video-2").hide();

    $(".toggle-video-2").click(function () {
        $(".toggle-video-2").fadeOut('fast');
    });

    $(".toggle-video-3").hide();

    $(".page-video-3").click(function () {
        $(".toggle-video-3").fadeIn('fast');
    });

    $(".toggle-video-3").hide();

    $(".toggle-video-3").click(function () {
        $(".toggle-video-3").fadeOut('fast');
    });

    $(".toggle-video-4").hide();

    $(".page-video-4").click(function () {
        $(".toggle-video-4").fadeIn('fast');
    });

    $(".toggle-video-4").hide();

    $(".toggle-video-4").click(function () {
        $(".toggle-video-4").fadeOut('fast');
    });

    $(".toggle-video-5").hide();

    $(".page-video-5").click(function () {
        $(".toggle-video-5").fadeIn('fast');
    });

    $(".toggle-video-5").hide();

    $(".toggle-video-5").click(function () {
        $(".toggle-video-5").fadeOut('fast');
    });

    $(".toggle-video-6").hide();

    $(".page-video-6").click(function () {
        $(".toggle-video-6").fadeIn('fast');
    });

    $(".toggle-video-6").hide();
    $(".toggle-video-6").click(function () {
        $(".toggle-video-6").fadeOut('fast');
    });

    $(".toggle-video-7").hide();

    $(".page-video-7").click(function () {
        $(".toggle-video-7").fadeIn('fast');
    });

    $(".toggle-video-7").hide();

    $(".toggle-video-7").click(function () {
        $(".toggle-video-7").fadeOut('fast');
    });

    $(".toggle-video-8").hide();

    $(".page-video-8").click(function () {
        $(".toggle-video-8").fadeIn('fast');
    });

    $(".toggle-video-8").hide();

    $(".toggle-video-8").click(function () {
        $(".toggle-video-8").fadeOut('fast');
    });
    $(".toggle-video-9").hide();

    $(".page-video-9").click(function () {
        $(".toggle-video-9").fadeIn('fast');
    });

    $(".toggle-video-9").hide();

    $(".toggle-video-9").click(function () {
        $(".toggle-video-9").fadeOut('fast');
    });

    $(".toggle-video-10").hide();

    $(".page-video-10").click(function () {
        $(".toggle-video-10").fadeIn('100');
    });

    $(".toggle-video-10").hide();

    $(".toggle-video-10").click(function () {
        $(".toggle-video-10").fadeOut('100');
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-1')[0].contentWindow; $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-2')[0].contentWindow; $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-3')[0].contentWindow; $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-4')[0].contentWindow; $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-5')[0].contentWindow; $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-6')[0].contentWindow; $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-7')[0].contentWindow; $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-8')[0].contentWindow;
            $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-9')[0].contentWindow;
            $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});

$(document).ready(function () {
    $(function () {
        $(".stop-video").on("click", function () {
            videoControl("stopVideo");
        }); function videoControl(action) {
            var $playerWindow = $('#video-10')[0].contentWindow;
            $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }
    });
});
