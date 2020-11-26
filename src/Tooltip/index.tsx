import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

// eslint-disable-next-line react/prop-types
const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => (
  // const teste = {};

  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>

);
export default Tooltip;
