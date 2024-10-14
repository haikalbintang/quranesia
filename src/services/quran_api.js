export async function getSurahs() {
  try {
    const res = await fetch("https://equran.id/api/surat");
    const surahs = await res.json();
    return surahs;
  } catch (err) {
    console.log(err);
  }
}
