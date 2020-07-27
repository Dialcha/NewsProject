import React from 'react';
import { Menu } from "semantic-ui-react";

function MenuItem({name, handleItemClick}) {
    return(
        <Menu.Item
            name={name}
            //active={activeItem === name}
            onClick={handleItemClick}
          />
    );
}

export default MenuItem;