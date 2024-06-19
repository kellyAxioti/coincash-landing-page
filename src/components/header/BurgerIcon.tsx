import Burger from "../../icons/components/Burger";

export default function BurgerIcon({ onClick }: { onClick: any }) {
  return (
    <div className="burger-icon" onClick={onClick}>
      <Burger />
    </div>
  );
}
