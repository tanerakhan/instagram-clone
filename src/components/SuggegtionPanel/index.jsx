import "src/assets/styles/components/suggegtion.scss";
import PropTypes from "prop-types";
import { capitalize, seperator } from "src/utils/helpers";
import { suggegtionLink } from "src/content";
export default function SuggegtionPanel({ suggegtions, user }) {
  return (
    <div className="feed-suggegtion">
      <div className="suggegtion-container suggegtion-fixed">
        <div className="shared-flex-content suggegtion-space">
          <div className="suggegtion-user-switch-line shared-flex-content">
            <div className="suggegtion-avatar suggegtion-avatar-huge">
              <div className="global-user-avatar global-user-avatar-huge">
                <a className="shared-flex-center" href="/">
                  <img
                    className="global-image-avatar"
                    src={user?.user_image}
                    alt={user?.user_name}
                  />
                </a>
              </div>
            </div>
            <div className="suggegtion-user-info">
              <span className="global-text-username">{user?.user_name}</span>
              <span className="global-sub-text">{user?.user_full_name}</span>
            </div>
            <div className="suggegtion-user-switch">
              <button className="p-0 blue-button">switch</button>
            </div>
          </div>
        </div>
        <div className="suggegtion-for-you shared-flex-content suggegtion-space">
          <div className="suggegtion-for-you-in">
            <span className="global-sub-text ">Suggegtion for you</span>
          </div>
          <div className="suggegtion-for-you-action">
            <a href="/">see all</a>
          </div>
        </div>
        <div className="suggegtion-for-you-container">
          {suggegtions?.map((suggegtion, i) => (
            <div className="shared-flex-content suggegtion-space" key={i}>
              <div className="suggegtion-user-switch-line shared-flex-content">
                <div className="suggegtion-avatar">
                  <div className="global-user-avatar">
                    <a
                      className="shared-flex-center"
                      href={suggegtion.user_url}
                    >
                      <img
                        className="global-image-avatar"
                        src={suggegtion.user_image}
                        alt={suggegtion.user_name}
                      />
                    </a>
                  </div>
                </div>
                <div className="suggegtion-user-info suggegtion-user-small">
                  <span className="global-text-username">
                    {suggegtion.user_name}
                  </span>
                  <span className="global-sub-text suggegtion-sub-text-for-you">
                    {capitalize(suggegtion.status)}{" "}
                    {suggegtion.status === "new" ? "" : "by"}{" "}
                    {seperator(suggegtion.who_is_following)}
                  </span>
                </div>
                <div className="suggegtion-user-switch">
                  <button className="p-0 blue-button">follow</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="suggegtion-footer-link shared-flex-content">
          <ul className="suggegtion-link-ul mb-x2">
            {suggegtionLink?.map((link) => (
              <li>
                <a href="/" className="footer-link-text">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <span className="suggegtion-footer-copyright footer-link-text">
            © 2022 INSTAGRAM FROM META
          </span>
        </div>
      </div>
    </div>
  );
}

SuggegtionPanel.propTypes = {
  suggegtions: PropTypes.array,
  user: PropTypes.object,
};
