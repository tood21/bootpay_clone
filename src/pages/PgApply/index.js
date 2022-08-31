import React from "react";

import SectionRegistrationProcess from "./SectionRegistrationProcess";
import SectionProcess from "./SectionProcess";
import SectionAlliance from "./SectionAlliance";
import SectionSupport from "./SectionSupport";

const PgApply = () => {
  return (
    <div>
      <h2 className="sr-only">PG가입하기</h2>
      <SectionSupport />
      <SectionAlliance />
      <SectionProcess />
      <SectionRegistrationProcess />
    </div>
  );
};

export default PgApply;
