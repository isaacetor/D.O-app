import { lazy, Suspense } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import {
  DirectorDashboardLayout,
  UserAuthLayout,
  HomeLayout,
  UserDashboardLayout,
  StationDashboardlayout,
} from "../components";
import {
  AgentHome,
  AgentRegister,
  Feedback,
  Landing,
  MakePayment,
  MakeRequest,
  Profile,
  StationHome,
  UserHome,
  UserLogin,
  UserRegister,
} from "../pages";
import Stations from "../pages/directordashboard/DirectorStation";
import { ErrorBoundary, NotFound } from "../utils";
import Registermallam from "../pages/stationdashboard/Registermallam";
import Notification from "../pages/stationdashboard/Notification";
import AssignMallam from "../pages/stationdashboard/AssignMallam";
import Verification from "../components/commons/props/Verification";
import DirectorAuth from "../components/layouts/directorAurhLayout/DirectorAuth";
import { useAppSelector } from "../services/statemanagement/Store";
import { useEffect } from "react";
import { PrivateRoute } from "./privateroute";

const PrivateRouteConfig = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userDetails);

  useEffect(() => {
    if (user?.name !== "" && user?.role === "User") {
      navigate("/user/home", { replace: true });
    } else if (user?.name !== "" && user?.role === "director") {
      navigate("/director/home", { replace: true });
    } else if (user?.name !== "" && user?.role === "station") {
      navigate("/station", { replace: true });
    }
  }, []);
};

export const element = createBrowserRouter([
  // landing page routes
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //userDashboard routes
  {
    path: "/user/home",
    element: (
      <PrivateRoute>
        <UserDashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserHome />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "makepayment",
        element: <MakePayment />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "makerequest",
        element: <MakeRequest />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "feedback",
        element: <Feedback />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //user Authentication routes
  {
    path: "/user/register",
    element: <UserAuthLayout />,
    children: [
      {
        index: true,
        element: <UserRegister />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "/user/login",
    element: <UserAuthLayout />,
    children: [
      {
        index: true,
        element: <UserLogin />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //director Authentication routes
  {
    path: "/director/home",
    element: <DirectorDashboardLayout />,
    children: [
      {
        index: true,
        element: <AgentHome />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/director/home/stations",
        index: true,
        element: <Stations />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  {
    path: "/director/register",
    element: <DirectorAuth />,
    children: [
      {
        index: true,
        element: <AgentRegister />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //station  routes
  {
    path: "/station",
    element: <StationDashboardlayout />,
    children: [
      {
        index: true,
        element: <StationHome />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/mallam",
        element: <Registermallam />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/Notify",
        element: <Notification />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/assign",
        element: <AssignMallam />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //OTP Routes
  {
    path: "/Verification",
    element: <Verification />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
