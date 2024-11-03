import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/_components/ui/Sidebar"
import { AppSidebar } from "@/_components/AppSidebar"
import "@/app/globals.css";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1">
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
          </header>
          <main className="flex-1 overflow-auto p-4">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}