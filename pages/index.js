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
              <h3>Project Awesome</h3>
              <p>
                A web application designed to help re-home animals located in
                your area.
              </p>
            </header>
            <a
              className="link primary"
              href="http://paws.wtf/"
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
              href="https://u-travel-dt.herokuapp.com/"
              target="_blank"
            ></a>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/friends2.jpeg')` }}
          >
            <header className="major">
              <h3>Friend Finder</h3>
              <p>
                This fun survey matches you up with a workout friend. It is
                built with Express, Javascript, and Node.js
              </p>
            </header>
            <a
              className="link primary"
              href="https://rocky-plateau-65872.herokuapp.com/"
              target="_blank"
            ></a>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/weather.jpeg')` }}
          >
            <header className="major">
              <h3>React Weather App</h3>
              <p>Weather app build with REACT and REACT HOOKS</p>
            </header>
            <a
              className="link primary"
              href="https://weather-react-co.herokuapp.com/"
              target="_blank"
            ></a>
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
              <div>
                <h2 className="no-margin">Web Developer</h2>
                <h2>& Business Consultant</h2>
              </div>
            </header>
            <p>
              I have a passion for helping others with website design and
              creation. Using my experience and expertise as full stack web
              developer, I create solutions that my clients love. I specialize
              in React/Node apps, Wordpress and static sites built from scratch.
            </p>
            <p> Contact me for more information to start a project or hire me.</p>
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
