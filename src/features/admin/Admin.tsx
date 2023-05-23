import Container from "../../components/Container";
import CustomAppBar from "../../components/Header/CustomAppBar";

const Admin = () => {
  return (
    <>
      <CustomAppBar titleId="admin" />
      <Container>{/* <Users /> */}</Container>
    </>
  );
};

export default Admin;
