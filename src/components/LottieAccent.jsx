import React from 'react'
import Lottie from 'lottie-react'

const animationData = {"v": "5.7.4", "fr": 60, "ip": 0, "op": 120, "w": 200, "h": 200, "nm": "pulse", "ddd": 0, "assets": [], "layers": [{"ddd": 0, "ind": 1, "ty": 4, "nm": "circle", "sr": 1, "ks": {"o": {"a": 1, "k": [{"t": 0, "s": [0]}, {"t": 15, "s": [100]}, {"t": 90, "s": [100]}, {"t": 120, "s": [0]}]}, "r": {"a": 0, "k": 0}, "p": {"a": 0, "k": [100, 100, 0]}, "a": {"a": 0, "k": [0, 0, 0]}, "s": {"a": 1, "k": [{"t": 0, "s": [40, 40, 100]}, {"t": 30, "s": [100, 100, 100]}, {"t": 120, "s": [40, 40, 100]}]}}, "shapes": [{"ty": "el", "p": {"a": 0, "k": [0, 0]}, "s": {"a": 0, "k": [140, 140]}, "nm": "Ellipse Path 1"}, {"ty": "st", "c": {"a": 0, "k": [1, 0.55, 0, 1]}, "o": {"a": 0, "k": 100}, "w": {"a": 0, "k": 10}, "lc": 2, "lj": 2, "nm": "Stroke 1"}, {"ty": "tr", "p": {"a": 0, "k": [0, 0]}, "a": {"a": 0, "k": [0, 0]}, "s": {"a": 0, "k": [100, 100]}, "r": {"a": 0, "k": 0}, "o": {"a": 0, "k": 100}, "sk": {"a": 0, "k": 0}, "sa": {"a": 0, "k": 0}}], "ip": 0, "op": 120, "st": 0, "bm": 0}]}

export default function LottieAccent({ size = 42, className = '' }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        borderRadius: 999,
        overflow: 'hidden',
        background: 'rgba(0,0,0,.25)',
        border: '1px solid rgba(255,255,255,.10)',
      }}
    >
      <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: '100%' }} />
    </span>
  )
}
