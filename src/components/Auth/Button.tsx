import cs from 'classnames'

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({className, children, ...props}: ButtonProps) {
  return (
    <button {...props} className={cs('w-52 h-14 rounded-lg text-white flex items-center justify-center text-20 font-semibold outline-none transition-all', props.disabled ? 'cursor-not-allowed' : 'hover:opacity-85', className)}>{children}</button>
  )
}
