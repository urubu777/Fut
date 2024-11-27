export const HeroCard = () => {
  return (
    <div className="w-full flex relative my-4 md:my-6 rounded-lg h-auto bg-gradient-to-r from-pink-500 to-orange-500 py-6 px-4">
      <div className=" flex flex-col gap-2">
        <h2 className="text-2xl font-oswald md:text-4xl mb-2 font-semibold text-white">
          Bem vindo ao, Jogo de hoje!
        </h2>
        <p className="text-white w-[80%] text-sm md:text-base">
          Aqui você encontra todas as estatísticas, dados e informações sobre
          times, ligas, seleções e muito mais. Com nosso placar ao vivo de todos
          os jogos da rodada dos maiores campeonatos do mundo todo. Desfrute de
          nosso placar dos principais jogos das principais ligas do futebol
          mundial.
        </p>
      </div>
    </div>
  );
};
