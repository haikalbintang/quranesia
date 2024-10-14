import { useEffect, useState } from "react";
import LeftSection from "../../components/ReadQuran/LeftSection";
import RightSection from "../../components/ReadQuran/RightSection";
import { getSurahs, getSurahDetail } from "../../services/quran_api";

const ReadQuran = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [surahDetail, setSurahDetail] = useState({});

  useEffect(() => {
    fetchSurahs();
  }, []);

  useEffect(() => {
    fetchSurahDetail(selectedSurah);
  }, [selectedSurah]);

  async function fetchSurahs() {
    const surahs = await getSurahs();
    setSurahs(surahs);
  }

  async function fetchSurahDetail(id) {
    const surahDetail = await getSurahDetail(id);
    setSurahDetail(surahDetail);
  }

  return (
    <div className="bg-gray-500 flex basis-4/5 h-screen">
      <LeftSection
        surahs={surahs}
        onClickSurah={setSelectedSurah}
        selectedSurah={selectedSurah}
      />
      <RightSection surahDetail={surahDetail} />
    </div>
  );
};

export default ReadQuran;
