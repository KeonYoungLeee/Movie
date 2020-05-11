import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Header from '../container/header';
import Footer from '../container/footer';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Row>
        <Col >
          {children}
        </Col>
        {/* <Col>
          <Footer />
        </Col> */}
      </Row>
    </>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
