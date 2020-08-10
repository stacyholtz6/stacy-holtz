const Footer = (props) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://github.com/stacyholtz6"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/stacyholtz/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/thestacyholtz"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Stacy Holtz 2020</li>
        <li>
          {' '}
          <a href="https://nextjs.org/">Built with Next.js</a>{' '}
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
