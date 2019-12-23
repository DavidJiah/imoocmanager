import React, { PureComponent } from 'react';
import { Button } from 'antd';

/** */
class Footer extends PureComponent {
    /** */
    render() {
        return (
            <>
                <div>This is Footer</div>
                <Button>This is Footer</Button>
            </>
        );
    }
}
Footer.defaultPros = {};
Footer.propTypes = {};
export default Footer;
