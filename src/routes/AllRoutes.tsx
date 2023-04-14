import { createBrowserRouter } from "react-router-dom";
import {
  AgentAuthLayout,
  UserAuthLayout,
  HomeLayout,
  UserDashboardLayout,
  StationDashboardlayout,
} from "../components";
import {
  AgentHome,
  AgentLogin,
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
import { ErrorBoundary, NotFound } from "../utils";

export const element = createBrowserRouter([
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
  {
    path: "/user",
    element: <UserDashboardLayout />,
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
  {
    path: "/agent/login",
    element: <AgentAuthLayout />,
    children: [
      {
        index: true,
        element: <AgentLogin />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "/agent/register",
    element: <AgentAuthLayout />,
    children: [
      {
        index: true,
        element: <AgentRegister />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

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
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
