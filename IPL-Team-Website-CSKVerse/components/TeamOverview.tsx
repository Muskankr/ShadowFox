export default function TeamOverview() {
  return (
    <section
      id="overview"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-16">
          Team Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">

            <h3 className="text-2xl font-bold mb-6">
              Chennai Super Kings
            </h3>

            <p className="text-gray-300 leading-8">
              Chennai Super Kings (CSK) is one of
              the most successful franchises in
              Indian Premier League history.

              Known for consistency, leadership,
              and loyal fan support, CSK has built
              a legacy of excellence and sportsmanship.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-yellow-400 text-black rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold">5</h3>
              <p>IPL Titles</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-yellow-400">
                2008
              </h3>
              <p>Founded</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                M.A Chidambaram
              </h3>
              <p>Home Ground</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                Stephen Fleming
              </h3>
              <p>Head Coach</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}