import "./styles.css";
// import wood from "/pexels-george-dolgikh-551816-1303092.jpg";

interface Props {
  heading: string;
  subheading: string;
  imageSrc: string;
}

export const Banner: React.FC<Props> = ({ heading, subheading, imageSrc }) => {
  return (
    <header className="banner">
      <div className="image-container">
        <img src={imageSrc} alt="Banner Image" />
      </div>
      <div className="text-container">
        <div className="heading_text">{heading}</div>
        <div className="subheading_text">{subheading}</div>
      </div>
    </header>
  );
};
