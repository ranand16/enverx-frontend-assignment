import RouteLoader from "../shared/Loader";
import Lodable from "react-loadable";


const LoadableConfig = {
    delay: 300,
    timeout: 10000,
  };
  
export const ROUTES = [
    {
      key: "ExpenseHome",
      routeProps: {
        path: "/",
        // element: <Ex/>,
        component: Lodable({
            loader: () => <ExC/>,
            loading: RouteLoader,
            ...LoadableConfig,
        }),
      }
    },
    {
        key: "ExpenseHome2",
        routeProps: {
          path: "/home",
        //   element: <Ex/>,
          component: Lodable({
            loader: () => <ExC/>,
              loading: RouteLoader,
            ...LoadableConfig,
          }),
        }
    }
]
