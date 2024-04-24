import "./styles.css";
import { Banner } from "./Banner";
import pheasantHead from "/DrawnPheasantHead3.webp";
import Menu from "./Menu";
import ContentArea from "./ContentArea";
import { useState } from "react";

const MainScreen: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>("Home");
  return (
    <div className="root_container">
      <Banner
        heading="Ringneck Software, LLC"
        subheading="Idaho-based developer of iOS Applications"
        imageSrc={pheasantHead}
      />

      <div className="content_container">
        <Menu
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />

        <ContentArea activeContent={activeContent} />
      </div>
    </div>
  );
};

export default MainScreen;
