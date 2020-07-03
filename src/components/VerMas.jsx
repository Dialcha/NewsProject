import React from 'react';
import { Icon, Button } from "semantic-ui-react";

function VerMas({ url }) {
    return(
        <Button animated>
          <Button.Content visible>Leer noticia original</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
    )
}

export default VerMas;