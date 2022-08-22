import React from 'react';
import Section_support from "./Section_support";

import Section_alliance from "./Section_alliance";
import Section_process from "./Section_process";
import Section_RegistrationProcess from "./Section_RegistrationProcess";

const PgApply = () => {
    return (
        <div>
            <h2 className="sr-only">PG가입하기</h2>
            <Section_support />
            <Section_alliance />
            <Section_process />
            <Section_RegistrationProcess />
        </div>
    );
};

export default PgApply;
