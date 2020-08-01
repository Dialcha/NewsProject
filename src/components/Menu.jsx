import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { fetchNews } from '../actions/actions';

// components
import MenuItem from "./MenuItem";

// data
import dataMenu from "../assets/datamenu";
import { connect } from "react-redux";

class MenuNews extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "principal" };
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleItemClick = (e, { id }) => this.props.onCategoryClick(id);

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/principal">
            <Menu.Item
              id="0"
              name="principal"
              active={activeItem === "principal"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/politica">
            <Menu.Item
              id="1"
              name="politica"
              active={activeItem === "politica"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/internacionales">
            <Menu.Item
              id="2"
              name="internacionales"
              active={activeItem === "internacionales"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/tecnologia">
            <Menu.Item
              id="3"
              name="tecnologia"
              active={activeItem === "tecnologia"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/espectaculos">
            <Menu.Item
              id="4"
              name="espectaculos"
              active={activeItem === "espectaculos"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/deportes">
            <Menu.Item
              id="5"
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

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (id) => dispatch(fetchNews(id)),
  };
};

export default connect(null, mapDispatchToProps)(MenuNews);
