import { useHover } from "src/utils/hooks";
import { capitalize, seperator } from "src/utils/helpers";
import "src/assets/styles/components/preview.scss";

export default function Preview({ suggegtion, index }) {
  const [isView, eventHandlers] = useHover();
  return (
    <div className="shared-flex-content suggegtion-space">
      <div className="suggegtion-user-switch-line shared-flex-content">
        <div className="suggegtion-avatar">
          <div className="global-user-avatar">
            <a className="shared-flex-center" href={suggegtion.user_url}>
              <img
                className="global-image-avatar"
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  suggegtion.user_image
                }`}
                alt={suggegtion.user_name}
              />
            </a>
          </div>
        </div>
        <div className="suggegtion-user-info suggegtion-user-small">
          <span
            {...eventHandlers}
            className="global-text-username global-text-link"
          >
            {suggegtion.user_name}
            <div
              className="preview preview-absolute"
              style={isView ? { zIndex: 99 } : { zIndex: 5 }}
            >
              {isView && (
                <div className="preview-card">
                  <div className="preview-card-inside">
                    <header>
                      <div className="suggegtion-avatar suggegtion-avatar-huge">
                        <div className="global-user-avatar global-user-avatar-huge">
                          <a className="shared-flex-center" href="/">
                            <img
                              className="global-image-avatar"
                              src={`${import.meta.env.VITE_IMAGE_URL}/${
                                suggegtion.user_image
                              }`}
                              alt={suggegtion.user_name}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="suggegtion-user-info">
                        <span className="global-text-username">
                          {suggegtion.user_name}
                        </span>
                        <span className="global-sub-text">
                          {suggegtion.user_full_name}
                        </span>
                      </div>
                    </header>
                    <section>
                      <div className="preview-follow-info-items">
                        <div className="preview-follow-item flex-custom-column">
                          <span className="shared-flex-center">100</span>
                          <span className="shared-flex-center">post</span>
                        </div>
                        <div className="preview-follow-item flex-custom-column">
                          <span className="shared-flex-center">40</span>
                          <span className="shared-flex-center">followers</span>
                        </div>
                        <div className="preview-follow-item flex-custom-column">
                          <span className="shared-flex-center">60</span>
                          <span className="shared-flex-center">following</span>
                        </div>
                      </div>
                    </section>
                    <footer>footer</footer>
                  </div>
                </div>
              )}
            </div>
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
  );
}
