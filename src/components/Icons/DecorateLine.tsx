import type { IconProps } from './Icon'

export default function DecorateLine(props: IconProps) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="121"
        height="20"
        viewBox="0 0 121 20"
        {...props}
    >
        <defs>
        <linearGradient
            id="linearGradient-1"
            x1="88.429%"
            x2="8.891%"
            y1="10.998%"
            y2="85.535%"
        >
            <stop offset="0%" stopColor="#927EFF"></stop>
            <stop offset="100%" stopColor="#4F3AFF"></stop>
        </linearGradient>
        <linearGradient
            id="linearGradient-2"
            x1="100%"
            x2="0%"
            y1="50%"
            y2="50.005%"
        >
            <stop offset="0%" stopColor="#6459FF"></stop>
            <stop offset="100%" stopColor="#92A2FF" stopOpacity="0"></stop>
        </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-789 -1350)">
            <g transform="translate(769 1204)">
            <g transform="translate(20 139)">
                <g transform="translate(0 7)">
                <g fill="url(#linearGradient-1)" transform="translate(92.844)">
                    <path
                    d="M13.652 2.935l7.046.012a3.536 3.536 0 013.53 3.53l.012 7.046a3.536 3.536 0 01-3.542 3.542l-7.046-.012a3.536 3.536 0 01-3.53-3.53l-.012-7.046a3.536 3.536 0 013.542-3.542z"
                    opacity="0.601"
                    transform="scale(-1 1) rotate(45 0 -31.464)"
                    ></path>
                    <path
                    d="M5.73 4.703l3.518.006a3.536 3.536 0 013.529 3.53l.006 3.516a3.536 3.536 0 01-3.542 3.542l-3.517-.006a3.536 3.536 0 01-3.529-3.53l-.006-3.516A3.536 3.536 0 015.73 4.703z"
                    opacity="0.295"
                    transform="scale(-1 1) rotate(45 0 -8.073)"
                    ></path>
                </g>
                <path
                    fill="url(#linearGradient-2)"
                    d="M0 9.608H88.082V10.608H0z"
                ></path>
                </g>
            </g>
            </g>
        </g>
        </g>
    </svg>
  )
}