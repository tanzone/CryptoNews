import React, { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineLeft, AiOutlineSearch} from "react-icons/ai";
import { MdDashboard, MdOutlineAttachMoney } from "react-icons/md";

import { SDivider, SLinkContainer, SLink, SLinkIcon, SLinkLabel, SLinkNotification, SLogo,
    SSearch, SSearchIcon, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb,
} from "./styles";

import { ThemeContext } from "./../../App";
import logo from "../../images/uniprLogo.png";

const Sidebar = () => {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logo} alt="logo" />
            </SLogo>
            <SSearch
                onClick={searchClickHandler}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Search"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
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
        notification: 3,
    },
    {
        label: "Exchange",
        icon: <MdOutlineAttachMoney />,
        to: "/cryptoExchange",
        notification: 0,
    },
    {
        label: "News",
        icon: <MdOutlineAttachMoney />,
        to: "/cryptoNews",
        notification: 1,
    },
];

export default Sidebar;
