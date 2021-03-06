import React from 'react';
import axios from 'axios';
import Story from './Story';
import './styles/styles.scss'

class Stories extends React.Component {
  constructor() {
    super();

    this.state = { articles: [] }
  }

  componentWillMount() {
    axios.get('https://www.narcity.com/lmlsug.json').then((res) => {
      this.setState({ articles: res.data });
    });
  }

  renderArticles() {
    return this.state.articles.map(articles => 
      <Story key={articles._id} articles={articles} />
    )
  }

  render() {
    return (
      this.renderArticles()
    )
  }
}

export default Stories;
