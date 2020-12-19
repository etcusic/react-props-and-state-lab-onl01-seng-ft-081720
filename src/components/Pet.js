import React from 'react'
class Pet extends React.Component {

  showGender = () => {
    return this.props.pet.gender === 'male' ? '♂' : '♀'
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}
            {this.showGender()}
          </a>
          <div className="meta">
            <span className="date">
              {this.props.pet.type}
            </span>
          </div>
          <div className="description">
            <p>{this.props.pet.age}</p>
            <p>{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.pet.isAdopted ?    
            <button className="ui disabled button">Already adopted</button> : 
            <button onClick={this.props.onAdoptPet} className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet


            