const Home = () => {
  return (
    <div className="basis-4/5 h-screen">
      <div className="relative flex flex-col justify-center items-center h-screen">
        <div className="absolute flex flex-col justify-center items-center gap-4">
          <img src="quran.png" alt="Quran Logo" height={200} width={200} />
          <h1 className="text-center">
            <span className="text-3xl font-semibold text-neutral-800">
              Selamat Datang di
            </span>
            <br />
            <span className="text-5xl font-bold text-teal-600">QURANESIA</span>
          </h1>
        </div>
        <div className="absolute top-[30%] h-80 w-80 bg-neutral-300 rounded-full -z-10"></div>
      </div>
    </div>
  );
};

export default Home;
