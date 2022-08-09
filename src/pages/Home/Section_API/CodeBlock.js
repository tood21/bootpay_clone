import React from 'react';
import {CopyBlock, dracula} from "react-code-blocks";

const CodeBlock = ({code,language,lineNumbers}) => {
    return (
        <CopyBlock
            language={language}
            text={code}
            showLineNumbers={lineNumbers}
            theme={dracula}
            wrapLines={true}
            codeBlock
        />
    );
};

export default CodeBlock;
