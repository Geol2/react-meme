import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Components/main/Main";
import TaskMain from "../Components/tasks/TaskMain";
import MainLayout from "../Components/layout/MainLayout";
import NotFound from "../Components/layout/NotFound";

import TaskItem from "../Components/tasks/TaskDetail";

const RouterAppProvider = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Main /> },
        { path: "todo", element: <TaskMain /> },
        { path: "todo/:id", element: <TaskItem /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};
export default RouterAppProvider;
