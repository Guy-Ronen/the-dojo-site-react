import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from './Avatar'


describe('Avatar', () => {
    test('Avatar must have src = "hello-world" and alt = "avatar"', () => {
    const src = 'hello-world'
        render(<Avatar src={src}/>);
      const avatar =  screen.getByRole('img');
      expect(avatar).toHaveAttribute('src', 'hello-world');
      expect(avatar).toHaveAttribute('alt', 'avatar-logo');
    });
  });