/* eslint-disable react/prop-types */

import { useState } from "react";
import InputSearch from "../components/InputSearch";
import ListSurah from "../components/ListSurah";

const ChooseSurah = ({ surahs, onClickSurah, selectedSurah }) => {
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
    <div className="bg-neutral-200 min-w-60 h-screen w-screen flex flex-col">
      <InputSearch search={search} onSearch={handleSearch} />
      <ListSurah
        onClickSurah={onClickSurah}
        surahs={search.length > 0 ? filteredSurahs : surahs}
        selectedSurah={selectedSurah}
      />
    </div>
  );
};

export default ChooseSurah;
