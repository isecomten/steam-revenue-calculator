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
                    onMouseEnter={() => this.setState({ collapsed: false })}
                    onMouseLeave={() => this.setState({ collapsed: true })}
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