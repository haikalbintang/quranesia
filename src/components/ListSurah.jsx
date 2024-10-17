/* eslint-disable react/prop-types */

import ItemSurah from "./ItemSurah";

const ListSurah = ({ surahs, onClickSurah, selectedSurah }) => {
  return (
    <div className="h-full w-full py-4 overflow-y-auto">
      {surahs.map((surah) => (
        <ItemSurah
          onClickSurah={() => onClickSurah(surah.nomor)}
          selectedSurah={selectedSurah}
          key={surah.nomor}
          number={surah.nomor}
          name={surah.nama_latin}
          meaning={surah.arti}
          place={
            surah.tempat_turun.charAt(0).toUpperCase() +
            surah.tempat_turun.slice(1)
          }
          numberOfAyats={surah.jumlah_ayat}
        />
      ))}
    </div>
  );
};

export default ListSurah;
