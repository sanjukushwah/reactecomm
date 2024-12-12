// import React, { useState } from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import ListUser from "./ReactCrud/users/ListUser";
// import CreateUser from "./ReactCrud/users/CreateUser";
// import EditUser from "./ReactCrud/users/EditUser";

// import IconButton from "./AntDesign/IconButton";
// import BlockButton from "./AntDesign/BlockButton";
// import ButtonLink from "./AntDesign/ButtonLink";
// import MultipleButton from "./AntDesign/MultipleButton";
// import DangerButton from "./AntDesign/DangerButton";
// import DownloadButton from "./AntDesign/DownloadButton";
// import GhostButton from "./AntDesign/GhostButton";
// import FloatButtons from "./AntDesign/FloatButton";
// import AxiosPost from "./AxiosTutorial/AxiosPost";

import "./assets/css/style.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./TechVibe/common/Header";
import Footer from "./TechVibe/common/Footer";
import Home from "./TechVibe/Home";
import About from "./TechVibe/About";
import Services from "./TechVibe/Services";
import Portfolio from "./TechVibe/ Portfolio";
import Contact from "./TechVibe/ Contact";
function App() {
  // const [text, setText] = useState("");

  // const addForm = (e) => {
  //   e.preventDefault();
  //   // console.log(text);
  //   if (!text) {
  //     alert("Please add a task can not be blank");
  //     return;
  //   }
  //   setText("");
  // };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Routes>
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes> */}
      {/* <ToastContainer /> */}
      {/* <h1>Ant Design Button</h1>
      <AxiosPost />
      <IconButton />
      <BlockButton />
      <ButtonLink />
      <MultipleButton />
      <DangerButton />
      <DownloadButton />
      <GhostButton />
      <FloatButtons /> */}
    </div>
  );
}

export default App;
