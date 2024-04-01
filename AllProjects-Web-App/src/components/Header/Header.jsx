import React from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
  { name: 'Projects', to: '/projects' },
  { name: 'UI', to: '/ui' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="relative w-full bg-[#222831]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-[#EEEEEE] text-2xl">AllProjects - WebHome</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className="text-sm font-semibold text-[#EEEEEE] hover:text-[#76ABAE]"
                  onClick={closeMenu} // Close menu when a menu item is clicked
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md bg-[#79aeb1] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#69bfc3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-black focus-visible:outline-black"
          >
            Explore
          </button>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-[#79aeb1] focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#31363F] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <h1 className="text-lg font-bold text-[#EEEE]">AllProjects - WebHome</h1>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-[#76ABAE] hover:bg-[#000] hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="text-sm font-semibold text-[#EEEEEE] hover:text-[#76ABAE]"
                        onClick={closeMenu} // Close menu when a menu item is clicked
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-[#222831] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#76ABAE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
