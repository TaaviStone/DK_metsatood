import React from "react";
import {
  SidebarConatiner,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarConatiner isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home">KODU</SidebarLink>
          <SidebarLink to="about">TEENUSED</SidebarLink>
          <SidebarLink to="jobs-pics">NÄIDISED</SidebarLink>
          <SidebarLink to="contact">KONTAKT</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarConatiner>
  );
};

export default Sidebar;
