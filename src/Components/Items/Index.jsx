import MenuIcon from "../../Exercise/Menu/Index";
import Profile from "../../Exercise/Profile/Index";
import "./items.scss";

const Items = () => {
  return (
    <section className="Items">
      <h2 className="Items__Tittle">Componentes</h2>
      <div className="Items__Slider">
        <div className="Items__Slider__Card">
          <MenuIcon />
        </div>
        <div className="Items__Slider__Card">
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default Items;
