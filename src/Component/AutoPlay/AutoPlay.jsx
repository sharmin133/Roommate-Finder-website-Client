import { Typewriter } from "react-simple-typewriter";

const AutoPlay = () => {
  return (
    <div className="carousel w-full md:h-[550px] h-[310px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="/AllPictures/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg"
          className="w-full object-cover"
          alt="Slide 1"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="absolute top-3 md:top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">
          <div className="md:text-6xl text-xl font-bold flex justify-center items-center gap-2 md:p-4">
            <span className="text-yellow-400">Welcome</span>
            <span className="text-yellow-400 hidden md:inline">to</span>
            <span>
              <span className="font-bold text-pink-400">Flat</span>
              <span className="font-medium text-yellow-300">Fusion</span>
            </span>
          </div>

          <p className="md:text-2xl text-base mt-2 font-medium italic">
            Smart. Simple.{" "}
            <span className="text-yellow-400">Stress-free</span> roommate{" "}
            <span className="inline-block text-pink-400 font-semibold">
              <Typewriter
                words={["matching with people you trust."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </span>
          </p>

          <h2 className="text-xl md:text-4xl font-bold md:pt-10 text-yellow-400">
            Find Your Perfect Roommate
          </h2>

          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Search by location, preferences, or budget..."
              className="w-2/3 md:px-4 md:py-2 px-2 py-1 rounded-lg border-2 border-yellow-300 bg-white/10 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle bg-pink-400 text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-pink-400 text-white">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/AllPictures/wooden-house-at-waters-edge.jpg"
          className="w-full object-cover"
          alt="Slide 2"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">
          <h2 className="text-2xl md:text-5xl text-pink-400 font-bold mb-4">
            Built for Boundaries & Balance
          </h2>
          <p className="md:text-xl font-medium text-yellow-400">
            With the right person, shared spaces become shared memories. Let us help you find them.
          </p>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide1" className="btn btn-circle bg-pink-400 text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-pink-400 text-white">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/AllPictures/header-banner.jpg"
          className="w-full object-cover"
          alt="Slide 3"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">
          <h2 className="text-2xl md:text-5xl text-yellow-400 font-bold mb-4">
            More Than Just Rent Sharing
          </h2>
          <p className="md:text-xl font-medium text-pink-400">
            A modern solution where compatibility meets convenience.
            Find your match. Find your home.
          </p>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide2" className="btn btn-circle bg-pink-400 text-white">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-pink-400 text-white">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="/AllPictures/a-blue-home-with-snow-covering-the-roof.jpg"
          className="w-full object-cover"
          alt="Slide 4"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center p-4 text-white">
          <h2 className="text-2xl md:text-5xl text-yellow-400 font-bold mb-4">
            We Match. You Move In.
          </h2>
          <p className="md:text-xl font-medium text-pink-400">
            Discover a smarter way to share your space. FlatFusion connects like-minded individuals for harmonious living.
          </p>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide3" className="btn btn-circle bg-pink-400 text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-pink-400 text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default AutoPlay;


