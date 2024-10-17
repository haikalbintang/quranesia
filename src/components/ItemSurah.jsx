/* eslint-disable react/prop-types */

export default function ItemSurah({
  number,
  name,
  meaning,
  place,
  numberOfAyats,
  onClickSurah,
  selectedSurah,
}) {
  return (
    <div
      onClick={onClickSurah}
      className={`${
        selectedSurah === number ? "bg-neutral-300" : ""
      } cursor-pointer w-full min-h-28 flex gap-2 px-7 py-4`}
    >
      <h2 className="text-xl font-bold text-teal-600">{number}.</h2>
      <div>
        <h2 className="text-xl font-bold text-teal-600">{name}</h2>
        <p className="text-[15px] text-neutral-800 font-medium">{meaning}</p>
        <p className="text-sm text-neutral-600">
          {place}, <span>{numberOfAyats}</span> ayats
        </p>
      </div>
    </div>
  );
}
