import ListSurah from "./ListSurah";
import { useState } from "react";

const LeftSection = ({ surahs, onClickSurah, selectedSurah }) => {
  const [filteredSurahs, setFilteredSurahs] = useState(surahs);
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    const query = e.target.value;
    setSearch(query);

    if (search.length > 0) {
      setFilteredSurahs(
        surahs.filter((surah) =>
          surah.nama_latin.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredSurahs(surahs);
    }
  }

  return (
    <div className="bg-neutral-200 min-w-60 basis-1/4 flex flex-col">
      <InputSearch search={search} onSearch={handleSearch} />
      <ListSurah
        onClickSurah={onClickSurah}
        surahs={search.length > 0 ? filteredSurahs : surahs}
        selectedSurah={selectedSurah}
      />
    </div>
  );
};

export default LeftSection;

function InputSearch({ search, onSearch }) {
  return (
    <div className="bg-neutral-400 w-full min-h-20 h-1/6 flex justify-center items-center">
      <div className="relative w-full mx-4">
        <img
          src="search.png"
          alt="search icon"
          width={18}
          height={18}
          className="absolute top-[10px] left-2"
        />
        <input
          className="bg-white w-full h-full py-2 px-8 rounded-lg"
          type="text"
          placeholder="Cari Surah"
          value={search}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
