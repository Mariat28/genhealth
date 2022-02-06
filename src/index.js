import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './components/LoginPage';
import DashboardContent from "./components/Dashboard/Dashboard";
import Calendar from "./components/CalendarView";
import PatientList from "./components/PatientList";
  const rootElement = document.getElementById('root');
  render(
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route exact path="/genhealth" element={<LoginPage/>}></Route>
        <Route path="/" element={<App/>}>
          <Route index element={<DashboardContent/>}></Route>
          <Route exact path="/dashboard" element={<DashboardContent/>} ></Route>
          <Route exact path="/calendar" element={<Calendar/>}></Route>
          <Route exact path="/patients" element={<PatientList/>}></Route>
          <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>404!!!! These pages are still under development :)!</p>
          </main>}/>
        </Route>
      </Routes>
    </Router>,
    rootElement
  );
