import PropTypes from 'prop-types'
import cx from 'classnames'

export const ATOM_SKELETON_ANIMATIONS = {
  wave: 'wave',
  pulse: 'pulse'
}

export const ATOM_SKELETON_VARIANTS = {
  round: 'round',
  circle: 'circle',
  square: 'square'
}

export default function AtomSkeleton({
  count = 1,
  variant = ATOM_SKELETON_VARIANTS.round,
  animation = ATOM_SKELETON_ANIMATIONS.pulse,
  style,
  width,
  height,
  ...others
}) {
  const baseClass = 'react-AtomSkeleton'
  const className = cx(`${baseClass}`, {
    [`${baseClass}--pulse`]: animation === ATOM_SKELETON_ANIMATIONS.pulse,
    [`${baseClass}--wave`]: animation === ATOM_SKELETON_ANIMATIONS.wave,
    [`${baseClass}--round`]: variant === ATOM_SKELETON_VARIANTS.round,
    [`${baseClass}--circle`]: variant === ATOM_SKELETON_VARIANTS.circle
  })
  return (
    <>
      {Array.from(Array(count).keys()).map(index => (
        <span
          {...others}
          key={index}
          className={className}
          style={{...style, width, height}}
        >
          &zwnj;
        </span>
      ))}
    </>
  )
}

AtomSkeleton.displayName = 'AtomSkeleton'

AtomSkeleton.propTypes = {
  /**
   * Display count number of skeletons
   */
  count: PropTypes.number,
  /**
   * Set a specific width
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set a specific height
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set custom styles
   */
  style: PropTypes.object,
  /**
   * Choose between wave and pulse animation, if falsy no animation will be shown
   */
  animation: PropTypes.oneOf(Object.values(ATOM_SKELETON_ANIMATIONS)),
  /**
   * Shape the skeleton and make it look like the final user interface
   */
  variant: PropTypes.oneOf(Object.values(ATOM_SKELETON_VARIANTS))
}
