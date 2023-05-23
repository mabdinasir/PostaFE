import CustomAppBar from "../../components/Header/CustomAppBar";
import PermanentDrawer from "../../components/Menu/PermanentDrawer";
import hardCodedData from "../../settings/hardCodedData.json";

const Admin = () => {
  const { adminTabItems } = hardCodedData;
  return (
    <>
      <CustomAppBar title="admin" />
      <PermanentDrawer items={adminTabItems} />
    </>
  );
};

export default Admin;
