$(function(){
    let data = {};

    //獲取資料
    const getJson = async() => {
        const res = await fetch('../public/json/data.json');
        data = await res.json();
    }

    //客製化
    const slidCustomPaginationView = (currentClass, totalClass) => {
        return `
            <div class="u-flex u-justify-center u-items-center u-bg-[#fff] u-rounded-full u-px-5 u-py-1">
                <span class="${currentClass}"></span>
                <span>/</span>
                <span class="${totalClass}"></span>
            </div>
        `
    }

    const slideView = (item) => {
        return `
            <div class="swiper-slide u-swiper-slide">
                <a>
                    <div class="u-border-1 u-border-solid u-border-t-transparent u-border-l-transparent u-border-r-transparent u-border-b-gray-400 u-p-4 u-pt-5">
                        <div class="u-text-lg u-text-gray-1000 u-font-bold  u-whitespace-nowrap">
                            ${item.productName}
                        </div>
                        <div class="u-flex u-mt-2">
                            <span class="u-bg-gray-300 u-rounded-full u-text-gray-700 u-text-xs u-leading-[22px] u-px-2 u-inline-block u-text-center">
                                ${item.productType}
                            </span>
                        </div>
                    </div>
                    <div class="u-px-4 u-py-2.5 u-text-sm u-text-gray-600 u-overflow-hidden u-text-ellipsis u-whitespace-nowrap">
                        ${item.productIntroduce}
                    </div>
                </a>
            </div>
        `
    }


    const swiperConfig = () => {
        return {
            loop:false,
            slidesPerView:3,         // 單頁顯示張數
            slidesPerGroup:3,        // 單頁滑動張數
            spaceBetween:16,         // 項目間隔
            uniqueNavElements:false, // 外部控制器優先

            breakpoints:{
                1280:{
                    slidesPerView:3,         
                    slidesPerGroup:3,        
                },
                768:{
                    slidesPerView:2,         
                    slidesPerGroup:2,        
                },
                0:{
                    slidesPerView:1,         
                    slidesPerGroup:1,
                }
            },
    
            navigation: {
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
                disabledClass:'u-text-gray-600'
            },

            pagination: {
                el: '.u-swiper-custom-pagination',
                type: 'fraction',
                renderFraction:(currentClass, totalClass) => slidCustomPaginationView(currentClass, totalClass)
            },

            virtual: {
                slides:(()=>{
                    const slidesDataList = data?.contentList ?? [];
                    return slidesDataList;
                })(),
                renderSlide:(slide, index)=> {
                    return slideView(slide);
                }
            }
        }
    }

    const initSwiper = () => {
        const swiperTitle = data?.contentName ?? '';

        $('.swiper-title').text(swiperTitle);
        
        
        new Swiper('.swiper', swiperConfig());
    }

    (async() => {
        // 獲取資料
        await getJson();
        //初始化swiper
        await initSwiper();
    })();
});