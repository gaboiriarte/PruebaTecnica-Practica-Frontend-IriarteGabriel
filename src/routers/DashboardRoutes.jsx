import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Buttons } from '../components/Buttons';
import { Notices } from '../components/Notices';
import { NoticesFavs } from '../components/NoticesFavs';

export const DashboardRoutes = () => {

  return <>
    <main className="main">
      <div className="main__container">
        <h1 className="main__title">HACKER NEWS</h1>

      </div>
    </main>

    <section className="section">
      <Buttons/>
      
      
      <Routes>
        <Route path="allNotices" element={<Notices/>} />
        <Route path="favsNotices" element={<NoticesFavs />} />
        <Route path="/" element={<Notices/>} />
      </Routes>
     
    </section>
  </>;
};
