export function SearchBar(props) {
  return (
    <div>
      <input
        className="placeholder:italic block bg-white w-1/4 border border-slate-300 rounded-md py-1 pl-4 pr-3 shadow-l focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
        type="text"
        area="searchParams"
        placeholder={props.placeholder}
        onKeyUp={(event) => {
          props.filterList(event.target.value);
        }}
      />
    </div>
  );
}
