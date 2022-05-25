// http://localhost:8000/career

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import { CareerLink } from '../components/CareerLink';
import config from '../../config';

const CAREER_LINK_TEXT = <code>https://career.stevens.pro/</code>
const CAREER_LINK = <Link
                      to={config.CAREER_URL}
                      target="_blank"
                    >{CAREER_LINK_TEXT}</Link>

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Career Website</h2>
        <p>Launched May 2022 🚀</p>

        <h2>{CAREER_LINK}</h2>

        <p style={{marginTop: "3rem"}}>
          <em>
            Powered by &nbsp;
            <a href="https://obsidian.md/publish" target="_blank">
              Obsidian Publish
            </a>
          </em>
        </p>
      </header>

{/* ---- end header --- */}


      <section className="wrapper style5" style={{float: "left"}}>
        <div className="inner">
          <ul class="">
            <li>
              <span role="img" aria-label="rocket-launch">
                😱
              </span>
              Typical Resume could not hold all of what I do.
            </li>
            <li>
              😕 Or I just couldn't figure it out,
            </li>
            <li>
              🔧 Or... I hate using sub-standard tools when I know there is a
              better way!
            </li>
            <li>
              <span role="img" aria-label="">
                📈
              </span>
              Skills, Tools, etc. List Grows So Fast!
            </li>
            <li>
              <span role="img" aria-label="rocket-launch">
                💡
              </span>
              So...let's make a &nbsp;
              <Link to="{careerWebsiteUrl}">Career Website</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="wrapper style5">
        <div className="inner">
            <h3>Updated Nearly Daily</h3>
            <p>
              FARRRR MORE UP-TO-DATE han here
              <br />
              Go there, you want to, just type  in your browser, Desktop or Mobile.
              <br />
              {/* , marginLeft: "auto", marginRight: "auto" */}
              <div style={{padding: "3rem", textAlign: "center"}}>
                {CAREER_LINK}
              </div>
            </p>
          </div>
      </section>
      <br clear="all" />




    </article>
  </Layout>
);

export default IndexPage;
