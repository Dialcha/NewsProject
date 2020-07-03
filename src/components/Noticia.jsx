import React from "react";
import { Card, Image } from "semantic-ui-react";
import VerMas from "./VerMas";

function Noticia({ image, title, source, url }) {

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{title}</Card.Description>
        <Card.Header>{source}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <VerMas url={url}></VerMas>
      </Card.Content>
    </Card>
  );
}

export default Noticia;
