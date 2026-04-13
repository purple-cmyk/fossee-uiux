import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Activation from "./pages/Activation";
import AddWorkshopType from "./pages/AddWorkshopType";
import EditProfile from "./pages/EditProfile";
import EditWorkshopType from "./pages/EditWorkshopType";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import PasswordChangeDone from "./pages/PasswordChangeDone";
import PasswordResetComplete from "./pages/PasswordResetComplete";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
import PasswordResetDone from "./pages/PasswordResetDone";
import ProfileStats from "./pages/ProfileStats";
import ProposeWorkshop from "./pages/ProposeWorkshop";
import Register from "./pages/Register";
import TeamStats from "./pages/TeamStats";
import ViewProfile from "./pages/ViewProfile";
import WorkshopDetails from "./pages/WorkshopDetails";
import WorkshopPublicStats from "./pages/WorkshopPublicStats";
import WorkshopStats from "./pages/WorkshopStats";
import WorkshopStatusCoordinator from "./pages/WorkshopStatusCoordinator";
import WorkshopStatusInstructor from "./pages/WorkshopStatusInstructor";
import WorkshopTypeDetails from "./pages/WorkshopTypeDetails";
import WorkshopTypeList from "./pages/WorkshopTypeList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />  {/* Default route to Login for now */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="password-change" element={<PasswordChangeDone />} />
          <Route path="password-reset" element={<PasswordResetDone />} />
          <Route path="password-reset-complete" element={<PasswordResetComplete />} />
          <Route path="password-reset-confirm" element={<PasswordResetConfirm />} />
          <Route path="activation" element={<Activation />} />
          <Route path="profile" element={<ViewProfile />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="stats/public" element={<WorkshopPublicStats />} />
          <Route path="stats/team" element={<TeamStats />} />
          <Route path="stats" element={<WorkshopStats />} />
          <Route path="stats/profile" element={<ProfileStats />} />
          <Route path="workshop-status/instructor" element={<WorkshopStatusInstructor />} />
          <Route path="workshop-status/coordinator" element={<WorkshopStatusCoordinator />} />
          <Route path="propose" element={<ProposeWorkshop />} />
          <Route path="types" element={<WorkshopTypeList />} />
          <Route path="types/add" element={<AddWorkshopType />} />
          <Route path="types/edit" element={<EditWorkshopType />} />
          <Route path="types/details" element={<WorkshopTypeDetails />} />
          <Route path="workshop/details" element={<WorkshopDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
