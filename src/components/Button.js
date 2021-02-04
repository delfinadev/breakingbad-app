import { NavLink } from "react-router-dom";

export default function Button({ path, content, className }) {
  return (
    <>
      <NavLink to={path}>
        <button className={className}>{content}</button>
      </NavLink>
    </>
  );
}
