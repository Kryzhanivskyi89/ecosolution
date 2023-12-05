import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { sliderData } from '../../data/sliderData';
import {
  Right,
  SliderItems,
  SliderItemsImage,
  SliderImage,
  SliderItemsInfo,
  SliderItemsDescription,
  SliderItemsDescriptionTitle,
  SliderItemsDescriptionButton,
  CasesHeaderLineHorizont,
  SliderItemsInfoTime,
  SliderItemsInfoTimeText,
  SliderItemsInfoTimeDate,
} from '../cases.styled';

const sliderSettings = {
    modules: [Navigation, Pagination],
    spaceBetween:24,
    slidesPerView: "auto",
    breakpoints:{
        768: {spaceBetween: 24, slidesPerView: 2,},
        1280: {spaceBetween: 48, slidesPerView: 2,},
    },
    autoplay: {delay: 2500, disableOnInteraction: true,},
    speed: 1000,
    loop:true,
    navigation: {nextEl: '.next',prevEl: '.prev',},
    pagination:{
        el: '.pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            if (current < 10) {
                current = `0${current}`;
            }
            if (total < 10) {
                total = `0${total}`;
            }
            return `
		    	${current}
				<span>
					/${total}
				</span>
			`;
        },
    }
}

export function Slider() {
    return (
        <Swiper {...sliderSettings} >
            {sliderData.map(({ id, photo, alt, title, date }) => {
                return (
                    <SwiperSlide key={id} >
                        <SliderItems >
                            <SliderItemsImage>
                                <SliderImage src={photo}/>
                            </SliderItemsImage>
                            <SliderItemsInfo>
                            <SliderItemsDescription>
                                <SliderItemsDescriptionTitle>{title}</SliderItemsDescriptionTitle>
                                <SliderItemsDescriptionButton>
                                    <Right rotateupleft="true" scale={0.77} />
                                </SliderItemsDescriptionButton>
                            </SliderItemsDescription>
                            <CasesHeaderLineHorizont />
                            <SliderItemsInfoTime>
                                <SliderItemsInfoTimeText>{alt}</SliderItemsInfoTimeText>
                                <SliderItemsInfoTimeDate>{date}</SliderItemsInfoTimeDate>
                            </SliderItemsInfoTime>
                            </SliderItemsInfo>
                        </SliderItems>
                    </SwiperSlide>
                    
                );
            })}
         </Swiper>
    );
}