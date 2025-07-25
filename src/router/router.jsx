import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/RegisterPage/Register";
import SignIn from "../pages/SignInPage/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "../routes/PrivateRoute";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/addjobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) => fetch(`https://career-code-server-rosy.vercel.app/jobs/${params.id}`)

      },
      {
        path: "jobApply/:id",
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>

      },
      {
        path: "myApplications",
        element: <PrivateRoute>
          <MyApplications></MyApplications>
        </PrivateRoute>,

      },
      {
        path: "addJob",
        element: <PrivateRoute>
          <AddJobs></AddJobs>
        </PrivateRoute>
      },
      {
        path: "myPostedJobs",
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>

      },
      {
        path: "applications/:job_id",
        element: <PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://career-code-server-rosy.vercel.app/applications/job/${params.job_id}`)

      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
    ]
  },
]);

export default router;