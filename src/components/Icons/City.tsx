import type { IconProps } from './Icon'

export default function City(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <linearGradient
          id="linearGradient-1"
          x1="100%"
          x2="33.135%"
          y1="39.876%"
          y2="52.375%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#FFF"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-684 -322)">
          <g transform="translate(684 311)">
            <g transform="translate(0 11)">
              <path
                fill="#515DE7"
                d="M28.8 30H14.933V12.282c0-1.866 1.866-3.098 3.49-2.303l8.972 4.391c.858.42 1.405 1.318 1.405 2.304V30z"
                opacity="0.6"
                style={{ mixBlendMode: 'multiply' }}
              ></path>
              <path
                fill="#515DE7"
                d="M21.333 28H3.2V6.412c0-.917.659-1.736 1.654-2.058L17.888.142c1.667-.539 3.445.523 3.445 2.058V28z"
              ></path>
              <path
                fill="url(#linearGradient-1)"
                d="M6.133 13.867c-.441 0-.8-.478-.8-1.067s.359-1.067.8-1.067h4.8c.442 0 .8.478.8 1.067s-.358 1.067-.8 1.067h-4.8z"
              ></path>
              <path
                fill="url(#linearGradient-1)"
                d="M10.933 18.133h-4.8c-.441 0-.8-.478-.8-1.066 0-.59.359-1.067.8-1.067h4.8c.442 0 .8.478.8 1.067 0 .588-.358 1.066-.8 1.066"
              ></path>
              <path
                fill="#515DE7"
                d="M29.474 32H2.526C1.131 32 0 31.045 0 29.867c0-1.179 1.13-2.134 2.526-2.134h26.948c1.395 0 2.526.955 2.526 2.134C32 31.045 30.87 32 29.474 32"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}