import cs from 'classnames'

export default function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={cs('box-border w-[470px] h-16 flex items-center px-4 bg-white outline-none rounded-20 text-dark-light text-20', className)} {...props} />
  )
}
