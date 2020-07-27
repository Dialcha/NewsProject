import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import Noticia from "./Noticia";

class Noticias extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Card.Group centered itemsPerRow={3}>
          <Noticia
            image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            title="Se está creando el mejor sitio web"
            source="La Buena"
          ></Noticia>
          <Noticia
            image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            title="Se está creando el mejor sitio web"
            source="La Buena"
          ></Noticia>
          <Noticia
            image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            title="Se está creando el mejor sitio web"
            source="La Buena"
          ></Noticia>
          <Noticia
            image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            title="Se está creando el mejor sitio web"
            source="La Buena"
          ></Noticia>
          <Noticia
            image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            title="Se está creando el mejor sitio web"
            source="La Buena"
          ></Noticia>
          <Noticia
            image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            title="Se está creando el mejor sitio web"
            source="La Buena"
          ></Noticia>
          <Noticia
            image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/45/a8/4a/45a84a44-1bfa-36ac-bbad-9864a34bae4a/Icon-Production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            title="Se está creando el mejor sitio web"
            source="La Buena"
          ></Noticia>
        </Card.Group>
      </Container>
    );
  }
}

export default Noticias;
