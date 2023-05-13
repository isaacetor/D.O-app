import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
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
import DirectorAuth from "../components/layouts/directorAurhLayout/DirectorAuth";
import { PrivateRoute } from "./privateroute";
import { RedirectToEmail, Verified } from "../pages";
import RecyclablePayment from "../blog/RecyclablePayment";
import RecyclePost from "../blog/articles/RecyclePost";

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

export const element = createBrowserRouter([
  // landing page routes
  {
    path: "/",
    element: (
      <Suspense fallback={<HomeLoading />}>
        <HomeLayout />
      </Suspense>
    ),
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
      <Suspense fallback={<HomeLoading />}>
        <PrivateRoute>
          <UserDashboardLayout />
        </PrivateRoute>
      </Suspense>
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

        element: (
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
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
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
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
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
            <Feedback />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "profile",

        element: (
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
            <Profile />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  //blog

  //user Authentication routes
  {
    path: "/blog",
    element: <RecyclablePayment />,
    children: [
      {
        index: true,
        element: <RecyclePost />,

        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "/verify-account",
    element: <RedirectToEmail />,
  },
  {
    path: "/verified/:id/:token",
    element: <Verified />,
  },
  {
    path: "/user/register",
    element: <UserAuthLayout />,
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
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
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
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
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
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
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
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
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
          <Suspense
            fallback={
              <div>
                <HomeLoading />
              </div>
            }
          >
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

  {
    path: "*",
    element: <NotFound />,
  },
]);
