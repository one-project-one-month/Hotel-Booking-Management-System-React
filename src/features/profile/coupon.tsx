import { useFetchCoupons } from '@/api/services/coupon';
import NoCoupon from '@/assets/no-coupon.png';
import Loading from '@/components/loading';
import { Button } from '@/components/ui/button';
import { Link } from "react-router";
import CouponList from './components/coupon-list';

export default function Coupon() {
  const { data: coupons = [], isLoading } = useFetchCoupons()

  const isLoggedIn = localStorage.getItem("token") !== null;
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loading />
      </div>
    );
  }
  return (
    <>
      {isLoggedIn ? (
        <CouponList coupons={coupons} />
      ) : (
        <CouponEmpty />
      )}
    </>
  );
}

function CouponEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <img src={NoCoupon} alt="No Coupons" className="w-48 mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No Coupons Yet</h2>
      <p className="text-gray-600 mb-6">Come back later or check out deals to find your first coupon!</p>
      <Link to="/">
        <Button className="mt-3 bg-pink-600 hover:bg-pink-700 cursor-pointer px-12 py-6 rounded-xl shadow-lg ansition duration-300">
          Browse Deals
        </Button>
      </Link>
    </div>
  )
}
