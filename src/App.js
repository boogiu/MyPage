import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Home from "./View/Home";
/** WeAre 군락 페이지**/
  import Introduce from "./View/WeAre/Introduce";
  import CoreValue from "./View/WeAre/CoreValue";
  import Messages from "./View/WeAre/Message";
  import Brand from "./View/WeAre/Brand";
/** We Make 군락 페이지**/
  import Marketing from "./View/WeMake/Marketing";
  import Entertainment from "./View/WeMake/Entertainment";
  import LifePlatform from "./View/WeMake/LifePlatform";
/** Our Story 군락 페이지**/
  import Columns from "./View/OurStory/Columns";
  import ColumnDetail from "./Layouts/ColumnDetail"
  import Members from "./View/OurStory/Members";
  import FootPrint from "./View/OurStory/FootPrint";
  import AboutUs from "./View/OurStory/AboutUs";
/** With Us 군락 페이지**/
  import CoopInfo from "./View/WithUs/CoopInfo";
  import Recruitment from "./View/WithUs/Recruitment";
  import Careers from "./View/WithUs/Careers";
  import QnA from "./View/WithUs/QnA";
/** Aurum Report 군락 페이지**/
  import Gallery from "./View/AurumReport/Gallery";
  import Legacy from "./View/AurumReport/Legacy";
  import Community from "./View/AurumReport/Community";
/** 회원가입 기능 군락 페이지**/
  import Login from "./View/Login/Login"
  import Register from "./View/Login/Register"


import GlobalStyle from "./Global/GlobalStyle";
import Theme from "./Global/Theme";
import { ThemeProvider } from 'styled-components';
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
     
      <Router basename={process.env.PUBLIC_URL}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* WeAre 군락 페이지 */}
          <Route path="/Introduce" element={<Introduce />} />
          <Route path="/CoreValue" element={<CoreValue />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Brand" element={<Brand />} />
          {/* We Make 군락 페이지 */}
          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/LifePlatform" element={<LifePlatform />} />
          {/* Our Story 군락 페이지 */}
          <Route path="/Columns" element={<Columns />} />
          <Route path="/Columns/:idx" element={<ColumnDetail/>}/>

          <Route path="/Members" element={<Members />} />
          <Route path="/FootPrint" element={<FootPrint />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          {/* With Us 군락 페이지 */}
          <Route path="/CoopInfo" element={<CoopInfo />} />
          <Route path="/Recruitment" element={<Recruitment />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/QnA" element={<QnA />} />
          {/* Aurum Report 군락 페이지 */}
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Legacy" element={<Legacy />} />
          <Route path="/Community" element={<Community />} />
          {/* 회원 가입 관련 군락 페이지 */}
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </Router>

    </ThemeProvider>
  );
}
export default App;