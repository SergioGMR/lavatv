"use client";
import { InfoModalProps } from "@/types/InfoModal";
import { useState } from "react";
import { Play, Info, Plus, ThumbsUp } from "lucide-react";
import { getLocaleDate } from "@/lib/utils";
export default function InfoModal({
  title,
  date,
  directorName,
  castList,
  genresList,
  overview,
}: InfoModalProps) {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-end md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 h-full w-full">
        <button
          id="playButton"
          className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded flex items-center"
        >
          <Play className="w-4 h-4 mr-2" />
          <span className="block lg:hidden xl:block">Play</span>
        </button>
        <button
          id="infoButton"
          onClick={toggleModal}
          className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded flex items-center"
        >
          <Info className="w-4 h-4 mr-2" />
          Info
        </button>
        <button className="text-white hover:text-gray-300 px-4 py-2 rounded flex items-center">
          <Plus className="w-4 h-4 mr-2" /> Mi Lista
        </button>
        <button className="text-white hover:text-gray-300 px-4 py-2 rounded flex items-center">
          <ThumbsUp className="w-4 h-4 mr-2" /> Me Gusta
        </button>
      </div>
      <div
        id="infoDialog"
        className={`fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 space-y-0 ${
          open ? "flex" : "hidden"
        }`}
      >
        <div className="bg-slate-950 text-slate-400 p-8 rounded-lg max-w-lg">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-white font-bold">{title}</span>
          </h3>
          <p className="mt-2">
            <span className="text-white font-bold mr-2">Año:</span>
            {getLocaleDate(date)}
          </p>
          <p className="mt-2">
            <span className="text-white font-bold mr-2">Director:</span>
            <span className="italic">{directorName}</span>
          </p>
          <p className="mt-2">
            <span className="text-white font-bold mr-2">Reparto:</span>
            <span className="italic text-pretty">{castList}</span>
          </p>
          <p className="mt-2">
            <span className="text-white font-bold mr-2">Género:</span>
            <span className="italic text-pretty">{genresList}</span>
          </p>
          <p className="mt-4 italic text-pretty">{overview}</p>
          <button
            id="closeInfoButton"
            onClick={toggleModal}
            className="mt-6 bg-white text-black hover:bg-gray-200 px-4 py-2 rounded w-full"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
}
