"use client";

import { useEffect, useState } from "react";

export default function FanZone() {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const savedMessages =
      localStorage.getItem("cskMessages");

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleVote = () => {
    if (!selectedPlayer) {
      alert("Please select a player!");
      return;
    }

    alert(
      `💛 Thanks for voting for ${selectedPlayer}!`
    );
  };

  const addMessage = () => {
    if (!message.trim()) return;

    const updatedMessages = [
      message,
      ...messages,
    ];

    setMessages(updatedMessages);

    localStorage.setItem(
      "cskMessages",
      JSON.stringify(updatedMessages)
    );

    setMessage("");
  };

  return (
    <section
      id="fan-zone"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Fan Zone
        </h2>

        <p className="text-center text-gray-300 mb-16">
          Engage with the Yellow Army 💛
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Voting Section */}

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-lg
            "
          >

            <h3 className="text-3xl font-bold mb-8">
              Favorite Player Poll
            </h3>

            <div className="space-y-4">

              <label className="block">
                <input
                  type="radio"
                  name="player"
                  value="MS Dhoni"
                  onChange={(e) =>
                    setSelectedPlayer(e.target.value)
                  }
                />
                <span className="ml-3">
                  MS Dhoni
                </span>
              </label>

              <label className="block">
                <input
                  type="radio"
                  name="player"
                  value="Ruturaj Gaikwad"
                  onChange={(e) =>
                    setSelectedPlayer(e.target.value)
                  }
                />
                <span className="ml-3">
                  Ruturaj Gaikwad
                </span>
              </label>

              <label className="block">
                <input
                  type="radio"
                  name="player"
                  value="Ravindra Jadeja"
                  onChange={(e) =>
                    setSelectedPlayer(e.target.value)
                  }
                />
                <span className="ml-3">
                  Ravindra Jadeja
                </span>
              </label>

            </div>

            <button
              onClick={handleVote}
              className="
              mt-8
              px-6
              py-3
              bg-yellow-400
              text-black
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              Vote Now
            </button>

          </div>

          {/* Message Wall */}

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-lg
            "
          >

            <h3 className="text-3xl font-bold mb-6">
              Fan Message Wall
            </h3>

            <textarea
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Write your message for CSK..."
              className="
              w-full
              h-32
              p-4
              rounded-xl
              bg-black/20
              border
              border-yellow-400/20
              outline-none
              "
            />

            <button
              onClick={addMessage}
              className="
              mt-4
              px-6
              py-3
              bg-yellow-400
              text-black
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              Post Message
            </button>

            <div className="mt-8 space-y-3">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className="
                  bg-black/20
                  p-4
                  rounded-xl
                  "
                >
                  💛 {msg}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}