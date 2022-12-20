import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import Style from "./Navbar.module.css";
import { BsFillCartFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
// import axios from "axios";
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  // Input,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Box,
} from "@chakra-ui/react";
import { useThrottle } from "use-throttle";
import { searchData } from "../Every/searchdata";
import { SearchBox } from "./SearchBox";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [suggestion, setSuggestion] = useState([]);
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const scrollRef = useRef();
  const navigate=useNavigate()
 let state=useSelector((state)=>{
  return state
 })
// console.log(state)
const {userData,isAuth}=state;
const {Fname, Lname,email}=userData;

console.log(state);
console.log(isAuth)

  const queryhandler = useCallback((el) => {
    setQuery(el);
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const throttletext = useThrottle(input, 1000);
  useEffect(() => {
    if (query === "") {
      setSuggestion([]);
    } else {
      //we need to find the countries tht matches the query
      let newListSuggest = searchData
        .filter((el) => {
          const queryCountry = query.trim().toLocaleLowerCase();
          return el.title.toLowerCase().indexOf(queryCountry) !== -1
            ? true
            : false;
        })
        .map((el) => el.title);
      //  console.log(newListSuggest)

      setSuggestion(newListSuggest);
    }
  }, [query]);

  useEffect(() => {
    setQuery(throttletext);
  }, [setQuery, throttletext]);

  // console.log(suggestion);
  const Click=()=>{
    navigate('/cartpage')
  }
  const Signin=()=>{
    navigate('/user/login')
  }

  return (
    // navbar-1
    <div className={Style.navbarblock}>
      <div className={Style.navbar}>
        <GiHamburgerMenu className={Style.hambueger} onClick={onOpen} />
        <Drawer
          style={{ color: "white" }}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader style={{ backgroundColor: "#008ecc" }}>
              <div className={Style.drawerslide}>
                {isAuth?<h2>Hello {!!Fname?Fname.toUpperCase():null}</h2>:<h2 style={{"cursor":"pointer"}} onClick={Signin}>Sign in</h2>}
                <div className={Style.buttnslider}>
                  <Button>
                    {" "}
                    <Link to={"/user/account"}><p style={{"color":"white"}}>Account</p></Link>
                  </Button>
                  <Button>Orders</Button>
                </div>
              </div>
            </DrawerHeader>

            <DrawerBody>
              <div className={Style.divone}>
                <div>Home</div>
                <div>Shop by Category</div>
                <div>My List</div>
                <div>JioMart Wallet</div>
                <div>JioMart Gift Store</div>
                <div>JioMart Gift Card</div>
                <div>GoGreen with JioMart</div>
                <div>All Offers</div>
              </div>

              <div className={Style.silverdiv}></div>

              <div className={Style.divone}>
                <div>My Account</div>
                <div>Need Help</div>
                <div>About us</div>
                <div>Guide</div>
              </div>

              <div className={Style.silverdiv}></div>

              <div className={Style.contactus}>
                <h1> CONTACT US</h1>
                <div>
                  WhatsApp us :{" "}
                  <span style={{ color: "#008ecc" }}>70003 700003</span>
                </div>

                <div>
                  Call us :{" "}
                  <span style={{ color: "#008ecc" }}>1800 890 1222</span>
                  <p> 8:00Am to 8:00PM, 365 days</p>
                </div>

                <div>
                  <p style={{ fontSize: "13px" }}>
                    {" "}
                    Please note that you are accessing the BETA Version of{" "}
                    <span style={{ color: "#008ecc", fontSize: "13px" }}>
                      www.jiomart.com
                    </span>
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: "13px" }}>
                    Should you encounter any bugs, glitches, lack of
                    functionality, delayed deliveries, billing errors or other
                    problems on the beta website, please email us on{" "}
                    <span style={{ color: "#008ecc", fontSize: "13px" }}>
                      cs@jiomart.com
                    </span>
                  </p>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <div>
          <Link to={"/"}>
            <img
              width="190px"
              src="https://i.ibb.co/4fVGyP3/Octagon-1-removebg-preview.png" alt="Octagon"
            />
          </Link>
        </div>
        <div>
          <input
            className={Style.inputSearch}
            value={query}
            onChange={handleSearch}
            placeholder="Search essentials, groceries, and more ..."
          />
        </div>

        <div className={Style.userdiv}>
          <FaUser className={Style.usericons} />
          {isAuth?<h4 style={{"color":"white"}}>{Fname.toUpperCase()}</h4>:<><h4>
            <Link   to={"/user/login"}><p style={{"color":"white"}}>Sign In / </p></Link>
          </h4>
          <h4>
            <Link to={"/user/signup"}><p  style={{"color":"white"}}>Sign Up</p></Link>
          </h4></>}
        </div>

        <div className={Style.cartNav}>
          <BsFillCartFill className={Style.carticon} />
          <h4>
            {/* <Link to={"/cartpage"}>Cart</Link> */}
            <p onClick={Click} style={{"color":"white","cursor":"pointer"} }>Cart</p>
            
          </h4>
        </div>
      </div>
      {/* navbar-2 */}
      <div id={Style.newnav}>
        <div className={Style.navbar2style1}>
          <MdLocationOn className={Style.locationIcon} />
          <div className={Style.locationdiv}>
            Deliver to{" "}
            <span
              className={Style.spanstyle}
              style={{ color: "black", fontWeight: "600", fontSize: "14px" }}
            >
              400020
            </span>
          </div>
        </div>

        {/* menu */}
        <Menu isLazy>
          <MenuButton  bg="none" border="none">
            {" "}
            <Box className={Style.navbar2style1} >
              <p>Groceries</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </Box>
          </MenuButton>

          {/* MenuItems are not rendered unless Menu is open */}
          <MenuList bg="black">
            <MenuItem>
              <Link to={"/groceriesproducts"}>Groceries</Link>
            </MenuItem>
            <MenuItem><Link to="/fruits">Fruits & Vegetables</Link></MenuItem>
            <MenuItem><Link to="/dairy">Dairy & Bakery</Link></MenuItem>
            <MenuItem><Link to="/staples">Staples</Link></MenuItem>
            <MenuItem>Snacks & Branded Foods</MenuItem>
            <MenuItem>Beverages</MenuItem>
            <MenuItem>Personal Care</MenuItem>
            <MenuItem>Premium Fruits</MenuItem>
            <MenuItem>Apparel</MenuItem>
            <MenuItem>Home & Kitchen</MenuItem>
            <MenuItem>Mom & Baby Care</MenuItem>
            <MenuItem>Books</MenuItem>
            <MenuItem>Pets</MenuItem>
            <MenuItem>Beauty</MenuItem>
          </MenuList>
        </Menu>

        <Menu isLazy>
          <MenuButton bg="none" border="none">
            <div className={Style.navbar2style1}>
              <p>Premium Fruits</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </div>
          </MenuButton>

          <MenuList style={{ backgroundColor: "#f2e8e8" }}>
          <MenuItem><Link to={"/apples_pears"}>Apples & Pears</Link></MenuItem>
            <MenuItem>Avocada, Peach , Plum</MenuItem>
            <MenuItem>Banana, Melons & Coconut</MenuItem>
            <MenuItem>Cherries, Berries & Exotic Fruits </MenuItem>
            <MenuItem>Citrus, Mango & Grapes</MenuItem>
            <MenuItem>Dates</MenuItem>
            <MenuItem>Gift, Assorted & XL Packs</MenuItem>
            <MenuItem>Pomegranate, Papaya & Pineapple</MenuItem>
            <MenuItem>Seasonal & Minor Fruits</MenuItem>
          </MenuList>
        </Menu>

        <Menu isLazy>
          <MenuButton bg="none" border="none">
            <div className={Style.navbar2style1}>
              <p>Home & Kitchen</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </div>
          </MenuButton>
          <MenuList style={{ backgroundColor: "#f2e8e8" }}>
            <MenuItem><Link to="/HomeAppliance">Bathroom & Laundry</Link></MenuItem>
            <MenuItem>Disposables</MenuItem>
            <MenuItem>Furnishing</MenuItem>
            <MenuItem>Furniture</MenuItem>
            <MenuItem>Garden & Outdoor</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Kitchenware</MenuItem>
            <MenuItem>Prayer & Spirituals</MenuItem>
            <MenuItem>Tableware</MenuItem>
          </MenuList>
        </Menu>

        <Menu isLazy>
          <MenuButton bg="none" border="none">
            <div className={Style.navbar2style1}>
              <p>Fashion</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </div>
          </MenuButton>
          <MenuList style={{ backgroundColor: "#f2e8e8" }}>
            <MenuItem><Link to={"/men"}>Men</Link></MenuItem>
            <MenuItem>
              Women
            </MenuItem>
            <MenuItem>Boys</MenuItem>
            <MenuItem>Girls</MenuItem>
            <MenuItem>Infants</MenuItem>
          </MenuList>
        </Menu>

        <Menu isLazy>
          <MenuButton bg="none" border="none">
            <div className={Style.navbar2style1}>
              <p>Electronics</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </div>
          </MenuButton>
          <MenuList style={{ backgroundColor: "#f2e8e8" }}>
            <MenuItem>
              <Link to="/mobiles">Mobiles & Tables</Link>
            </MenuItem>
            <MenuItem>TV & Speaker</MenuItem>
            <MenuItem>Home Appliances</MenuItem>
            <MenuItem>Computers</MenuItem>
            <MenuItem>Cameras</MenuItem>
            <MenuItem>Kitchen Appliances</MenuItem>
            <MenuItem>Personal Care & Grooming</MenuItem>
            <MenuItem>Smart Devices</MenuItem>
            <MenuItem>Gaming</MenuItem>
            <MenuItem>Accessories</MenuItem>
            <MenuItem>resQ Services</MenuItem>
            <MenuItem>Phones</MenuItem>
            
          </MenuList>
        </Menu>

        <Menu isLazy>
          <MenuButton bg="none" border="none">
            <div className={Style.navbar2style1}>
              <p>Beauty</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </div>
          </MenuButton>
          <MenuList style={{ backgroundColor: "#f2e8e8" }}>
            <MenuItem> <Link to="makeup">Make-Up </Link></MenuItem>
            <MenuItem>hair</MenuItem>
            <MenuItem>Skin Care</MenuItem>
            <MenuItem>Fragrances</MenuItem>
            <MenuItem>Personal care</MenuItem>
            <MenuItem>Mom & Baby</MenuItem>
            <MenuItem>Men's Growing</MenuItem>
            <MenuItem>Tools & Appliances Devices</MenuItem>
            <MenuItem>Wellness</MenuItem>
            <MenuItem>Fitness</MenuItem>
            <MenuItem>Ayush</MenuItem>
            <MenuItem>Treatments</MenuItem>
          </MenuList>
        </Menu>

        <Menu isLazy>
          <MenuButton bg="none" border="none">
            <div className={Style.navbar2style1}>
              <p>Home Improvement</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </div>
          </MenuButton>
          <MenuList style={{ backgroundColor: "#f2e8e8" }}>
            <MenuItem><Link to="/autocare">Auto Care</Link></MenuItem>
            <MenuItem>Carpentry</MenuItem>
            <MenuItem>Electrical</MenuItem>
            <MenuItem>Hardware & Plumbing</MenuItem>
            <MenuItem>Home Cleaning & Organisation</MenuItem>
            <MenuItem>Industrial & Scientific Supplies</MenuItem>
            <MenuItem>Home Safety & Automation</MenuItem>
            <MenuItem>Kitchen & Bath Fixtures </MenuItem>
            <MenuItem>Packaging Supplies</MenuItem>
            <MenuItem>Paint,Wall Treatments & Supplies</MenuItem>
            <MenuItem>Power & Hand Tools</MenuItem>
          </MenuList>
        </Menu>

        <Menu isLazy>
          <MenuButton bg="none" border="none">
            <div className={Style.navbar2style1}>
              <p>Sports, Toys & Luggage</p>
              <AiOutlineDown style={{ color: "gray" }} />
            </div>
          </MenuButton>
          <MenuList style={{ backgroundColor: "#f2e8e8" }}>
            <MenuItem><Link to ="/toysgames">Toys & Games</Link></MenuItem>
            <MenuItem>
              Bags & Travel Luggage
            </MenuItem>
            <MenuItem>Sporting Goods & Fitness Equipment</MenuItem>
          </MenuList>
        </Menu>

      </div> 
      {suggestion.length === 0 ? null : (
        <Box
          maxH="300px"
          overflowX="scroll"
          w="40%"
          marginLeft="27%"
          marginTop={-5}
          overflow-y="hidden"
          position="absolute"
          top="100px"
          background="white"
          paddingLeft={5}
          css
        >
          <SearchBox suggestion={suggestion} />
        </Box>
      )}
    </div>
  );
};
// solving conflict