
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Router   } from 'react-router-dom';
import React from 'react';
import { Page1 } from './pages/Money/page1';
import { Page2 } from './pages/GoHere/page2';
import { Page3 } from './pages/FindHouse/page3';
import { PageFindTransport } from './pages/FindTransport/page';
import { PageBuySell } from './pages/BuySell/page';
import { PageFun } from './pages/Fun/page';
import { PageGoWithMe } from './pages/GoWithMe/page';
import { PageLaw } from './pages/Law/page';

function App() {
  return (
    <BrowserRouter>
    <Routes>      
      <Route path="/" element={<Page1 />} />
      <Route path="GoHere" element={<Page2 />} />
      <Route path="FindHouse" element={<Page3 />} />
      <Route path="FindTransport" element={<PageFindTransport />} />
      <Route path="Law" element={<PageLaw />} />
      <Route path="Fun" element={<PageFun />} />
      <Route path="Gowithme" element={<PageGoWithMe />} />
      <Route path="Buy-sell" element={<PageBuySell />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
