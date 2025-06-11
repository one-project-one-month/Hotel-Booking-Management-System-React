import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useLogin } from "@/api/services/auth";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import useRedirectIfAuthenticated from "@/hooks/useRedirect";
import { Link } from "react-router";

export default function Login() {
  useRedirectIfAuthenticated();
  const [showPassword, setShowPassword] = useState(false);
  const {mutate: createLoginMutation, isPending} = useMutation(useLogin())
  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  });

  type FormSchema = z.infer<typeof formSchema>;
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormSchema): void {
    createLoginMutation(values)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl mx-auto gap-8 lg:gap-16 p-8 grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Left - Form */}
        <div className="flex flex-col justify-center px-4 sm:px-8 md:px-6 lg:px-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent mb-3">
              Welcome
            </h1>
            <p className="text-gray-600 text-lg">Sign in to Hotel Management System</p>
          </div>
          
          <Form {...form}>
            <div className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium text-sm">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="example@gmail.com" 
                        {...field} 
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition-all duration-200 text-base"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium text-sm">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                          className="h-12 pr-12 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition-all duration-200 text-base"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => { setShowPassword(!showPassword); }}
                          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isPending}
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={form.handleSubmit(onSubmit)}
                  className="w-full cursor-pointer bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200 text-base"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </Form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
        
        {/* Right - Images */}
        <div className="hidden md:block p-4">
          <div className="h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-3 h-3/5">
              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                className="w-full object-cover rounded-xl h-full row-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Luxurious Hotel Room"
              />

              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                className="w-full object-cover rounded-xl h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Hotel Room Interior"
              />
              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                className="w-full object-cover rounded-xl h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Hotel Room View"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 h-2/5">
              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                className="w-full object-cover rounded-xl h-full col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Hotel Suite"
              />
              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                className="w-full object-cover rounded-xl h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Hotel Amenities"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}