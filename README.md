# react-image-pagination

[![NPM](https://img.shields.io/npm/v/react-image-pagination.svg)](https://www.npmjs.com/package/react-image-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<br>

## Description

This project is a component that can use images like pages.

<br>

![react image pagination](./images/sample_github.png)

<br><br>

## Install

```bash
npm install --save react-image-pagination
```

<br><br>

## Demo

- [Demo Codesandbox](https://codesandbox.io/s/brave-moon-m0uhs?fontsize=14&hidenavigation=1&theme=dark)

<br><br>

## Usage

```tsx
import ImagePagination from './component-dev';

const ImgSrc1 = '...';
const ImgSrc2 = '...';
const ImgSrc3 = '...';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImagePagination
          pages={[{src:ImgSrc1, text: 'react'}, {src:ImgSrc2, text: 'google'}, {src: ImgSrc3}]}
          dotDisplay={true}
        />
      </header>
    </div>
  );
}
```

<br>

### ImagePagination Props

| props | type | description |
|---|:---:|---:|
| `pages` | {src: string, text: string}[] | Render Image Data |
| `dotDisplay` | boolean | Whether the dots under the image are exposed |


<br><br>

## License

MIT © [Luffy Yeon](https://github.com/Luffy Yeon)
