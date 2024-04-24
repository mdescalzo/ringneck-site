import "./styles.css";
import MenuButton from "./MenuButton";

interface Props {
  activeContent: string;
  setActiveContent: React.Dispatch<React.SetStateAction<string>>;
}
const Menu: React.FC<Props> = ({ activeContent, setActiveContent }) => {
  const labels: string[] = ["Home", "BulletDrop+", "PiTimer", "Privacy"];

  return (
    <nav className="menu">
      {labels.map((label) => (
        <MenuButton
          key={label}
          isSelected={label === activeContent}
          onClick={() => setActiveContent(label)}
        >
          {label}
        </MenuButton>
      ))}
    </nav>
  );
};

export default Menu;
