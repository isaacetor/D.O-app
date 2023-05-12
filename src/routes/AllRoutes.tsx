import { lazy, Suspense } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import {
  DirectorDashboardLayout,
  UserAuthLayout,
  HomeLayout,
  UserDashboardLayout,
  StationDashboardlayout,
  StationAuthLayout,
} from "../components";

import Stations from "../pages/directordashboard/DirectorStation";
import AgentHome from "../pages/directordashboard/DirectorHome";
import { ErrorBoundary, HomeLoading, NotFound } from "../utils";
import Registermallam from "../pages/stationdashboard/Registermallam";
import Notification from "../pages/stationdashboard/Notification";
import AssignMallam from "../pages/stationdashboard/AssignMallam";
import Verification from "../components/commons/props/Verification";
import DirectorAuth from "../components/layouts/directorAurhLayout/DirectorAuth";
import { useAppSelector } from "../services/statemanagement/Store";
import { useEffect } from "react";
import { PrivateRoute } from "./privateroute";

const AgentRegister = lazy(() => import("../pages/auth/agent/AgentRegister"));
const AgentLogin = lazy(() => import("../pages/auth/agent/AgentLogin"));
const Feedback = lazy(() => import("../pages/userdashboard/Feedback"));
const Landing = lazy(() => import("../pages/homepage/Landing"));
const MakePayment = lazy(() => import("../pages/userdashboard/MakePayment"));
const MakeRequest = lazy(() => import("../pages/userdashboard/MakeRequest"));
const Profile = lazy(() => import("../pages/userdashboard/Profile"));
const StationHome = lazy(() => import("../pages/stationdashboard/StationHome"));
const UserHome = lazy(() => import("../pages/userdashboard/UserHome"));
const UserLogin = lazy(() => import("../pages/auth/user/UserLogin"));
const UserRegister = lazy(() => import("../pages/auth/user/UserRegister"));
const Stationlogin = lazy(() => import("../pages/auth/station/Stationlogin"));

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
  //dd
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,

        element: (
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
            <Landing />
          </Suspense>
        ),
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
        // element: <UserHome />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserHome />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "makepayment",

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MakePayment />
          </Suspense>
        ),

        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "makerequest",
        // element: <MakeRequest />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MakeRequest />
          </Suspense>
        ),

        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "feedback",
        // element: <Feedback />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Feedback />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "profile",

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  // to testtttttttttttttttttttttttttttttt
  {
    path: "/loading",
    element: <HomeLoading />,
  },

  //user Authentication routes
  {
    path: "/user/register",
    element: <UserAuthLayout />,
    children: [
      {
        index: true,

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserRegister />
          </Suspense>
        ),
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
        // element: <UserLogin />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserLogin />,
          </Suspense>
        ),
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
        path: "stations",
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
        // element: <AgentRegister />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AgentRegister />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/director/register/login",
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AgentLogin />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  {
    path: "/station/login",
    element: <StationAuthLayout />,
    children: [
      {
        index: true,

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Stationlogin />
          </Suspense>
        ),
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

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <StationHome />
          </Suspense>
        ),
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
