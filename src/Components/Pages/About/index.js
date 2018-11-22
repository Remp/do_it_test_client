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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor porro
            expedita minus cupiditate veritatis dolores soluta, odio
            consectetur? Unde repellat tenetur officia, consequatur, quaerat
            maxime rem magnam dignissimos doloremque non laboriosam delectus
            ullam omnis nobis modi sapiente quas necessitatibus saepe, expedita
            est! Totam mollitia aut vitae vel, dicta magni, doloribus, illo
            possimus dolores dignissimos a sapiente fuga. Quod quia magni,
            voluptatum vel, deleniti ea voluptates rerum, aliquam quo odit
            similique. Consequuntur iure provident dignissimos ratione
            quibusdam! Quia reprehenderit optio quaerat quis. Dolores eum esse
            expedita alias rerum quae natus! Totam vero, temporibus cum unde
            magnam amet quisquam repudiandae magni voluptate.
          </div>
        </div>
      </div>
    )
  }
}
