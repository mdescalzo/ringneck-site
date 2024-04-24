interface Props {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuButton: React.FC<Props> = ({ children, isSelected, ...rest }) => {
  return (
    <button className={`menu_button ${isSelected ? "selected" : ""}`} {...rest}>
      {children}
    </button>
  );
};

export default MenuButton;
