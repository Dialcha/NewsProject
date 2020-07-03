import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class MenuNews extends Component {
  state = { activeItem: "principal" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="principal"
            active={activeItem === "principal"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="politica"
            active={activeItem === "politica"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="internacionales"
            active={activeItem === "internacionales"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="tecnologia"
            active={activeItem === "tecnologia"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="espectaculos"
            active={activeItem === "espectaculos"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="deportes"
            active={activeItem === "deportes"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
