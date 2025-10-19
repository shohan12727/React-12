import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee
        className="flex gap-6 font-bold "
        pauseOnHover
        speed={80}
        gradient={false}
      >
        <p>
          📰 Breaking News: Bangladesh launches its first AI-powered traffic
          control system in Dhaka to reduce congestion and improve urban
          mobility.
        </p>
        <p>
          🌍 International: The United Nations reports a 15% global increase in
          renewable energy adoption, marking a major milestone in the fight
          against climate change.
        </p>
        <p>
          🏏 Sports Update: Bangladesh secures a thrilling victory over India in
          the final T20 match, with young players showing exceptional
          performance.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
