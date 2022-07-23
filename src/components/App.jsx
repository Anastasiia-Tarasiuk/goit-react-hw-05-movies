// import { lazy, Suspense } from "react";

import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFound } from './NotFound/NotFound';

// const Movies = lazy(() => import("pages/Movies/Movies"));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
          {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={< MovieDetails />}>
            <Route path='cast' element={< Cast />} />
            <Route path='reviews' element={< Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
          {/* </Suspense> */}
    </div>
  );
};

