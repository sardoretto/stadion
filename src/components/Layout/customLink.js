import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="mt-1">
      <Link
        style={{ backgroundColor: match ? "#111827" : "" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
