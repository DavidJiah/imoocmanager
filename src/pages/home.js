import React, { PureComponent } from 'react';

/** 主干页 */
class Home extends PureComponent {
    /** 挂载 */
    render() {
        return (
            <>
                <div style={{ fontSize: '20px' }}>
                    Hello,World
                </div>
            </>
        );
    }
}
Home.defaultPros = {};
Home.propTypes = {};
export default Home;
