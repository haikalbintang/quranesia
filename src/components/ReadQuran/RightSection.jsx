const RightSection = ({ surahDetail }) => {
  return (
    <div className="z-50 shadow-xl shadow-neutral-400 bg-gray-50 basis-3/4 flex flex-col p-8 overflow-y-auto">
      <div className="w-full flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold text-teal-600">
          {surahDetail?.nomor}. {surahDetail?.nama_latin}
        </h2>
        <img src="volume.png" alt="volume" height={30} width={30} />
      </div>

      {surahDetail?.ayat?.map((aya) => (
        <div key={aya.id} className="h-full w-full py-3">
          <h3 className="text-2xl text-right mb-2">{aya.ar}</h3>
          <p className="text-sm text-neutral-800">{aya.tr}</p>
          <p className="text-sm font-medium">
            {aya.nomor}. {aya.idn}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
