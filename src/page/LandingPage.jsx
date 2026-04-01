import { Container } from "lucide-react";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/navBar";
import Process from "../components/Process";
import SocialProof from "../components/SocialProof";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
 <div>
<Navbar/>
<Hero   />
<Process/>
<Benefits/>
<SocialProof/>
<ContactSection/>
<Footer />
 </div>
  );
};




export default LandingPage;