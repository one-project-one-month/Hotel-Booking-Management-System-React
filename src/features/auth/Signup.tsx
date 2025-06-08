/* eslint-disable @typescript-eslint/no-misused-promises */
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useSignUp } from "@/api/services/auth";
import { useMutation } from "@tanstack/react-query";
import type { SignupPayload } from "@/types/auth-payload";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {mutate: createSignUp, isPending} = useMutation(useSignUp())

  const formSchema = z
    .object({
      name: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .max(50, { message: "Name must not exceed 50 characters." }),
      email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters." }),
      confirmPassword: z
        .string()
        .min(8, { message: "Confirm Password must be at least 8 characters." })
        .optional(),
      phoneNumber: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." })
        .max(15, { message: "Phone number must not exceed 15 digits." }),
      role: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    });

  type FormSchema = z.infer<typeof formSchema>;
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      role: "user",
    },
  });

  function onSubmit(values: FormSchema): void {
    const payload: SignupPayload = {
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      role: values.role
    }
    createSignUp(payload)
  }

  return (
    <div className="mx-auto gap-5 lg:gap-20 p-5 grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl rounded-xl overflow-hidden">
      {/* Left - Form */}
      <div className="flex flex-col px-0 sm:px-20 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Hotel Management System
        </h1>
        <p className="text-gray-600 mb-6 text-lg">Create Account</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="lg:space-y-8 md:space-y-5 space-y-8"
          >
  
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
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
                        onClick={() => { setShowPassword(!showPassword) }}
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

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Re-type Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          { setShowConfirmPassword(!showConfirmPassword)}
                        }
                        className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                      >
                        {showConfirmPassword ? (
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
            <Button
              type="submit"
              disabled={isPending}
              className={
                "w-full cursor-pointer bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200 text-base"
              }
            >
              Submit
            </Button>
          </form>
        </Form>
        <p className="text-gray-600 mt-6 text-base">Already have an account? <Link to="/login" className="cursor-pointer text-blue-500">Login here</Link></p>

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
