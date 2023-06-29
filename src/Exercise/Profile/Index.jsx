import './Profile.scss'

import FotoIncognita from "../../assets/ImagenFoto.png";

const Profile = () => {
  return (
    <>
      <div className="ItemContainer">
        <div className="center">
          <div className="profile">
            <div className="profile__image">
              <div className="profile__circle profile__circle--1"></div>
              <div className="profile__circle profile__circle--2"></div>
              <img src={FotoIncognita} alt="img" />
            </div>
            <div className="profile__name">Andres Cerero</div>
            <div className="profile__job">FrontEnd Developer and Design</div>
            <div className="profile__action">
                <button className="profile__btn profile__btn--Bottom">Follow</button>
                <button className="profile__btn">Massage</button>
            </div>
          </div>
          <div className="stats">
            <div className="stats__box">
                <span className="stats__value">523</span>
                <span className="stats__parameter">Posts</span>
            </div>
            <div className="stats__box">
				<span className="stats__value">1387</span>
				<span className="stats__parameter">Likes</span>
			</div>
            <div className="stats__box">
				<span className="stats__value">146</span>
				<span className="stats__parameter">Follower</span>
			</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
