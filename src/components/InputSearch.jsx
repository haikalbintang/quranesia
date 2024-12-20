/* eslint-disable react/prop-types */

export default function InputSearch({ search, onSearch }) {
  return (
    <div className="bg-neutral-400 min-h-20 h-1/6 flex justify-center items-center">
      <div className="relative w-full ml-8">
        <img
          src="search.png"
          alt="search icon"
          width={18}
          height={18}
          className="absolute top-[10px] left-2"
        />
        <input
          className="bg-white h-full py-2 px-8 rounded-lg"
          type="text"
          placeholder="Cari Surah"
          value={search}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
