import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Collapsibles extends Component {
  render() {
    return (
      <form action="" method="get" className="container__form">
        <ul className="list__bar-menu">
          <Design 
            handleColourChange={this.props.handleColourChange}
            handleTypoChange={this.props.handleTypoChange}
            paletteValue={this.props.paletteValue}
            typoValue={this.props.typoValue}
            
            cardData = {this.props.cardData}
            contactIcons ={this.props.contactIcons}
            
            />/>
          <Fill
            skillsApi={this.props.skillsApi}
            name={this.props.name}
            job={this.props.job}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}

            handleKeyUpJ={this.props.handleKeyUpJ}
            handleKeyUpN={this.props.handleKeyUpN}
            handleKeyUpE={this.props.handleKeyUpE}
            handleKeyUpP={this.props.handleKeyUpP}
            handleKeyUpL={this.props.handleKeyUpL}
            handleKeyUpG={this.props.handleKeyUpG}


            handleChangeFile={this.props.handleChangeFile}
            fakeClick={this.props.fakeClick}
            img={this.props.img}
            fileInput={this.props.fileInput}
            
            addSkillorNot = {this.props.addSkillorNot}
            />
          <Share />
        </ul>
      </form>
    );
  }
}
export default Collapsibles;
