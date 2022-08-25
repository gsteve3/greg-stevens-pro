// http://localhost:8000/career

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import config from '../../config';

import githubSocialImage from '../assets/images/greg-stevens-career-socialify.png';


// import { CareerLink } from '../components/CareerLink';
const RESUME_LINK_TEXT = <code>https://<b>resume.stevens.pro</b>/</code>
const RESUME_LINK = <Link
                      to={config.RESUME_URL}
                      target="_blank"
                    >{RESUME_LINK_TEXT}</Link>

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>

        <h2 style={{textTransform: "none"}}>resume.stevens.pro</h2>

        <p style={{marginTop: "2rem"}}>
          <Link
            to={config.RESUME_URL}
          >🌐 View Resume Website</Link>
        </p>

        <p style={{marginTop: "2rem"}}>
          <Link
            to={config.RESUME_PDF_URL}
          >💼 Download PDF Resume</Link>
        </p>


{/*
        <p style={{marginTop: "3rem"}}>
          <em>
            Powered by &nbsp;
            <a href="https://www.jsonresume.org" target="_blank">
              JSON Resume
            </a>
          </em>
        </p> */}

        <br clear="all" />
      </header>

    {/* ---- end header --- */}

    <section>
      <div class="text-center">
        <p>🚀 Launched Aug 2022</p>
      </div>

      <h3>vvv Geek Stuff Below vvv</h3>

      <p style={{marginTop: "2rem"}}>
        <Link
          to={config.RESUME_JSON_URL}
        >🤓 View Resume JSON File on GitHub</Link>
      </p>

      <p style={{marginTop: "2rem"}}>
        <Link
          to="https://www.jsonresume.org/"
          target="_blank"
        >🎓 Learn About the JSON Resume Schema</Link>
      </p>

    </section>



    </article>

  </Layout>
);

export default IndexPage;
