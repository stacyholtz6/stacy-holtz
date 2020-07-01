import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default () => (
  <Layout>
    <div>
      <Banner />
      <div id="main">
        <section id="one" className="tiles">
          <article
            style={{ backgroundImage: `url('/static/images/paws.jpeg')` }}
          >
            <header className="major">
              <h3>Projet Awesome</h3>
              <p>
                A web application designed to help re-home animals located in
                your area
              </p>
            </header>
            <a
              className="link primary"
              href="https://github.com/stacyholtz6/projectAwesome"
              target="_blank"
            ></a>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/utravel.jpeg')` }}
          >
            <header className="major">
              <h3>U-Travel</h3>
              <p>
                This is a full-stack deployed website that allows the user to
                create an account using Passport authentication. Before logging
                in, a user can perform a flight or hotel search, however, the
                magic comes when setting up an account so that they can save all
                of their trip information.
              </p>
            </header>
            <a
              className="link primary"
              href="https://github.com/stacyholtz6/U-Travel"
              target="_blank"
            ></a>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/friends2.jpeg')` }}
          >
            <header className="major">
              <h3>Friend Finder</h3>
              <p>This fun survey matches you up with a workout friend. It is built with Express, Javascript, and Node.js</p>
            </header>
            <a className="link primary"
              href="https://github.com/stacyholtz6/FriendFinder"
              target="_blank"></a>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/weather.jpeg')` }}
          >
            <header className="major">
              <h3>Weath App</h3>
              <p>Weather app build with REACT and REACT HOOKS</p>
            </header>
            <a className="link primary"
              href="https://weather-react-co.herokuapp.com/"
              target="_blank"></a>
          </article>
          {/* <article
            style={{ backgroundImage: `url('/static/images/pic05.jpg')` }}
          >
            <header className="major">
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article> */}
          {/* <article
            style={{ backgroundImage: `url('/static/images/pic06.jpg')` }}
          >
            <header className="major">
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article> */}
        </section>
        <section id="">
          <div className="inner">
            <header className="major">
              <h2>Web Developer - Business Consultant</h2>
            </header>
            <p>
              I am web web developer and business consultant with a background in business management. I have a passion for helping others with the website design and build. I specialize in React, Wordpress and static sites built from scratch. Contact me for more information. 
            </p>
            {/* <ul className="actions">
              <li>
                <Link href="/landing">
                  <a className="button next">Get Started</a>
                </Link>
              </li>
            </ul> */}
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
