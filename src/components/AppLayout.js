import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

import { Row } from 'antd';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Row> 
        {children}
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
