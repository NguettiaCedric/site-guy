export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0,
      x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'tween',
        duration: 1.5, // Increased duration for a smoother effect
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Improved ease for a natural movement
      }
    }
  }
}
