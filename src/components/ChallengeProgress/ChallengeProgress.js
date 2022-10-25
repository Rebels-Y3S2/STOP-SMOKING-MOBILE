import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
 
export default function ChallengeProgress() {
  return (
    <AnimatedCircularProgress
  size={120}
  width={15}
  fill={50}
  tintColor="#00e0ff"
  rotation={-105}
  arcSweepAngle={210}
  lineCap={'round'}
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" />
  )
}