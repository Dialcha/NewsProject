import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MenuItem from "./MenuItem";

export default class MenuNews extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "principal" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Link to="/home"> 
            <Menu.Item
              name="principal"
              active={activeItem === "principal"}
              onClick={this.handleItemClick}
            />
            </Link>

            <Link to="/politica">
            <Menu.Item
              name="politica"
              active={activeItem === "politica"}
              onClick={this.handleItemClick}
            />
            </Link>
            <Link to="/internacionales">
            <Menu.Item
              name="internacionales"
              active={activeItem === "internacionales"}
              onClick={this.handleItemClick}
            />
            </Link>
            <Link to="/tecnologia">
            <Menu.Item
              name="tecnologia"
              active={activeItem === "tecnologia"}
              onClick={this.handleItemClick}
            />
            </Link>
            <Link to="/espectaculos">
            <Menu.Item
              name="espectaculos"
              active={activeItem === "espectaculos"}
              onClick={this.handleItemClick}
            />
            </Link>
            <Link to="/deportes">
            <Menu.Item
              name="deportes"
              active={activeItem === "deportes"}
              onClick={this.handleItemClick}
            />
            </Link>
            <Menu.Menu position="right">
              <div className="ui right aligned category search item">
                <div className="ui icon input">
                  <input
                    className="prompt"
                    type="text"
                    placeholder="Buscar noticias..."
                  />
                  <i className="search link icon" />
                </div>
                <div className="results" />
              </div>
            </Menu.Menu>
          </Menu>
        </Segment>
    );
  }
}
