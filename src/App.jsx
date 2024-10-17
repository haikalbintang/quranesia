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
      {selectedPage === "Dashboard" && (
        <Layout
          onClickDashboardMenu={setSelectedPage}
          onClickLogo={() => setSelectedPage("Home")}
        />
      )}
      {selectedPage === "Home" && <Home />}
      {selectedPage === "Baca Quran" && (
        <ChooseSurah
          surahs={surahs}
          onClickSurah={handleClickSurah}
          selectedSurah={selectedSurah}
        />
      )}
      {selectedPage === "Detail Surah" && (
        <SurahDetail
          surahDetail={surahDetail}
          onBack={() => setSelectedPage("Baca Quran")}
        />
      )}
      {selectedPage === "Markah Buku" && <Bookmark />}
      {selectedPage === "Pengaturan" && <Setting />}
    </div>
  );
}

export default App;
