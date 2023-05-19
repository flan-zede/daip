export default function Error(props: any) {
  return (
    <label className="invalid-feedback float-end">{props.children}</label>
  )
}