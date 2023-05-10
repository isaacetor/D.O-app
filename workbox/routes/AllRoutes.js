"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.element = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("../components");
const DirectorStation_1 = __importDefault(require("../pages/directordashboard/DirectorStation"));
const DirectorHome_1 = __importDefault(require("../pages/directordashboard/DirectorHome"));
const utils_1 = require("../utils");
const Registermallam_1 = __importDefault(require("../pages/stationdashboard/Registermallam"));
const Notification_1 = __importDefault(require("../pages/stationdashboard/Notification"));
const AssignMallam_1 = __importDefault(require("../pages/stationdashboard/AssignMallam"));
const Verification_1 = __importDefault(require("../components/commons/props/Verification"));
const DirectorAuth_1 = __importDefault(require("../components/layouts/directorAurhLayout/DirectorAuth"));
const Store_1 = require("../services/statemanagement/Store");
const react_2 = require("react");
const privateroute_1 = require("./privateroute");
const AgentRegister = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/auth/agent/AgentRegister"))));
const AgentLogin = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/auth/agent/AgentLogin"))));
const Feedback = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/userdashboard/Feedback"))));
const Landing = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/homepage/Landing"))));
const MakePayment = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/userdashboard/MakePayment"))));
const MakeRequest = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/userdashboard/MakeRequest"))));
const Profile = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/userdashboard/Profile"))));
const StationHome = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/stationdashboard/StationHome"))));
const UserHome = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/userdashboard/UserHome"))));
const UserLogin = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/auth/user/UserLogin"))));
const UserRegister = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/auth/user/UserRegister"))));
const Stationlogin = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../pages/auth/user/UserLogin"))));
const PrivateRouteConfig = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const user = (0, Store_1.useAppSelector)((state) => state.userDetails);
    (0, react_2.useEffect)(() => {
        if ((user === null || user === void 0 ? void 0 : user.name) !== "" && (user === null || user === void 0 ? void 0 : user.role) === "User") {
            navigate("/user/home", { replace: true });
        }
        else if ((user === null || user === void 0 ? void 0 : user.name) !== "" && (user === null || user === void 0 ? void 0 : user.role) === "director") {
            navigate("/director/home", { replace: true });
        }
        else if ((user === null || user === void 0 ? void 0 : user.name) !== "" && (user === null || user === void 0 ? void 0 : user.role) === "station") {
            navigate("/station", { replace: true });
        }
    }, []);
};
exports.element = (0, react_router_dom_1.createBrowserRouter)([
    // landing page routes
    //dd
    {
        path: "/",
        element: <components_1.HomeLayout />,
        children: [
            {
                index: true,
                // element: <Landing />,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <Landing />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    //userDashboard routes
    {
        path: "/user/home",
        element: (<privateroute_1.PrivateRoute>
        <components_1.UserDashboardLayout />
      </privateroute_1.PrivateRoute>),
        children: [
            {
                index: true,
                // element: <UserHome />,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <UserHome />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "makepayment",
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <MakePayment />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "makerequest",
                // element: <MakeRequest />,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <MakeRequest />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "feedback",
                // element: <Feedback />,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <Feedback />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "profile",
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    //user Authentication routes
    {
        path: "/user/register",
        element: <components_1.UserAuthLayout />,
        children: [
            {
                index: true,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <UserRegister />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    {
        path: "/user/login",
        element: <components_1.UserAuthLayout />,
        children: [
            {
                index: true,
                // element: <UserLogin />,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <UserLogin />,
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    //director Authentication routes
    {
        path: "/director/home",
        element: <components_1.DirectorDashboardLayout />,
        children: [
            {
                index: true,
                element: <DirectorHome_1.default />,
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "stations",
                index: true,
                element: <DirectorStation_1.default />,
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    {
        path: "/director/register",
        element: <DirectorAuth_1.default />,
        children: [
            {
                index: true,
                // element: <AgentRegister />,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <AgentRegister />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "/director/register/login",
                index: true,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <AgentLogin />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    {
        path: "/station/login",
        element: <components_1.StationAuthLayout />,
        children: [
            {
                index: true,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <Stationlogin />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    //station  routes
    {
        path: "/station",
        element: <components_1.StationDashboardlayout />,
        children: [
            {
                index: true,
                element: (<react_1.Suspense fallback={<div>Loading...</div>}>
            <StationHome />
          </react_1.Suspense>),
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "/station/mallam",
                element: <Registermallam_1.default />,
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "/station/Notify",
                element: <Notification_1.default />,
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
            {
                path: "/station/assign",
                element: <AssignMallam_1.default />,
                errorElement: <utils_1.ErrorBoundary />,
                hasErrorBoundary: true,
            },
        ],
    },
    //OTP Routes
    {
        path: "/Verification",
        element: <Verification_1.default />,
    },
    {
        path: "*",
        element: <utils_1.NotFound />,
    },
]);
// export default withServiceWorker(element)
