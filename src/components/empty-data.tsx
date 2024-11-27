import { HeartCrack } from "lucide-react";
import { Link } from "react-router-dom";

export const EmptyData = ({ stats = false }: { stats?: boolean }) => {
  return (
    <div className=" mx-auto my-4 px-2 md:my-6 max-w-[1160px] grid-cols-1 gap-4 text-black">
      <h2 className="py-4 md:py-6 text-center font-bold text-xl md:text-4xl text-slate-950">
        {stats
          ? "Nenhuma estatística para a partida foi encontrada. Pedimos desculpas pelo incoveniente."
          : "Nenhum jogo no momento."}
      </h2>
      <h4 className="text-center font-normal text-slate-600 text-base md:text-lg">
        {stats
          ? "Nenhuma estatística pode ser buscada da api, normal em ligas menos populares, pedimos desculpas pelo incoveniente."
          : "Nenhum jogo em andamento foi encontrado. Está buscando alguma outra liga?."}
      </h4>
      <div className="w-full flex flex-col min-h-[200px] py-6 md:py-10 items-center gap-3 justify-center">
        <HeartCrack className="text-slate-400 size-20 md:size-24" />
        {stats ? (
          <Link
            to={"/"}
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            Volta ao início
          </Link>
        ) : (
          <Link
            to={`?onlyMainLeagues=false`}
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            Ver todas as ligas
          </Link>
        )}
      </div>
    </div>
  );
};
