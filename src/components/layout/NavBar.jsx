import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
// import { SearchIcon } from "./SearchIcon.jsx";
import { Link, useNavigate } from "react-router-dom";
import { searchByMovieTitle } from "../../services/MovieService";
import { useMovieSearchContext } from "../../context/MovieSearchContext";

export function NavBar(props) {
  const navigate = useNavigate();
  const { updateSearchedMovies } = useMovieSearchContext();

  const [activeIndex, setActiveIndex] = useState(0);
  const navbarItems = [
    { label: "Home", to: "/home" },
    { label: "Movies", to: "#" },
    { label: "TV Shows", to: "#" },
    { label: "New", to: "#" },
    { label: "My List", to: "/watchlist" },
    { label: "About", to: "/about" },
  ];

  const handleInputChange = async (e) => {
    const movieTitle = e.target.value;
    const results = await searchByMovieTitle(movieTitle);
    if (results) {
      navigate("/search");
      updateSearchedMovies(results);
    }
    if (!movieTitle) {
      console.log("empty");
      navigate("/home");
    }
    console.log(results);
  };
  return (
    <Navbar className="bg-black">
      <NavbarContent className="">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="hidden sm:block font-bold text-red-500">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          {navbarItems.map((item, index) => {
            return (
              <NavbarItem key={index} isActive={index === activeIndex}>
                <Link to={item.to} onClick={() => setActiveIndex(index)}>
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "sm:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          // startContent={<SearchIcon size={18} />}
          type="search"
          onChange={handleInputChange}
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
