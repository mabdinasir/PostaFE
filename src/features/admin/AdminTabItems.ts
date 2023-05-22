import { TabItem } from "../../models/TabItem";
import Mail from "../mail/Mail";
import UserTypes from "../users/UserTypes";
import Users from "../users/Users";

const useAdminTabItems = (): TabItem[] => {
  return [
    { name: "Users", component: Users },
    { name: "User Types", component: UserTypes },
    { name: "Locations", component: UserTypes },
    { name: "Mail", component: Mail },
  ];
};

export default useAdminTabItems;
