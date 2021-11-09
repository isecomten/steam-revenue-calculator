import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }
    render() {
        return (
            <div className="sidebar">
                <ProSidebar
                    className={this.state.collapsed ? "collapsed xs" : "xs"}
                    onMouseEnter={console.log('Enter')}
                    onMouseLeave={console.log('Leave')}
                >
                    <Menu>
                        <MenuItem>Steam Revenue Calculator</MenuItem>
                        <SubMenu title="Sort By">
                            <MenuItem>Genre</MenuItem>
                            <MenuItem>Price Point</MenuItem>
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>
        );
    }
}
export default Toolbar;