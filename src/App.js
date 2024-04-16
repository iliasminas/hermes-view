import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from './components/ProductDetail';
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Reservations from "./components/Reservations";
import ProjectDetail from "./components/ProjectDetail";
import NavigationBar from "./components/NavigationBar";
import SamplePage from "./components/SamplePage";
import Sample3DModel from "./components/Sample3DModel";
import Reserve from "./components/Reserve";
import ReserveTable from "./components/ReserveTable";
import Login from "./components/Login";
import TagManager from 'react-gtm-module';
import Samples from "./components/Samples";
import Services from "./components/Services";
import Debug from "./components/Debug";
import ServiceComponent from "./components/ServiceComponent";

function App() {

  TagManager.initialize({ gtmId: 'GTM-KDRHXVW7' });

  const location = useLocation();

  const pathsWithoutNavBar = ["/sample", "/3d-model-sample","/360-video-sample","/login","/sample_restaurant/reservations","/debug"];

  // Check if the current path is in the array of paths without NavBar
  // or if it starts with "/projects/"
  const shouldHideNavBar = pathsWithoutNavBar.includes(location.pathname) || location.pathname.startsWith("/projects/") || location.pathname.startsWith("/reserve");

  // Dynamic styling for body's padding-top
  const bodyStyle = {
    paddingTop: shouldHideNavBar ? '0' : '60px', // Set to 0 when NavBar should be hidden
  };
  
  return (
    <div>
      {!shouldHideNavBar && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/debug" element={<Debug />} />
        <Route path="/samples" element={<Samples />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/sample_restaurant/reservations" element={<Reservations />} />
        <Route path="/reserve/:collectionKey/:reservationDate/:reservationStartTimeIndex/:reservationEndTimeIndex/:tableNumber" element={<ReserveTable/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/reservation-system" element={<ServiceComponent
    header="IMMERSIVE RESERVATION SYSTEM"
    paragraph="Do you operate a restaurant or hotel? Have you thought of integrating a reservation system? Why not do it more immersive and engaging? Integrate a reservation system that combines the latest VR technologies."
    list={[
        "Immersive Booking Experience",
        "Enhanced Visualization",
        "Increased Engagement",
        "Convenience",
        "Personalization"
    ]}
/>} />
        <Route path="/services/360-virtual-tour" element={<ServiceComponent
            header="360 VIRTUAL REALITY TOUR"
            paragraph="We transform your property into a 360 immersive virtual tour, whether it's airplanes, yachts, hotels, malls, restaurants, galleries, museums, or festivals. Navigation has never been easier."
            list={[
                "Immersive Experience",
                "Remote Accessibility",
                "Enhanced Engagement",
                "Competitive Edge"
            ]}
        />} />
        <Route path="/services/360-video" element={<ServiceComponent
            header="360 VIDEO"
            paragraph="Make your Virtual Tour even more interactive by integrating 360 videos where real people can talk and engage with your audience."
            list={[
                "Authentic Engagement",
                "Enhanced Storytelling",
                "Interactive Elements",
                "Increased Trust",
                "Memorable Impressions"
            ]}
        />} />
        <Route path="/services/3d-modeling" element={<ServiceComponent
            header="3D MODELING"
            paragraph="Transform tangible objects from the real world to the digital world. From small jewelry to elaborate airplanes."
            list={[
                "Lifelike Representation",
                "Tailored Adaptability",
                "Efficient Prototyping",
                "Collaborative Workflow"
            ]}
        />} />
      <Route path="/services/digital-marketing" element={<ServiceComponent
    header="DIGITAL MARKETING"
    paragraph="We firmly believe in the power of data-driven methodologies for effective digital marketing. Our team comprises skilled professionals who utilize cutting-edge technologies and tactics to execute personalized campaigns aimed at delivering tangible results and fostering measurable growth for your business. Covering a spectrum of services from search engine optimization to social media management, we offer comprehensive digital marketing solutions tailored to help you engage your target audience and realize your objectives."
    list={[
        "Broaden your online presence",
        "Drive targeted traffic to your website",
        "Increase brand awareness and visibility",
        "Lead generation and customer acquisition"
    ]}
/>} />
        <Route path="/services/social-media" element={<ServiceComponent
    header="SOCIAL MEDIA"
    paragraph="We're experts at using social media and content marketing to boost your brand. Our team mixes creativity with strategy to create engaging content that speaks to your audience on different digital platforms."
    list={[
        "Develop compelling and relevant content",
        "Content ideation, creation, and distribution",
        "Tailor content for different platforms and audiences",
        "Storytelling and brand messaging"
    ]}
/>} />
        <Route path="/services/website-design" element={<ServiceComponent
    header="WEBSITE DESIGN & DEVELOPMENT"
    paragraph="Whether you're embarking on the creation of a new website, seeking to enhance an existing one, or require support for website maintenance, our seasoned web developers possess the expertise needed to steer you towards success. Our specialization lies in crafting bespoke web solutions aligned with your specific requirements, guaranteeing optimal functionality and efficiency for your website. Through our web development service, rest assured that your online presence remains current and poised to captivate your audience."
    list={[
        "Build visually appealing and user-friendly websites",
        "Responsive design for mobile optimization",
        "User experience (UX) and user interface (UI) improvements",
        "Landing page creation and optimization"
    ]}
/>} />
        <Route path="/services/performance-marketing" element={<ServiceComponent
    header="PERFORMANCE MARKETING"
    paragraph="
    Performance Marketing, encompassing Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads, is our forte. As your trusted ally, we specialize in crafting results-driven campaigns through precise advertising tactics. Leveraging our expertise and innovative methodologies, we empower brands to optimize their ROI and successfully attain their business goals."
    list={[
        "Measurable Results",
        "Targeted Audience Reach",
        "Pay-for-Performance Model",
        "Optimization and Flexibility",
        "Diverse Channels and Formats"
    ]}
/>} />
        <Route path="/3d-model-sample" element={<Sample3DModel />} />
        <Route path="/360-video-sample" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/vr_360_video/"/>} />
        {/* kallithea */}
        <Route path="/projects/7c3c451ec900" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/vr_1/"/>} />
        <Route path="/projects/fdcdd856841f" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/vr_2/"/>} /> 
        <Route path="/projects/8hfk1021do01" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/vr_3/"/>} /> 
        <Route path="/projects/3bbkl3189ytp" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/vr_3_sample/"/>} />
        <Route path="/projects/zhj0lwnc31og" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/vr_4/"/>} /> 
        <Route path="/projects/fb66u81wtrg9" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/vr_5/"/>} /> 
        <Route path="/projects/0" element={<SamplePage redirectToSample={false} modelPath="https://giannismparous.github.io/test_vr/"/>} /> 
      </Routes>
    </div>
  );
}

export default App;
