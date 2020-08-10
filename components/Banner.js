const Banner = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <a href="https://github.com/stacyholtz6" target="_blank">
        <header className="major">
          <h1>Stacy Holtz</h1>
        </header>
      </a>

      <div className="content">
        <p>
          Full Stack Developer - Specializing in React, JS, Node & MERN Stack
        </p>
        <ul className="actions">
          <li>
            <a href="#two" className="button next scrolly">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <p>Read more on my blog.</p>
        <ul className="actions">
          <li>
            <a
              href="https://www.syntaxsirens.com/blog?author=5eeb8c2ff68be03ec87800c2"
              className="button next"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
