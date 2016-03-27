# react-background-image-loader
Allows you display a placeholder image while the actual background image loads

## Installation
`npm install react-background-image-loader --save`

## Usage
```javascript
  import React from 'react';
  import BackgroundImage from 'react-background-image-loader';

  export default (props) => {
    const {source, ...otherProps} = props;
    const localImage = '/path/to/local/asset';

    return(
      <BackgroundImage img={source} placeholder={localImage} {...otherProps}>
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
img         | string | Remote image to be loaded
placeholder | string | Local image to be immediately displayed

## License

MIT License