import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import { connect } from 'react-redux';

// Components
import Noticia from "./Noticia";

// Data (de prueba)
import {dataTest} from '../assets/datatest';

class Noticias extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let noticias = dataTest.map(noticia => <Noticia image={noticia.image} title={noticia.title} source={noticia.source}/>);
    
    let news = this.props.news && this.props.news.map(noticia => <Noticia image={noticia.news.img_url} title={noticia.news.title} source={noticia.news.source_name}/>)

    return (
      <Container>
        <Card.Group centered itemsPerRow={3}>
          {console.log(news)}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      news: state.newsByCategory.news
  }
}

export default connect(mapStateToProps)(Noticias);
