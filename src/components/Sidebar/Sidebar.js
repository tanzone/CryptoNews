import React, { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";
import { MdDashboard, MdOutlineAttachMoney, MdMenuBook } from "react-icons/md";

import {
    SSidebarImg, SDivider, SLinkContainer, SLink, SLinkIcon, SLinkLabel, SLinkNotification, SLogo,
    SSearch, SSearchIcon, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb,
} from "./styles";

import { ThemeContext } from "./../../App";
import logo from "../../images/uniprLogo.png";

const Sidebar = () => {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { pathname } = useLocation();

    function setBtnSidebar() {
        setSidebarOpen((p) => !p);
    };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                <SLogo>
                    <SSidebarImg src={logo} alt="logo" />
                </SLogo>
            </SLink>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}

            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>

            <SDivider />
            <SSidebarButton isOpen={sidebarOpen} onClick={setBtnSidebar}>
                <AiOutlineLeft />
            </SSidebarButton>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Dashboard",
        icon: <MdDashboard />,
        to: "/",
        notification: 0,
    },
    {
        label: "Cryptos",
        icon: <MdOutlineAttachMoney />,
        to: "/cryptosPage",
        notification: 0,
    },
    {
        label: "News",
        icon: <MdMenuBook />,
        to: "/cryptoNews",
        notification: 0,
    },
];

export default Sidebar;