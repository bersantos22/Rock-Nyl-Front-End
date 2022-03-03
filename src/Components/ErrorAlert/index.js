export function ErrorAlert(props) {
  return (
    <div className="alert alert-danger container mt-3" role="alert">
      {typeof props.children === "object" ? props.children.msg : props.children}
    </div>
  );
}
