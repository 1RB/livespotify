import Container from 'components/Container';
import TopTracks from 'components/TopTracks';
import React from 'react';
import { Suspense } from 'react';

import NowPlaying from '../components/NowPlaying';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <section className="now-playing-wrapper flex flex-col justify-center items-center max-w-2xl mx-auto mb-8">
        <div className="mx-auto">
            <NowPlaying />
          </div>
        </section>
        <section className="h-screen w-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Top 10 Songs This Month</h2>
          <TopTracks />
        </section>
      </Container>
    </Suspense>
  );
}
