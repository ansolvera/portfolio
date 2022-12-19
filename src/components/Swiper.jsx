import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default () => {
	return (
		<>
			<Swiper
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1112: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[Navigation, Pagination]}
				slidesPerGroup={1}
				centeredSlides={true}
				loop={true}
				loopFillGroupWithBlank={true}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				className="swiper">
				<SwiperSlide>
					<div className="slide">
						<img src="assets/img/roam-portfolio.webp" alt="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slide">
						<img src="assets/img/polyglot-portfolio.webp" alt="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slide">
						<img src="assets/img/bonmatin-portfolio.webp" alt="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slide">
						<img src="assets/img/pschool-portfolio.webp" alt="" />
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
