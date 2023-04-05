import { createBrowserRouter } from "react-router-dom";
import { AgentDashboard, HomeLayout, UserDashboardLayout } from "../components";
import {
  AgentHome,
  AgentLogin,
  AgentReister,
  Feedback,
  Landing,
  MakePayment,
  MakeRequest,
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
        path: "register",
        element: <UserRegister />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "login",
        element: <UserLogin />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "/agent",
    element: <AgentDashboard />,
    children: [
      {
        index: true,
        element: <AgentHome />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "login",
        element: <AgentLogin />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "login",
        element: <AgentReister />,
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
