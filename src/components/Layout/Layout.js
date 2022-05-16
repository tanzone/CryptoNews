import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { SLayout, SMain } from "./styles";

import Settings from "../Settings";

const Layout = ({ children }) => {

    return (
        <SLayout>
            <Sidebar />
            <SMain isOpen={Settings.getSidebarOpen()}>{children}</SMain>
            <Footer />
        </SLayout>
    );
};

export default Layout;
