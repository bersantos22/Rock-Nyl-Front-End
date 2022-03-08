export function ErrorAlert(props) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      {typeof props.children === "object" ? props.children.msg : props.children}
    </div>
  );
}
