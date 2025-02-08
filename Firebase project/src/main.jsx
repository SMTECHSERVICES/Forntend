import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Componets/Home'
import './assets/css/style.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Rootlayout from './Componets/Rootlayout';
import Context from './ContextAPI/Context';
import Addquiz from './Componets/Addquiz';
import Viewquiz from './Componets/Viewquiz';
import Playquiz from './Componets/Playquiz';
import Login from './Componets/Login';
import Register from './Componets/Register';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-quiz" element={<Addquiz />} />
          <Route path="/view-quiz" element={<Viewquiz/>} />
          <Route path="/play-quiz" element={<Playquiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Route>
      </Routes>
    </Context>

  </BrowserRouter>
)
