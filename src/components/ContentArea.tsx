import React, { useEffect, useState } from "react";
import content from "../assets/content.json";
import parse from "html-react-parser";

interface Props {
  activeContent: string;
}

const ContentArea: React.FC<Props> = ({ activeContent }) => {
  const [imageSrc, setImageSource] = useState<string>("");
  const [htmlString, setHtmlString] = useState<string>("");

  useEffect(() => {
    // console.log(content[activeContent]);
    const key = activeContent as keyof typeof content;
    if (content[key]) {
      setHtmlString(content[key].formattedText);
      setImageSource(content[key].imageSourcePath);
    }
  }, [activeContent]);

  return (
    <div className="content_area">
      {imageSrc && <img className="content_image" src={imageSrc} />}

      <div>{parse(htmlString)}</div>
    </div>
  );
};

export default ContentArea;
