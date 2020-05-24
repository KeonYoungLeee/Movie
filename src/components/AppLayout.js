import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Footer from '../container/footer';
import Header from '../container/Header';
import { RowSylte } from './AppLayout.Style';

const AppLayout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header />
        <RowSylte>
          <Col >
            {children}
          </Col>
          {/* <Col>
            <Footer />
          </Col> */}
        </RowSylte>
    </>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
