export default function Error(props: any) {
  return (
    <label className="text-danger float-end">{props.children}</label>
  )
}