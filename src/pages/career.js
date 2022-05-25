// http://localhost:8000/career

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import { CareerLink } from '../components/CareerLink';
import config from '../../config';

const CAREER_LINK_TEXT = <code>career.stevens.pro</code>
const CAREER_LINK = <Link
                      to={config.CAREER_URL}
                      target="_blank"
                    >{CAREER_LINK_TEXT}</Link>

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>{CAREER_LINK}</h2>
        <p>
          <em>Career Website Created in May 2022</em>
        </p>
        <ul class="">
            <li>
              <span role="img" aria-label="rocket-launch">
                😱
              </span>
              Typical Resume could not hold all of what I do.
              <br />
              Or I just couldn't figure it out,
              <br />
              Or... I hate using sub-standard tools when I know there is a
              better way!
            </li>
            <li>
              <span role="img" aria-label="rocket-launch">
                😱
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

            <li>
              <br />
              {/* <!-- whitespace --> */}
            </li>
            <li>
              {CAREER_LINK}
            </li>
            <li>{/* whitespace */}</li>
            <li>
              <br />
              <em>
                Powered by &nbsp;
                <a href="https://obsidian.md/publish" target="_blank">
                  Obsidian Publish
                </a>
              </em>
            </li>

            <li>
              {/* Some whitespace, otherwise error on 5 second trial:

                Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
                    in li (at career.js:37)
                    in ul (at career.js:19)
                    in header (at career.js:17)
                    in article (at career.js:16)
                    in div (at Layout.js:62)
                    in div (at Layout.js:55)
                    in StaticQueryDataRenderer (at gatsby-browser-entry.js:39)
            */}
            </li>
          </ul>
      </header>

{/* ---- end header --- */}


      <section className="wrapper style5">
        <div className="inner">
          <h3>Updated Nearly Daily</h3>
          <p>
            FARRRR MORE UP-TO-DATE han here
            <br />
            Go there, you want to, just type
            <br />
            {CAREER_LINK}
            <br /> in your browser, Desktop or Mobile.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
