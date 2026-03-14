import Image from "next/image";
import ProfileHeader from "./compoents/ProfileHeader";
import BioSection from "./compoents/BioSection";
import WritingSection from "./compoents/WritingSection";
import Footer from "./compoents/Footer";


export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#EDEAE4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "52px 24px 60px",
        boxSizing: "border-box",
      }}
    >
      <main style={{ width: "100%", maxWidth: "540px" }}>
        <ProfileHeader name="Your Name" updatedDate="Mar 14, 2026" />
        <BioSection />
        <WritingSection />
        <Footer timezone="Asia/Kolkata" locationName="Ludhiana, India" />
      </main>
    </div>
  );
}