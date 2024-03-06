import { Outlet } from "react-router-dom"
import { MainNavigation } from "../components/MainNavigation"

export const RootLayout: React.FC = () => {
    return <>
        <MainNavigation/>
            <main>
                <Outlet/>
            </main>
    </>
}