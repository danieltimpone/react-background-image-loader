# react-background-image-loader
Allows you display a placeholder image while the actual background image loads

## Installation
`npm install react-background-image-loader --save`

In order to build / modify the component locally just run `npm watch`.

## Usage
```javascript
  import React from 'react';
  import BackgroundImage from 'react-background-image-loader';

  export default (props) => {
    const {source, ...otherProps} = props;
    const localImage = '/path/to/local/asset';

    return(
      <BackgroundImage src={source} placeholder={localImage} {...otherProps}>
        <div className="something-else">
          Some more markup
        </div>
        <SomeOtherReactComponent />
      </BackgroundImage>
    );
  }
```

## Props
prop        | type   | notes
------------|--------|-----------------------------------------
src         | string | Remote image to be loaded
placeholder | string | Local image to be immediately displayed

## License

MIT License
