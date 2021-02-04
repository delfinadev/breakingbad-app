import { NavLink } from "react-router-dom";

export default function Button({ path, content, className }) {
  return (
    <>
      <NavLink pathe={path}>
        <button clasName={className}>{content}</button>
      </NavLink>
    </>
  );
}
