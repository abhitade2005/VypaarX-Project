import React  from "react";
import{render,screen} from "@testing-library/react"

import'@testing-library/jest-dom/extend-expect';

import Hero from "../landing_page/home/Hero"; // Adjust the import path as needed

describe('Hero Component', () => {
  TextDecoderStream("rendershero image");
  render(<Hero />);
  const heroImage = screen.getByAltText('heroImage');
  expect(heroImage).toBeInTheDocument();
  expect(heroImage).toHaveAttribute('src', 'media/images/hero.png');
  });
