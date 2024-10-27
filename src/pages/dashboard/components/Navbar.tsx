import logo from "../../../assets/images/logo.svg";
import search from "../../../assets/images/dashboard/search.svg";
import notification from "../../../assets/images/dashboard/notification.svg";
import profile_pic from "../../../assets/images/dashboard/profile_pic.png";
import {
  PiCaretDownFill,
  PiListDashesBold,
  PiMagnifyingGlass,
} from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="padding">
        <div className="left_bar">
          <div className="logo">
            <div className="menu_burger">
              <PiListDashesBold />
            </div>
            <img src={logo} alt="logo" />
          </div>
          <div className="search_bar">
            <input type="text" placeholder="Search for anything" />
            <button>
              <img src={search} alt="search" />
            </button>
          </div>
        </div>

        <div className="right_bar">
          <div className="search">
            <PiMagnifyingGlass />
          </div>
          <img src={notification} className="notification" alt="notification" />
          <div className="user">
            <img src={profile_pic} className="profile_pic" alt="profile_pic" />
            <div className="username">
              <span>Samuel</span>
              <PiCaretDownFill size={11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
