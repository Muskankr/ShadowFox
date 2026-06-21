import { news } from "@/data/news";

export default function News() {
  return (
    <section id="news" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Latest News
        </h2>

        <p className="text-center text-gray-300 mb-14">
          Stay updated with Chennai Super Kings
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (

            <div
              key={index}
              className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-yellow-400
              hover:scale-105
              transition
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}