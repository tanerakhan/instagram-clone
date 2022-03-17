import "src/assets/styles/components/default.scss"
import { icons } from 'src/utils/icons'
import logo from "src/assets/images/logo.png"

export default function DefaultLayout({ children, classes }) {
  return (
    <div className={classes}>
      <section>
        <header className="shared-box-model">
          <div className="in-header-sticky shared-box-model">
            <div className="nav-items">
              <div className="header-content header-logo-content">
                <a href="/">
                  <div className="nav-in-flex">
                    <img src={logo} alt="Instagram logo" />
                  </div>
                </a>
              </div>
              <div className="header-content header-search-content">
                <div className="header-search-item">
                  <span>{icons.search}</span>
                  <input type="text" />
                </div>
              </div>
              <div className="header-content header-nav-content">
                <div className="nav-in-flex header-nav-icon">
                  <ul className="shared-flex-content">
                    <li><a href="/">{icons.home}</a></li>
                    <li><a href="/">{icons.message}</a></li>
                    <li><a href="/">{icons.add}</a></li>
                    <li><a href="/">{icons.explore}</a></li>
                    <li><a href="/">{icons.like}</a></li>
                    <li className="global-user-avatar"><a className="shared-flex-center" href="/">T</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </section>
    </div>
  )
}
