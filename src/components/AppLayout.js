import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { RowSylte } from './AppLayout.Style';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
        <RowSylte>
          <Col >
            {children}
          </Col>
        </RowSylte>
    </>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
