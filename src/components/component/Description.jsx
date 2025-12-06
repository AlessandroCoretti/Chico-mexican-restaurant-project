import maravilla from "../../assets/maravilla.png";
import chicos from "../../assets/chicos.png";

export default function Description() {
  return (
    <section className="grid md:grid-cols-3 gap-6" aria-labelledby="chicos-heading">
      <div>
        <h3 id="chicos-heading" className="text-3xl text-amber-50 font-bold mb-4">
          <strong className="text-green-800">CHICOS </strong>
          is the ultimate authentic modern Mexican experience
        </h3>

        <p className="text-lg text-amber-50 font-medium leading-relaxed">
          We can confidently say that there’s nobody out there quite like us. We’re built on total authenticity — real, carefully selected ingredients rooted in
          Mexican culinary tradition, and original recipes inspired by the most iconic taquerías and restaurants across Mexico.
        </p>

        <p className="text-lg text-amber-50 font-medium leading-relaxed mt-4">
          This — paired with absolute consistency that delivers incredible results every single time, and a team of energetic, honest people who love creating
          an unforgettable customer experience. CHICOS is the result of our hunger to bring happiness to millions through phenomenal flavours, a vibrant
          atmosphere, and our desire to be the absolute best at what we do.
        </p>

        <div className="flex items-center gap-2 mt-4">
          <strong className="text-amber-50 text-lg">Keep it</strong>
          <img src={chicos} alt="Chicos signature" className="h-6 object-contain" />
        </div>
      </div>

      <div className="md:col-span-2">
        <img src={maravilla} alt="Traditional Mexican dish from Chicos" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
