import Layout from "./pages/Dashboard";
import Bookmark from "./pages/Bookmark";
import Setting from "./pages/Settting";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ChooseSurah from "./pages/ChooseSurah";
import { getSurahs, getSurahDetail } from "./services/quran_api";
import SurahDetail from "./pages/SurahDetail";

function App() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
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

  function handleClickSurah(id) {
    setSelectedSurah(id);
    setSelectedPage("Detail Surah");
  }

  return (
    <div className="h-screen w-screen flex">
      <div className="w-[25%]">
        <Home />
      </div>
      <div className="w-[20%]">
        <Layout
          onClickDashboardMenu={setSelectedPage}
          onClickLogo={() => setSelectedPage("Home")}
        />
      </div>
      <div className="w-[20%]">
        <ChooseSurah
          surahs={surahs}
          onClickSurah={handleClickSurah}
          selectedSurah={selectedSurah}
        />
      </div>
      <div className="w-[35%]">
        <SurahDetail
          surahDetail={surahDetail}
          onBack={() => setSelectedPage("Baca Quran")}
        />
      </div>
      {selectedPage === "Markah Buku" && <Bookmark />}
      {selectedPage === "Pengaturan" && <Setting />}
    </div>
  );
}

export default App;
