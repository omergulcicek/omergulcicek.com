import React from "react"
import styled from "styled-components"

const Toggle = ({ darkMode, setDarkMode }) => (
    darkMode
    ? <DarkTheme type="button" onClick={() => setDarkMode(false)}>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"height="1em" width="1em"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </DarkTheme>
    : <DarkTheme type="button" onClick={() => setDarkMode(true)}>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </DarkTheme>
);

export default Toggle

const DarkTheme = styled.a`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 100%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 12px;
  user-select: none;
  transition: var(--g-transition);

  height: 42px;
  box-sizing: border-box;
  width: 42px;
  text-align: center;

  &:focus,
  &:hover {
    background-color: var(--c-theme);
    outline: none;
    text-decoration: none;
  }

`
