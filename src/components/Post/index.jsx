import 'src/assets/styles/components/post.scss'
import { icons } from 'src/utils/icons'
import PropTypes from 'prop-types';

export default function Post({articles}) {
  return (
    <div className='feed-post'>
      {articles?.map((article, i) => (
        <article key={i}>
          <div className='post-container post-box-style post-box-bottom'>
          <div className='post-box shared-box-model no-border'>
            <div className='post-article-flex'>
              <div className='post-box-inside shared-post-padding'>
                <div className='post-header'>
                  <div className='post-header-info'>
                    <div className='post-image-wrapper'>
                      <img src={article.avatar} />
                    </div>
                    <a href={article.user.url}><span>{article.user.name}</span></a>
                  </div>
                  <div className='post-header-menu'>
                    <span> {icons.menu} </span>
                  </div>
                </div>
              </div>
              <div className='post-box-inside post-content'>
                <div className='post-image'>
                  <img src={article.post_image} alt={article.post_alt} />
                </div>
              </div>
              <div className='post-box-inside'>
                <div className='post-footer'>
                  <div className='post-button-group shared-flex-content shared-button-padding'>
                    <div className='post-button-group-left'>
                      <span>
                        <button className='post-button-line button-reset'>{icons.like}</button>
                      </span>
                      <span>
                        <button className='post-button-line post-button-center button-reset'>{icons.comment}</button>
                      </span>
                      <span>
                        <button className='post-button-line button-reset'>{icons.share}</button>
                      </span>
                    </div>
                    <div className='post-button-group-right'>
                      <span>
                        <button className='post-button-line button-reset'>{icons.save}</button>
                      </span>
                    </div>
                  </div>
                  <div className='shared-button-padding'>
                    <a href="/" className='post-text-title'><span>685 likes</span></a>
                  </div>
                  <div className='shared-button-padding'>
                      <div className='post-description-section'>
                          <a href={article.user.url} className="post-text-title">
                            <span>{article.user.name}</span>
                          </a>
                          <p>{article.description}</p>
                    </div>
                    <div className='post-tags'>{article.tags?.map((tag, i) => <a key={i} href={tag.url} className="post-text-tag post-tags-line">{`#${tag.name} `}</a>)}</div>
                  </div>
                  <div className='shared-button-padding mb-x2'>
                    <a href="/" className='post-text-title post-text-time'><time dateTime='2022-03-16T09:03:36.000Z'>1 Days Ago</time></a>
                  </div>
                  {
                    article.is_active_post &&
                    (
                      <div className='post-comment-area'>
                        <div className='post-comment-inside shared-button-padding m-0'>
                          <form className='shared-flex-content'>
                            <div className='post-emoji'>{icons.emoji}</div>
                            <textarea aria-label="Add a comment…" placeholder="Add a comment…" className="p-0" autoComplete="off" autoCorrect="off"></textarea>
                            <button className='p-0 blue-button'>post</button>
                          </form>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          </div>
        </article>
      ))}
    </div>
  )
}

Post.propTypes = {
  articles: PropTypes.array
}