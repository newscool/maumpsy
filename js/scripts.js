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

    // likes: 좋아요 버튼 클릭 액션
    $(".button.likes").click(function() {
        $(this).toggleClass("is-clicked");
        return false;
    })

    if($(".comments").length) {
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

    if($(".upload-button").length) {
        $(".upload-button").click(function() {
            $("#upload-image-file").trigger("click");
            return false;
        })
    }

    // footer: 관련 사이트 액션
    $(".related-site").click(function () {
        $(this).toggleClass("is-active");
    })

    // footer: goto-top 액션
    $("footer .go-top").click(function() {
        $("html, body").animate({scrollTop:0}, 400);
    })
})

// header: 모바일 fixed
$(window).scroll(function () {
    var topScroll = $(document).scrollTop();

    // 스크롤 150이상 시 메뉴바 고정
    if (topScroll >= 150) {
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