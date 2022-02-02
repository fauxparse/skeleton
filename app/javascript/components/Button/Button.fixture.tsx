import React from 'react';
import Button from '.';

export default {
  Button: <Button text="Button" />,
  'as link': (
    <Button
      as="a"
      href="http://example.com"
      target="_blank"
      rel="noopener noreferrer"
      text="Button"
    />
  ),
};
