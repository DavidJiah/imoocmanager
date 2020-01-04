import React, { useState } from 'react';
import { Button } from 'antd';

/** hooks */
function Hooks() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <Button onClick={() => { setcount(count + 1); }}>
                Click me
            </Button>
        </div>
    );
}
export default Hooks;
