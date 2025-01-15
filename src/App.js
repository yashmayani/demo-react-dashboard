import * as React from 'react';
import { useState } from 'react';
import Model from './Component/Model';
import Stepper from './Component/Stepper';
import Button from './Component/Button';
import Example from './Component/Example';
import Inputtype from './Component/Inputtype';
import Select from './Component/Select';
import UppercaseLowercase from './Component/UppercaseLowercase';
import Leftright from './Component/Leftright';
import Hooks from './Component/Hooks';
import { ToastContainer } from 'react-toastify';
import Layout from './Component/Layout';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import './App.css';
import Projects from './Component/Projects';
import Transaction from './Component/Transaction';
import MyTeam from './Component/MyTeam';
import ReasearchData from './Component/ResearchData';
import Reports from './Component/Reports';
import Setting from './Component/Setting';
import Help from './Component/Help';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Exa from './Component/Exa';
import Model2 from './Component/Model2';
import Model3 from './Component/Model3';
import Model4 from './Component/Model4';
import Slide1 from './Component/Slide1';
import Slide2 from './Component/Slide2';



function App() {




  const [isLogin, setIsLogin] = useState(!!localStorage.getItem('authToken'));
  return (
    <>
      {/* <Model/> */}
      {/* <Stepper/> */}
      {/* <Button/> */}
      {/* <Example/> */}
      {/* <Inputtype/> */}
      {/* <Select/> */}
      {/* <UppercaseLowercase/> */}
      {/* <Leftright/> */}
      {/* <Hooks/>} */}
      <ToastContainer hideProgressBar={true} position="top-center" />

      <BrowserRouter>
        {
          isLogin ?

            (
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/transaction" element={<Transaction />} />
                  <Route path="/my team" element={<MyTeam />} />
                  <Route path="/research data" element={<ReasearchData />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/model2" element={<Model2 />} />
                  <Route path="/model3" element={<Model3 />} />
                  <Route path="/model4" element={<Model4 />} />
                  <Route path="/slide1" element={<Slide1 />} />
                  <Route path="/slide2" element={<Slide2 />} />
                  <Route path="/model" element={<Model />} />
                  <Route path="/hooks" element={<Hooks />} />
                  <Route path="/exa" element={<Exa />} />
                </Routes>
              </Layout>
            ) :
            (
              <Routes>
                <Route path="/" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path="/registration" element={<Registration />} />
              </Routes>
            )
        }
      </BrowserRouter>

    </>
  );
}

export default App;
