import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      {/* Header */}
      <div className="fixed top-0 left-0 z-50 w-full">
        <Header />
      </div>

      {/* Main Content */}
      <div className="pt-[6rem] p-5">
        {" "}
        {/* Add top padding equal to header height */}
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-background">
        <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-muted-foreground">
            SkyNet - Your Files, Everywhere, Forever
          </p>
        </div>
      </footer>
    </div>
  );
}
