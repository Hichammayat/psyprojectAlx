import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage,MdPostAdd } from "react-icons/md";
import {  BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation,AiOutlineUserAdd} from "react-icons/ai";
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideBarMenu from "./SideBarMenu";
import './SideBar.css'
import {useNavigate} from "react-router-dom"
import Blog from "../../Blog/Blog";
const routes = [
 /* {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },*/
  {
    path: "/Information",
    name: "Mes information",
    icon: <FaUser />,
  },
  {
    path: "/Chat",
    name: "Conversation",
    icon: <MdMessage />,
  },
  
  {
    path: "/PsyList",
    name: "Choisir mon psychologue",
    icon: <AiOutlineUserAdd />,
  },
  {
    path: "PostSaved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children },props) =>{
  const handleNavigation = props.handleNavigation
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const navigate = useNavigate();
  const signout = () => {
    
    localStorage.clear();
    window.location.href = '/';
    handleNavigation("")
  };

  return (
    <>
      <div className="main-container" >
        <motion.div
          animate={{
            width:  "256px" ,

            
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Salut Mon Psy
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SideBarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <div className="logOut">
            
            <div className="icon"><LogoutIcon/></div>
            <div className="link_text" onClick={()=>signout()}>Se déconnecter</div>
            
          </div>
        </motion.div>
        <main>{children}</main>

        
      </div>
    </>
  );
};

export default SideBar;
