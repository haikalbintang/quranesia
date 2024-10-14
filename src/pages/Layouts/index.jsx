import ReadQuran from "../ReadQuran";

const Layout = () => {
  const menus = ["Read Quran", "Bookmarks", "Setting"];
  return (
    <div className="h-screen w-full basis-1/5 flex flex-col justify-center items-center p-2 bg-teal-600">
      <div className="bg-teal-700 rounded-3xl flex flex-col justify-center items-center p-4 mb-20">
        <img src="quran.png" alt="Quran App Logo" height={120} width={120} />
        <h1 className="text-white text-3xl font-bold">QURANESIA</h1>
      </div>
      {menus.map((menu) => (
        <div
          key={menu}
          className="flex justify-center items-center w-60 px-4 py-2 my-3 bg-teal-800 rounded-2xl"
        >
          <h2 className="text-white text-2xl">{menu}</h2>
        </div>
      ))}
    </div>
  );
};

export default Layout;
