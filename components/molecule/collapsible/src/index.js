import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const BASE_CLASS = "sui-MoleculeCollapsible";
const CONTENT_CLASS = `${BASE_CLASS}-content`;
const CONTAINER_BUTTON_CLASS = `${BASE_CLASS}-container`;
const BUTTON_CLASS = `${BASE_CLASS}-btn`;
const MIN_HEIGHT = 100; // px

class MoleculeCollapsible extends Component {
  constructor(props) {
    super(props);
    this.childrenContainer = React.createRef();
    this.state = { collapsed: true, showButton: true };
    this.contentStyles = {
      height: `${MIN_HEIGHT}`
    };
  }

  toggleCollapse = () => {
    const { collapsed, showButton } = this.state;
    const { onClose, onOpen } = this.props;
    if (showButton) {
      if (collapsed) {
        this.setState({ collapsed: false });
        onOpen();
      } else {
        this.setState({ collapsed: true });
        onClose();
      }
    }
  };

  componentDidMount() {
    const offsetHeight = this.childrenContainer.current.offsetHeight;
    this.setState({ showButton: offsetHeight >= MIN_HEIGHT });
  }

  render() {
    const { collapsed, showButton } = this.state;
    const {
      children,
      height,
      icon,
      showText,
      hideText,
      hasGradient
    } = this.props;
    const wrapperClassName = cx(`${BASE_CLASS}`, {
      [`${BASE_CLASS}--gradient`]: hasGradient,
      [`${BASE_CLASS}--collapsed`]: collapsed
    });
    const iconClassName = cx(`${BASE_CLASS}-icon`, {
      [`${BASE_CLASS}-icon--collapsed`]: collapsed
    });
    const containerClassName = cx(`${CONTAINER_BUTTON_CLASS}`, {
      [`${CONTAINER_BUTTON_CLASS}--gradient`]: hasGradient,
      [`${CONTAINER_BUTTON_CLASS}--collapsed`]: collapsed
    });
    const containerHeight = showButton && collapsed ? height : "none";

    return (
      <div className={wrapperClassName}>
        <div
          className={CONTENT_CLASS}
          style={{ maxHeight: `${containerHeight}` }}
          ref={this.childrenContainer}
        >
          {children}
        </div>
        {showButton && (
          <div className={containerClassName}>
            <button
              type="button"
              className={BUTTON_CLASS}
              onClick={this.toggleCollapse}
            >
              {collapsed ? showText : hideText}
              <span className={iconClassName}>{icon}</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}

MoleculeCollapsible.displayName = "MoleculeCollapsible";

MoleculeCollapsible.propTypes = {
  /**
   * Content to collapse
   */
  children: PropTypes.node.isRequired,
  /**
   * Define the min height visible
   */
  height: PropTypes.number,
  /**
   * Icon to be added on the right of the content
   */
  icon: PropTypes.node.isRequired,
  /**
   * Text to show when content is collapsed
   */
  showText: PropTypes.string.isRequired,
  /**
   * Text to show when content is not collapsed
   */
  hideText: PropTypes.string.isRequired,
  /**
   * Activate/deactivate gradient
   */
  hasGradient: PropTypes.bool,
  /**
   * On open callback
   */
  onOpen: PropTypes.func,
  /**
   * On close callback
   */
  onClose: PropTypes.func
};

MoleculeCollapsible.defaultProps = {
  height: MIN_HEIGHT,
  hasGradient: true,
  onOpen: () => {},
  onClose: () => {}
};

export default MoleculeCollapsible;
