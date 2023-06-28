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
        <div className="Items__Slider__Card">3</div>
        <div className="Items__Slider__Card">4</div>
        <div className="Items__Slider__Card">1</div>
        <div className="Items__Slider__Card">2</div>
        <div className="Items__Slider__Card">3</div>
        <div className="Items__Slider__Card">4</div>
      </div>
    </section>
  );
};

export default Items;
