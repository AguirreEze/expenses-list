export default function PiePice({
  color,
  percentage,
  rotate,
}: {
  color: string
  percentage: number
  rotate: number
}): JSX.Element {
  return (
    <circle
      r="5"
      cx="10"
      cy="10"
      stroke={color}
      fill="transparent"
      strokeWidth="10"
      strokeDasharray={`calc(${percentage} * 31.42 / 100) 31.42`}
      //  @ts-expect-error Prop not defined on default type definition
      transformOrigin="center center"
      transform={`rotate(${rotate})`}
    />
  )
}
