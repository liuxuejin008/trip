import type { IconProps } from './Icon'
export default function Scenic(props: IconProps) {
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
        <path
          id="path-1"
          d="M0 0L19.5760075 0 19.5760075 29.1666667 0 29.1666667z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-924 -322)">
          <g transform="translate(684 311)">
            <g transform="translate(240)">
              <g transform="translate(0 11)">
                <path d="M0 0H32V32H0z"></path>
                <g transform="translate(3 1)">
                  <mask id="mask-2" fill="#fff">
                    <use xlinkHref="#path-1"></use>
                  </mask>
                  <path
                    fill="#515DE7"
                    fillOpacity="0.7"
                    d="M17.418.017L1.586 2.155H1.49C.667 2.155 0 2.82 0 3.64v24.044c0 .82.667 1.484 1.49 1.484h.13c.824 0 1.491-.665 1.491-1.484v-6.248l14.538-1.963a2.22 2.22 0 001.927-2.197V1.894A1.9 1.9 0 0017.418.017"
                    mask="url(#mask-2)"
                  ></path>
                  <path
                    fill="#515DE7"
                    d="M8.524 24.626a2.14 2.14 0 01-2.433-2.115V8.223A3.157 3.157 0 018.83 5.1l14.404-1.946a2.14 2.14 0 012.432 2.115v15.177a2.137 2.137 0 01-1.856 2.115L8.524 24.626z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M17.624 10.144l.9 1.16c.059.078.146.127.246.14l1.524.21c.308.042.428.393.233.678l-.967 1.406a.513.513 0 00-.094.304l.041 1.574c.008.319-.308.597-.61.538l-1.498-.292a.48.48 0 00-.306.048l-1.497.764c-.303.155-.619-.025-.61-.345l.042-1.588a.396.396 0 00-.095-.274l-.967-1.102c-.196-.223-.075-.612.233-.751l1.523-.689a.573.573 0 00.247-.218l.9-1.445c.182-.292.573-.353.755-.118"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}