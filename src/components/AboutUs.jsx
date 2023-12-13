import "../styles/AboutUs.css";
import img5 from '../assets/image.jpg'
import img4 from '../assets/houses.jpg'
const About = () => {
  return (
    <div className="AboutUs">
      <div className="pics">
        <img src={img5} alt="img" className="pic1" />
        <img src={img4} alt="img" className="pic2" />
      </div>
      <div className="butshrt">
        <div>
          <span className="head11">
            <span className="sicon"></span>

            <h3>About us</h3>
          </span>
          <span className="head12">
            Prepare Your <b>Trip</b> Along With <b>Us</b>
          </span>
          <span className="samr">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic. Italic Mountains, she had a last
            view back on the 
          </span>
          <button className="readbutton">read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
