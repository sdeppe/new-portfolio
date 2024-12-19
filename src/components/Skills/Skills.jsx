import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png";
import './Skills.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>These are some of the technologies and tools I have experience with.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true}
                autoPlaySpeed={3000} 
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={500}
                arrows={true} 
                className="skill-slider"
              >
                {/* Page 1 */}
                <div className="item">
                  <h3>Programming Languages</h3>
                  <div className="skill-content">
                    Python <br />
                    Java <br />
                    C++ <br />
                  </div>
                </div>

                {/* Page 2 */}
                <div className="item">
                  <h3>Frontend & Backend Frameworks</h3>
                  <div className="skill-content">
                    React <br />
                    Vue.js <br />
                    Flask <br />
                    Node.js <br />
                    Bootstrap
                  </div>
                </div>

                {/* Page 3 */}
                <div className="item">
                  <h3>Tools & Platforms</h3>
                  <div className="skill-content">
                    AWS <br />
                    Google Cloud Vision OCR <br />
                    Docker <br />
                    MongoDB <br />
                    Git <br />
                    npm
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
