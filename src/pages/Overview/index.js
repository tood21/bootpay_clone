import React from 'react';

import Section_banner from "./Section_banner";
import Overview_section from "./Overview_section";
import sectionData from "./Overview_section/sectionData";

const Overview = () => {
    return (
        <div>
            <h2 className="sr-only">살펴보기</h2>
            <Section_banner />
            {
                sectionData.map((data) => (
                    <Overview_section key={data.id} data={data}  />
                ))
            }
        </div>
    );
};

export default Overview;
