(function($){
           //배너 이미지 슬라이드
           var swiper = new Swiper('.swiper-container',{
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
        });
        
        //영화차트 이미지 슬라이드
        var swiper = new Swiper('.swiper-container2',{
            slidesPerView: 4,
            spaceBetween: 24,
            keyboard: {
            enabled: true
            },
            onlyInViewport: false,
            mousewheel: {
            invert: true
            },
            autoplay: {
                delay: 6000,    
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.4,
                    spaceBetween: 24
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
        
        //영화차트 탭 메뉴
        var movBtn = $(".movie_title > ul > li");    
        var movCont = $(".movie_chart > div");  

        movCont.hide().eq(0).show();

        movBtn.click(function(e){
            e.preventDefault();
            var target = $(this);         
            var index = target.index();
            movBtn.removeClass("active");   
            target.addClass("active");    
            movCont.css("display","none");
            movCont.eq(index).css("display","block");
        });

        //공지사항 탭메뉴//
        var tabMenu = $(".notice");

        //컨텐츠 내용을 숨겨주세요!
        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("li.active > ul").show();

        function tabList(e){
            e.preventDefault(); //#의 기능을 차단
            var target = $(this);
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
            //next 하위요소를 show 보여줘라 그리고 parent 부모요소의 li를 찾아서 addClass 클래스를 더해라 "active" 그 중 siblings 형제요소중"li"를 찾아서
            //removeClass "active"클래스를 제거하라 그리고 find 하위요소중 ul이라는 특정요소를 찾아라 그리고 그것을 숨겨라.
        }
        tabMenu.find("ul > li > a").click(tabList).focus(tabList);
})(jQuery);