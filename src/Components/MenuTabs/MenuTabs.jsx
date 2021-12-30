import { Tab, Tabs } from "@mui/material";

import { Link } from "react-router-dom";

const MenuTabs = () => {
  const tabsItems = [
    { value: "one", to: "/", label: "Home" },
    { value: "two", to: "/ToDoListPage", label: "ToDo List" },
    { value: "three", to: "/AboutUsPage", label: "About Us" },
  ];
  return (
    <Tabs
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      {tabsItems.map((item) => (
        <Link to={item.to}>
          <Tab value={item.value} label={item.label} />
        </Link>
      ))}
    </Tabs>
  );
};
export default MenuTabs;
