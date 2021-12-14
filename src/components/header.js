import React from "react";
import { Navbar,Button } from '@blueprintjs/core';

export default function Headers(props){
    return(
        <Navbar class="bp3-navbar bp3-dark">
        <Navbar.Group>
         
            <Navbar.Divider />
            {/* <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
        <a href="/settings"><Button className="bp3-minimal" icon="cog" text="Settings" /></a> */}
        </Navbar.Group>
    </Navbar>
    )
}