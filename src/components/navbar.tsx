import { Icons } from "@/components/icons"

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className="min-h-[4rem] px-4 bg-transparent backdrop-blur-sm sticky top-0 mb-8 flex items-center border-b border-slate-200 dark:border-b-slate-700">
      <p className="text-xl font-bold">Udyog</p>
      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center">
        
      </ul>

      {/* Mobile Navbar */}
      <div className="md:hidden ml-auto">
        <Icons.menu className="cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar
