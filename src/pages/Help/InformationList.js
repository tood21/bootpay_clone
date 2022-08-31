import React from "react";
import Accordion from "components/Accordion";

const InformationList = ({ getClickAccodion, isActiveAccodion, list }) => {
  return (
    <div>
      {list.map((data) => (
        <div key={data.id} onClick={() => getClickAccodion(data)}>
          <Accordion
            active={data.id === isActiveAccodion}
            key={data.id}
            title={data.title}
            content={data.content}
          />
        </div>
      ))}
    </div>
  );
};
export default InformationList;
