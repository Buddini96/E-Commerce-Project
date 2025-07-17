import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

export { CustomLink };

CustomLink.PropTypes = {
    href:PropTypes.isRequired,
    className:PropTypes.isRequired,
    children:PropTypes.isRequired,
}
