/* eslint-disable react/prop-types */

const Dashboard = ({ onClickLogo, onClickDashboardMenu }) => {
  const menus = ["Baca Quran", "Markah Buku", "Pengaturan"];
  return (
    <main className="h-screen w-screen flex flex-col justify-between items-center p-6 bg-teal-600">
      <div className="mt-24">
        <div
          onClick={onClickLogo}
          className="cursor-pointer bg-teal-700 rounded-3xl flex flex-col justify-center items-center p-4 py-10 mb-20"
        >
          <img src="quran.png" alt="Quran App Logo" height={120} width={120} />
          <h1 className="text-white text-3xl font-bold">QURANESIA</h1>
        </div>
        {menus.map((menu) => (
          <div
            onClick={() => onClickDashboardMenu(menu)}
            key={menu}
            className="cursor-pointer flex justify-center items-center w-60 px-4 py-2 my-3 bg-teal-800 rounded-2xl"
          >
            <h2 className="text-white text-2xl">{menu}</h2>
          </div>
        ))}
      </div>
      <p className="text-white text-center text-sm">
        &copy; 2024 Muhammad Haikal Bintang. <br />
        All rights reserved.
      </p>
    </main>
  );
};

export default Dashboard;
