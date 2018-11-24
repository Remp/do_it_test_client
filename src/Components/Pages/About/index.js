import React, { PureComponent } from 'react'
import meImg from 'Assets/images/me.jpg'
import * as routes from 'Constants/routes'
import './styles.less'

export class About extends PureComponent {
  handleBackClick = () => {
    const { history } = this.props

    history.push(routes.main)
  }

  render() {
    return (
      <div className="about-page-container">
        <div className="back-button-container">
          <i
            className="fas fa-chevron-left back-button"
            onClick={this.handleBackClick}
          />
        </div>
        <div className="content">
          <div className="photo-container">
            <img alt="" src={meImg} />
          </div>
          <div className="text">
            I am a passionated young developer, that has a simple dream to do
            what I really want and thrilled about. I've dived into coding 2
            years ago and since keep going. I had been learning C# for a half
            year untill fell in love with Javascript. For a 7 monthes I was
            working in amazing team and got an amazing experience that greatly
            enhanced me. I took a participant in projects related with work
            searching, helping depressed people, design solutions, taxi calling.
            I am appreciating this experience so much and want to become better.
            I don't want stay anymore, I want do my best. <br /> <br /> Now I am
            a student but it is not for a long time. I think we can help each
            other. I will contribute to your projects and you will make me
            better. That is perfect terms.
          </div>
        </div>
      </div>
    )
  }
}
