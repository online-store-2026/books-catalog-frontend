import './MainBanner.css';
import bannerSm from './banner-mob.png';

export const MainBanner = () => {
  return (
    <section className="banner-container">
      <div className="banner-wrapper">
        <img
          src={bannerSm}
          alt="Main Banner"
          className="banner-img"
        />
      </div>

      <div className="banner-pagination">
        <div className="line active"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};
