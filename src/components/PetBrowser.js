import React from 'react'

import Pet from './Pet'
class PetBrowser extends React.Component {
  render() {
    return (
      this.props.pets.map(disPet => {
        return (
          <div className="ui cards">
            <Pet 
              pet={disPet}
              onAdoptPet={this.props.onAdoptPet(disPet.id)}
            />
          </div>
        )
      })
    )
  }
}

export default PetBrowser
