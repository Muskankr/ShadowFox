"use client";

import { useState } from "react";
import Image from "next/image";
import { players } from "@/data/players";

export default function Squad() {
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="squad"
      className="py-24 px-6 bg-[#071F45]"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-6">
          Squad
        </h2>

        <p className="text-center text-gray-300 mb-10">
          Explore Chennai Super Kings players.
        </p>

        <div className="max-w-xl mx-auto mb-12">

          <input
            type="text"
            placeholder="Search Player..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            px-5
            py-4
            rounded-xl
            bg-white/10
            border
            border-yellow-400/30
            outline-none
            focus:border-yellow-400
            "
          />

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {filteredPlayers.map((player) => (

            <div
              key={player.id}
              className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              hover:scale-105
              hover:border-yellow-400
              transition
              duration-300
              "
            >

              <div className="relative h-80">

                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {player.name}
                </h3>

                <p className="text-yellow-400 mt-2">
                  {player.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}