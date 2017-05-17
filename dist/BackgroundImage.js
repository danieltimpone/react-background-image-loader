'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

/*
  This component displays a placeholder image that is hosted locally
  while it waits for a remote image to load.

  Usage: <BackgroundImage src={source} placeholder={localImage} {...other attributes}>
        {...child components}
       </BackgroundImage>
*/

var BackgroundLoader = (function (_React$Component) {
  _inherits(BackgroundLoader, _React$Component);

  _createClass(BackgroundLoader, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        src: _propTypes2['default'].string.isRequired,
        placeholder: _propTypes2['default'].string.isRequired,
        className: _propTypes2['default'].string,
        style: _propTypes2['default'].object,
        children: _propTypes2['default'].node
      };
    }
  }]);

  function BackgroundLoader(props) {
    _classCallCheck(this, BackgroundLoader);

    _get(Object.getPrototypeOf(BackgroundLoader.prototype), 'constructor', this).call(this, props);

    this.state = {
      loaded: false,
      error: false
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  _createClass(BackgroundLoader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Making this a global so it can be later
      // nullified when the component unmounts
      this.image = new Image();

      this.image.src = this.props.src;
      this.image.onload = this.handleLoad;
      this.image.onerror = this.handleError;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextState, nextProps) {
      return !this.state.loaded;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.image.onerror = null;
      this.image.onload = null;
      this.image = null;
    }
  }, {
    key: 'handleLoad',
    value: function handleLoad(e) {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: 'handleError',
    value: function handleError(e) {
      console.error('Failed to load ', this.props.src);

      this.setState({
        error: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var src = _props.src;
      var placeholder = _props.placeholder;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['src', 'placeholder', 'children']);

      var source = !this.state.loaded || this.state.error ? placeholder : src;

      return _react2['default'].createElement(
        'div',
        _extends({ style: { backgroundImage: 'url(' + source + ')' } }, props),
        children
      );
    }
  }]);

  return BackgroundLoader;
})(_react2['default'].Component);

exports['default'] = BackgroundLoader;
module.exports = exports['default'];