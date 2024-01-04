import React, { useEffect, useState } from "react";
import { AdminStyled } from "./AdminPanelStyle";
import CreatePost from "./CreatePost/CreatePost";
import AccessDenied from "../../components/AccessDenied/AccessDenied";
import axios from "axios";
import config from "../../configURLS.json";
export default function AdminPanel() {
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) setShowError(true);
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios
        .get(`${config["BASE-URL"]}/admin/auth`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res))
        .catch(() => setShowError(true));
    }
  }, []);

  if (showError) return <AccessDenied />;
  return (
    <AdminStyled>
      <CreatePost />
    </AdminStyled>
  );
}
