import NoWishList from '@/assets/empty wishlist.png'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

export default function WishLists() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <img src={NoWishList} alt="No Coupons" className="w-48 mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No Wish List Yet</h2>
      <p className="text-gray-600 mb-6">
        Your wishlist is currently empty. Start exploring and add your favorite hotels or rooms to keep track of them here!
      </p>
      <Link to="/">
        <Button className="mt-3 bg-pink-600 hover:bg-pink-700 cursor-pointer px-12 py-6 rounded-xl shadow-lg ansition duration-300">
          Browse
        </Button>
      </Link>
    </div>
  )
}
