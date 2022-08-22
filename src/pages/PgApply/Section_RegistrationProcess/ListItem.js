import React from 'react';
import Accordion from "components/Accordion";

const ListItem = ({data}) => {
    return (
        <li>
            <Accordion title={data.title} content={data.content} />
        </li>
    );
};

export default ListItem;
