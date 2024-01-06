import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import LandingPage from './LandingPage';
import Header from './Header';
import Product from './product';
import Solutions from './solutions';
import TemplateGenerator from './templateGenerator';
import CostumingTemplates from './templates/CostumingTemplates';

function App() {
  const [templateData, setTeplmateData] = useState({});
  function createTemplate(DataObject: any) {
    setTeplmateData(DataObject);
  }


  return (
    <Router>
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/templateGenerator"
            element={<TemplateGenerator createTemplateFunction={createTemplate} />}
          />
          <Route
            path="/InstagramPostTemplate"
            element={<CostumingTemplates imageurl={templateData.emptyImage} title={templateData.title}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
