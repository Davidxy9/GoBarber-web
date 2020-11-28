/* eslint-disable react/prop-types */

import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const test = {};

  return (
    <Container>
      {messages.map((message) => (
        <Toast
          key={message.id}
          message={message}
        />

      ))}

    </Container>
  );
};

export default ToastContainer;
