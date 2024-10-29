interface SvgComponentRectangleProps {
  bgColor?: string
}

export function SvgComponentRectangleMobile({
  bgColor,
  ...rest
}: SvgComponentRectangleProps) {
  return (
    <svg
      width={509}
      height={900}
      viewBox="0 0 1147 1001"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0"
      {...rest}
    >
      <title>{''}</title>
      <path
        d="M600.068 946.479C408.751 1056.93 164.114 991.386 53.657 800.068-56.8 608.751 8.75 364.115 200.067 253.657l346.411-200C737.795-56.8 982.432 8.75 1092.89 200.067c110.45 191.318 44.9 435.954-146.411 546.411L600.068 946.479z"
        fill={bgColor ?? '#581C87'}
      />
    </svg>
  )
}
