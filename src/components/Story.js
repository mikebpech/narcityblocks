import React from 'react';
import Stories from './Stories';

class Story extends React.Component {
  componentDidMount() {
  }
  render(props) {
    return (
      <div className="grid">
          <div className="card">
            <div className="card__image">
              <img src={this.props.articles.media} alt="" />

              <div className="card__overlay card__overlay--indigo">
                <div className="card__overlay-content">
                  <ul className="card__meta">
                    <li><a href={this.props.articles.url}><i className="fa fa-tag"></i>Author </a></li>
                    <li><a href={this.props.articles.url}><i className="fa fa-clock-o"></i> 2 min ago</a></li>
                  </ul>

                  <a href={this.props.articles.url} className="card__title">{this.props.articles.title}</a>

                  <ul className="card__meta card__meta--last">
                    <li><a href={this.props.articles.url}><i className="fa fa-user"></i> Read More..</a></li>
                    <li><a href={this.props.articles.url}><i className="fa fa-facebook-square"></i>{this.props.articles.shares} Shares</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>	
    );
  }
}

export default Story;
