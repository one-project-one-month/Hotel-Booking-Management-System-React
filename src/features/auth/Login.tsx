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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

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

  function onSubmit(values: FormSchema) {
    console.log(values);
  }

  return (
    <div className="mx-auto gap-5 lg:gap-20 p-5 grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl rounded-xl overflow-hidden">
      {/* Left - Form */}
      <div className="flex flex-col px-0 sm:px-20 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Hotel Management System
        </h1>
        <p className="text-gray-600 mb-6 text-lg">Login Here</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="lg:space-y-8 md:space-y-5 space-y-8"
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              className={
                "w-full bg-blue-900 cursor-pointer hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
              }
            >
              Login
            </button>
          </form>
        </Form>
        <p className="text-gray-600 mt-6 text-base">Don’t have an account? <span className="cursor-pointer text-blue-500">Sign up here</span></p>
      </div>
      {/* Right - Images */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 mb-2">
          <img
            src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
            className="w-full object-cover rounded-lg h-full row-span-2"
            alt="Room Image"
          />

          <img
            src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
            className="w-full object-cover rounded-lg h-full "
            alt="Room Image"
          />
          <img
            src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
            className="w-full object-cover rounded-lg h-full"
            alt="Room Image"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <img
            src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
            className="w-full flex-1 object-cover rounded-lg h-full col-span-2"
            alt="Room Image"
          />
          <img
            src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
            className="w-full object-cover rounded-lg h-full"
            alt="Room Image"
          />
        </div>
      </div>
    </div>
  );
}
