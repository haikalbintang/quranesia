import { useEffect, useState } from "react";
import LeftSection from "../../components/ReadQuran/LeftSection";
import RightSection from "../../components/ReadQuran/RightSection";
import { getSurahs } from "../../services/quran_api";

const ReadQuran = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(0);

  console.log(selectedSurah);

  useEffect(() => {
    fetchSurahs();
  }, []);

  async function fetchSurahs() {
    const surahs = await getSurahs();
    setSurahs(surahs);
  }

  return (
    <div className="bg-gray-500 flex w-full h-screen">
      <LeftSection
        surahs={surahs}
        onClickSurah={setSelectedSurah}
        selectedSurah={selectedSurah}
      />
      <RightSection />
    </div>
  );
};

export default ReadQuran;
