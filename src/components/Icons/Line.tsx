import type { IconProps } from './Icon'
export default function Line(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <path id="path-1" d="M0 0H32V32H0z"></path>
        <linearGradient
          id="linearGradient-3"
          x1="135.714%"
          x2="26.004%"
          y1="123.608%"
          y2="25.853%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#FFF"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-1160 -322)">
          <g transform="translate(684 311)">
            <g transform="translate(476)">
              <g transform="translate(0 11)">
                <mask id="mask-2" fill="#fff">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <g mask="url(#mask-2)">
                  <g transform="translate(1 2.714)">
                    <path
                      fill="#515DE7"
                      d="M18.015 18.762c0 4.155-3.6 7.524-8.04 7.524-4.356 0-7.903-3.243-8.036-7.29l-.004-.234V5.31c0-1.558 1.35-2.822 3.015-2.822 1.606 0 2.918 1.175 3.01 2.656l.005.166v13.45c0 1.04.9 1.882 2.01 1.882 1.06 0 1.928-.768 2.005-1.741l.005-.14V8.738c0-4.155 3.6-7.524 8.04-7.524 4.356 0 7.903 3.243 8.036 7.29l.004.234v12.4c0 1.558-1.35 2.821-3.015 2.821-1.606 0-2.918-1.174-3.01-2.655l-.005-.166v-12.4c0-1.038-.9-1.88-2.01-1.88-1.06 0-1.928.767-2.005 1.74l-.005.14v10.024z"
                    ></path>
                    <ellipse
                      cx="25.161"
                      cy="21.643"
                      fill="#979EF1"
                      rx="4.839"
                      ry="4.643"
                    ></ellipse>
                    <ellipse
                      cx="4.839"
                      cy="4.643"
                      fill="#979EF1"
                      rx="4.839"
                      ry="4.643"
                    ></ellipse>
                    <ellipse
                      cx="25.161"
                      cy="21.714"
                      fill="url(#linearGradient-3)"
                      rx="1.935"
                      ry="1.857"
                    ></ellipse>
                    <ellipse
                      cx="4.935"
                      cy="4.714"
                      fill="url(#linearGradient-3)"
                      rx="1.935"
                      ry="1.857"
                    ></ellipse>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}