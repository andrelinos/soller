import { ThreeStars, ThumbsUp, Thunderstorm, Timer, Tower } from 'iconoir-react'
import {
  HelpCircle,
  PerspectiveView,
  PiggyBank,
  Tournament,
  TransitionUp,
  Trekking,
  Trophy,
  Truck,
} from 'iconoir-react/regular'

interface IconProps {
  icon?: string
  size?: number
  strokeWidth?: number
}

export function Icons({ icon, size, strokeWidth }: IconProps) {
  switch (icon) {
    case 'truck':
      return (
        <Truck
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'trekking':
      return (
        <Trekking
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'trophy':
      return (
        <Trophy
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'piggy-bank':
      return (
        <PiggyBank
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'tournament':
      return (
        <Tournament
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'transition-up':
      return (
        <TransitionUp
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'perspective-view':
      return (
        <PerspectiveView
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'thumbs-up':
      return (
        <ThumbsUp
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'thunderstorm':
      return (
        <Thunderstorm
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'three-stars':
      return (
        <ThreeStars
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'tower':
      return (
        <Tower
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    case 'timer':
      return (
        <Timer
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )

    default:
      return (
        <HelpCircle
          width={size ?? 64}
          height={size ?? 64}
          strokeWidth={strokeWidth ?? 1.5}
        />
      )
  }
}
