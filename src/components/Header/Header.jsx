import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
    display: flex;
    justify-content: space-around;
`;
const Div = styled.div`
    width: 200px;
`;

// menggunakan props
const NavLink = styled.span`
    box-sizing: border-box;
    border: ${(props) =>
        props.primary ? "solid 1px black" : "dotted 1px black"};
    & a {
        text-decoration: none;
        color: ${(props) => (props.primary ? "black" : "green")};
        padding: 0 10px;
        font-family: ${(props) => props.fontFamily || "arial"};
    }

    @media (max-width: 500px) {
        & a {
            text-decoration: none;
            color: gray;
            padding: 0 10px;
        }
    }
`;

// extend dari style sebelumnya dan input props
const SecondNavLink = styled(NavLink)`
    color: yellow;
    font-size: 12px;
    font-family: ${(props) => props.fontFamily || "arial"};
`;

function Header() {
    return (
        <div>
            <Navigation>
                <Div>
                    <NavLink primary fontFamily="YellowTail">
                        <Link to="/">Logo</Link>
                    </NavLink>
                </Div>
                <Div>
                    <NavLink>
                        <Link to="/">Home</Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/about">About</Link>
                    </NavLink>
                    <SecondNavLink>
                        <Link to="/contact">Contact</Link>
                    </SecondNavLink>
                    <SecondNavLink fontFamily="monospace">
                        <Link to="/login">Login</Link>
                    </SecondNavLink>
                </Div>
            </Navigation>
        </div>
    );
}

export default Header;
