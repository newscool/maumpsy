// 모바일 메뉴 관련 함수
var posY;
var mobileMenuActive = false;

function openMobileMenu() {
    posY = $(window).scrollTop();
    $("html, body").addClass("no-scroll");
    $(".mobile-menu").addClass("is-active");
    mobileMenuActive = true;
}

function closeMobileMenu() {
    $("html, body").removeClass("no-scroll");
    $(window).scrollTop(posY);
    $(".mobile-menu").removeClass("is-active");
    mobileMenuActive = false;
}

// 마음설명서 컬러 배열
var keywordColors = [
    '#454545',
    '#DE4646',
    '#8C46DE',
    '#DE9E46',
    '#77CC38',
    '#CCB7BF',
    '#7B7B7B',
    '#3D51E8',
    '#E8723D',
    '#E83D6B',
    '#52C189',
    '#8BB547',
    '#9A8EDB',
]

$(function () {
    // hamberger: 모바일 메뉴 액션
    $(".hamberger").click(function () {
        openMobileMenu();
        return false;
    })
    $(".close-mobile-menu").click(function () {
        closeMobileMenu();
        return false;
    })

    // 모바일 헤더: 이전페이지로 가기
    $(".page-prev").click(function () {
        history.back();
        return false;
    })

    // likes: 좋아요 버튼 클릭 액션
    $(".button.likes").click(function () {
        $(this).toggleClass("is-clicked");
        return false;
    })

    if ($(".comments").length) {
        // 댓글보기 버튼 액션
        $(".js-button-viewReply").click(function () {
            $(this).parents("li").find(".reply-container").toggleClass("is-active");
            return false
        })

        // 댓글달기 버튼 액션
        $(".js-button-writeReply").click(function () {
            $(this).hide();
            $(this).parents(".reply-input").find(".comment-input").show();
            $(this).parents(".reply-input").find(".textarea").focus();
            return false
        })
    }

    // 업로드버튼 셋팅
    if ($(".upload-button").length) {
        $(".upload-button").click(function () {
            $("#upload-image-file").trigger("click");
            return false;
        })
    }

    // 메인: 마음설명서 태그 세팅
    if ($("body").hasClass("index")) {
        keywordColors.shift();
    }
    $(".psy-check-list li").each(function () {
        var _index = $(this).index() % keywordColors.length;
        $(this).find("a").css("border", "1px solid" + keywordColors[_index]);
        $(this).find("a").css("color", keywordColors[_index]);

        if ($(this).hasClass("is-active")) {
            $(this).find("a").css("background-color", keywordColors[_index]);
            $(this).find("a").css("color", "#fff");
        } else {
            $(this).hover(function () {
                $(this).find("a").css("background-color", keywordColors[_index]);
                $(this).find("a").css("color", "#fff");
            }, function () {
                $(this).find("a").css("background-color", "#fff");
                $(this).find("a").css("color", keywordColors[_index]);
            })
        }
    })

    $(".post-detail > .header .keyword").each(function () {
        var _index = $(this).attr("data-keyword");
        $(this).css("border", "1px solid" + keywordColors[_index]);
        $(this).css("color", keywordColors[_index]);
    })

    // 서브: 마음설명서 리스트 키워트 세팅
    if ($(".sub .maum-manual").length) {
        $("li.keyword").each(function () {
            var _index = $(this).parents("li").attr("data-keyword");
            $(this).css("color", keywordColors[_index]);
        })
    }

    // footer: 관련 사이트 액션
    $(".related-site").click(function () {
        $(this).toggleClass("is-active");
    })

    // footer: goto-top 액션
    $("footer .go-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    })

    // modal: close, background 세팅
    $(".modal-background, .modal-close, .button-modal-close").click(function() {
        $(this).parents(".modal").removeClass("is-active");
        return false;
    })
})

// header: 모바일 fixed
$(window).scroll(function () {
    var topScroll = $(document).scrollTop();

    // 스크롤 150이상 시 메뉴바 고정
    if (topScroll >= 250) {
        $("header").addClass("is-fixed");
    } else {
        $("header").removeClass("is-fixed");
    }

    // 스크롤 300이상 시 최상단 이동 버튼 생성
    if (topScroll >= 500) {
        $(".go-top").addClass("is-active");
    } else {
        $(".go-top").removeClass("is-active");
    }

})