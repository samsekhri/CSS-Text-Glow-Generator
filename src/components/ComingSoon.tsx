import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const target = new Date("2025-07-01T00:00:00");
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 px-6 text-center bg-black/80 rounded-xl shadow-xl border border-white/10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8e2de2] via-[#4a00e0] to-[#ff0080] mb-6">
        Coming Soon
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        We’re working on something amazing! This tool will launch soon. Stay tuned.
      </p>

      <div className="flex justify-center gap-4 text-white text-xl sm:text-2xl font-semibold mb-10">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-gradient-to-b from-white/10 to-white/5 rounded-lg px-4 py-2 shadow-inner backdrop-blur"
          >
            <span className="text-3xl sm:text-4xl font-bold text-white">
              {timeLeft[unit as keyof typeof timeLeft]}
            </span>
            <span className="text-sm uppercase tracking-wide text-gray-400">
              {unit}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-md mx-auto">
        <form className="flex items-center bg-black/40 border border-white/10 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-lime-500 text-black font-semibold hover:brightness-110 transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default ComingSoon;
