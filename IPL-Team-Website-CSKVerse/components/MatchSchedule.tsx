import { matches } from "@/data/matches";

export default function MatchSchedule() {
  return (
    <section
      id="schedule"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Match Schedule
        </h2>

        <p className="text-center text-gray-300 mb-14">
          Upcoming Chennai Super Kings Fixtures
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {matches.map((match) => (

            <div
              key={match.id}
              className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-yellow-400
              hover:scale-[1.02]
              transition-all
              duration-300
              "
            >

              <div className="flex justify-between items-center mb-6">

                <h3 className="text-2xl font-bold">
                  CSK vs {match.opponent}
                </h3>

                <span
                  className="
                  px-4
                  py-2
                  bg-yellow-400
                  text-black
                  rounded-full
                  text-sm
                  font-semibold
                  "
                >
                  {match.status}
                </span>

              </div>

              <div className="space-y-4 text-gray-300">

                <p>
                  📅 <span className="font-medium">{match.date}</span>
                </p>

                <p>
                  📍 <span className="font-medium">{match.venue}</span>
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}