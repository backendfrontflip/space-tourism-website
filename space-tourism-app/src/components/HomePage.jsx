import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="home px-5">
      <div className="overlay">
        <article className="lg:w-1/2 lg:mr-20">
          <h1 className="text-2xl text-gray-400">
            SO, YOU WANT TO TRAVEL TO
            <span className="block text-4xl lg:text-6xl text-white mt-5 mb-10">
              SPACE
            </span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </article>

        <article>
          <Link
            to="/destination"
            className="w-52 h-52 flex items-center justify-center rounded-full bg-white text-gray-800 uppercase font-bold text-4xl lg:text-4xl animate-pulse"
          >
            EXPLORE
          </Link>
        </article>
      </div>
    </section>
  );
};

export default HomePage;
