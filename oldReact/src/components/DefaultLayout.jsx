import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";

import FloatingChatButton from './FloatingChatButton';

export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/home" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/businesses">Businesses</Link>
        <Link to="/women-businesses">Women Businesses</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>

          <div>
            {user.name} &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        <FloatingChatButton />
        </main>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  );
}
