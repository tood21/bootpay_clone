import {useRoutes} from 'react-router-dom';

import MainLayout from "layouts/MainLayout";

import Home from "pages/Home";
import Overview from "pages/Overview";
import PgApply from "pages/PgApply";
import Guide from "pages/Guide";
import Analytics from "pages/Analytics";
import PaymentAgent from "pages/PaymentAgent";
import Help from "pages/Help";

const MainRoutes = () => {
    let element = useRoutes([
            {
                path: "/",
                element: <MainLayout/>,
                children: [
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "overview",
                        element: <Overview/>
                    },
                    {
                        path: "pg_apply",
                        element: <PgApply />
                    },
                    {
                        path: "guide",
                        element: <Guide/>
                    },
                    {
                        path: "analytics",
                        element: <Analytics/>
                    },
                    {
                        path: "payment_agent",
                        element: <PaymentAgent/>
                    },
                    {
                        path: "help",
                        element: <Help/>
                    }
                ]
            }
        ]
    );

    return element;
}


export default MainRoutes;