import { MdOutlineDashboard, MdOutlineLocalShipping, MdOutlineShoppingBasket, MdOutlineCategory, MdOutlineGroups, MdOutlineReceiptLong, MdSyncAlt, MdOutlineQueryStats } from "react-icons/md";

const SideNav = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-72 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Menu</h2>
        </div>
        <nav className="mt-10">
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdOutlineDashboard className="mr-4" />
            Dashboard  
          </a>
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdOutlineShoppingBasket className="mr-4" />
            Product
          </a>
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdOutlineCategory className="mr-4" />
            Category
          </a>
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdOutlineLocalShipping className="mr-4" />
            Supplier
          </a>
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdOutlineGroups className="mr-4" />
            Customer
          </a>
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdOutlineReceiptLong className="mr-4" />
            Order
          </a>
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdSyncAlt className="mr-4" />
            Transactions
          </a>
          <a href="#" className="antialiased text-lg flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <MdOutlineQueryStats className="mr-4" />
            Reports
          </a>
        </nav>
      </div>

    </>
  )
}

export default SideNav