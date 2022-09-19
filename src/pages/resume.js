import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

import config from '../../config';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import banner from '../assets/images/banner.jpg';
const IndexPage = () => <Layout>
	<article id="main">
		<header>
      <h2 style={{textTransform: "none"}}>Greg's Resume</h2>

      <Link
        to={config.RESUME_PDF_URL_SHORT}
        className="button primary"
      >💼 Download 2-Page Resume PDF</Link>

      <ul className="actions special">
        <li>
          <Link
            to={config.RESUME_URL}
            className="button"
          >🌐 View Resume Website (Long)</Link>
        </li>
        <li>
          <Link
            to={config.RESUME_PDF_URL}
            className="button"
          >💼 Download PDF Resume (Long)</Link>
        </li>
      </ul>



		</header>
		<section className="wrapper style5" style={{textAlign: "center"}}>
			<div className="inner">
{/* 
				<section>
					<div className="row">
						<div className="col-6 col-12-medium">

              <h3>
                <Link
                  to={config.RESUME_URL}
                  className="button"
                  >🌐 View Resume Website</Link>
              </h3>

						</div>
						<div className="col-6 col-12-medium">
              <h3>
                <Link
                  to={config.RESUME_PDF_URL}
                  className="button"
                >💼 Download PDF Resume</Link>
              </h3>
						</div>
					</div>
				</section>
*/}

        <section>
          <div>
            <h3>About JSON Resume Schema</h3>
            <p>The Open Source power behind the scenes of the "long" resume.</p>
            <div class="row">
              <div className="col-6 col-12-medium">
                <p>
                  <Link
                    to="https://www.jsonresume.org/"
                    target="_blank"
                  >🎓 Learn About the JSON Resume Schema</Link>
                </p>
              </div>
              <div className="col-6 col-12-medium">
                <p>
                  <Link
                    to={config.RESUME_JSON_URL}
                  >🤓 View Source JSON File on GitHub</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
