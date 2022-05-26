// http://localhost:8000/career

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import config from '../../config';

// import { CareerLink } from '../components/CareerLink';
const CAREER_LINK_TEXT = <code>https://<b>career.stevens.pro</b>/</code>
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


      {/* <section className="wrapper style5" style={{float: "left", padding: "8rem", width: "50%", height: "100%" }}> */}
      <section className="wrapper style5">

        <div className="inner">
          <div style={{float: "left"}}>
            <h3>Why?</h3>
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
                🔧 Or, maybe I hate using sub-standard tools
                <br />
                <em style={{marginLeft: "2rem"}}>... especially when I know there is <a href="https://www.obsidian.md/">a better way</a>!</em>
              </li>
              <li>
                <span role="img" aria-label="">
                  📈
                </span>
                Skills, Tools, etc. List Grows So Fast!
              </li>
              <li>
                <span role="img" aria-label="rocket-launch">
                  💣
                </span>
                <b>So...let's blowup the resume into a Career Website!</b>
              </li>
            </ul>
          </div>


          <div style={{ width: "45%", float: "left" }}>
              <h3>Updated Nearly Daily</h3>
              <p>
                FARRRR MORE UP-TO-DATE than this site (
                <a href="https://www.stevens.pro"><em>www.stevens.pro</em></a>
                ).

                <br />
                <br />
                Go there, you want to, just type  in your browser, Desktop or Mobile.
                <br />
                <div style={{ marginTop: "3rem" }}>
                  {CAREER_LINK}
                </div>
              </p>
              <p>
                <h4>What Changed? Check Git!</h4>

                Review Career Site Updates as
                <br />
                <a href="https://github.com/gsteve3/greg-stevens-career/commits/main">
                  <b><code>git commits</code></b>
                </a>
                on the &nbsp;
                <a href="https://github.com/gsteve3/greg-stevens-career/">
                  GitHub public repo
                </a>.

                <br />
                <br />
                <a href="https://github.com/gsteve3/greg-stevens-career/">
                  GitHub.com/<b>gsteve3/greg-stevens-career/</b>
                </a>

              </p>
            </div>

        </div>
        <br clear="all" />

      </section>

    </article>

  </Layout>
);

export default IndexPage;
