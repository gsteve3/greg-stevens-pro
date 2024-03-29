import React from 'react';
import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';


import { Link } from 'gatsby';




const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Link to="/resume" className="button primary">
              Resume
            </Link>
          </li>
          <li>
            <Link to="https://www.dalyle.ca/" className="button secondary">
              Dalyle DevOps Inc. (My Biz)
            </Link>
          </li>
        </ul>

        <iframe width="1280" height="720" src="https://www.youtube.com/embed/1nIGWQII0p4?start=55" title="TECH MUSIC VIDEO (TMV) - Reactive Native Day 1 - DEV Env Setup - 3 hours cut to 10 minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Trying to build right since 1999
            {/* <!-- Producing Websites since 1999 --> */}
          </h2>
          <p>
            It all started when I was around eight years old, circa 1994.
            <br />
            I got to buy a super-old computer from a garage sale.
            <br />That computer only had storage for its core OS.
            <br />It came with a book that showed how to type code to make simple (BASIC?) programs.
            <br />For example, one would make your name flash across the <strike>monitor</strike> TV screen.
            <br />I typed and re-typed that program. Loving it. Never beeing the same again.
          </p>
          <p>
            Currently Seeking Peers and Mentors for DevOps, Agile PM, Traditional PM, and almost anything else.
          </p>
          <div style={{color: 'yellow'}}>
            <h2 style={{color: 'yellow'}}>
            Site is a Work in Progress
            </h2>

            <p>Started Dec. 25, 2020.</p>
          </div>
        </header>
        {/* `style*` numbers are out of order so visual colours are laid out best. */}
        <ul className="icons major">
          <li>
            <span className="icon fa-heart major style5">
              <span className="label">Love</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style2">
              <span className="label">Develop</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-dumbbell major style4">
              <span className="label">Lift</span>
            </span>
          </li>
          <li>
            {/* style5 was bright red */}
            <span className="icon solid fa-hammer major style6">
              <span className="label">Use a Hammer</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-wrench major style3">
              <span className="label">Pull a Wrench</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Magna primis lobortis
            <br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Thank You</h2>
          <p>
            Thanks for stopping by.
          </p>
        </header>
        {/*
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
         */}
      </div>
    </section>
  </Layout>
);

export default IndexPage;
