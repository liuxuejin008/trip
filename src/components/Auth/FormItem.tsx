type FormItemProps = {
  label: string
  children: React.ReactNode
}
export default function FormItem(props: FormItemProps) {
  return (
    <div className="flex items-center">
      <label className="flex-1 text-34 font-semibold">{props.label}</label>
      {props.children}
    </div>
  )
}
