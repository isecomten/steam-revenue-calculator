import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
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
                    <SidebarHeader>
                        <Menu>
                            <MenuItem>STEAM REV</MenuItem>
                        </Menu>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu>
                            <MenuItem>Advanced Search</MenuItem>
                            <SubMenu defaultOpen={true} title="Sort By">
                                <MenuItem>Price Point</MenuItem>
                                <MenuItem>Metacritic Score</MenuItem>
                                <MenuItem>Genre</MenuItem>
                                <MenuItem>Category</MenuItem>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <div>SteamDB is a hobby project and is not affiliated with Valve or Steam.
                            All times on the site are UTC.</div>
                    </SidebarFooter>

                </ProSidebar>
            </div>
        );
    }
}
export default Toolbar;