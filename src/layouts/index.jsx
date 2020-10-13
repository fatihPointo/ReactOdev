import React from "react";
import { Container } from 'reactstrap';

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return <>
    <Container >
      <Header />
      <Nav />
      {children}
      <Footer />

    </Container>
  </>
};


export default Layout