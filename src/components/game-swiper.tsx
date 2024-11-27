import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GameCard, SkeletonGameCard } from "./game-card";
import type { Game } from "../lib/entities/game-stats";
import type { UseQueryResult } from "@tanstack/react-query";

export const GameSlider = ({
  fetchFn,
}: {
  fetchFn: () => UseQueryResult<Game[]>;
}) => {
  const { data: games, isLoading } = fetchFn();

  return (
    <div className="my-8 w-full max-w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <>
          {isLoading ? (
            Array.from({ length: 6 }, (_, index) => (
              <SwiperSlide key={index}>
                <SkeletonGameCard />
              </SwiperSlide>
            ))
          ) : !games || games.length === 0 ? (
            <p className="">Sem jogos disponíveis</p>
          ) : (
            <>
              {games.map((game, index) => (
                <SwiperSlide key={index}>
                  <GameCard game={game} />
                </SwiperSlide>
              ))}
            </>
          )}
        </>
      </Swiper>
    </div>
  );
};
