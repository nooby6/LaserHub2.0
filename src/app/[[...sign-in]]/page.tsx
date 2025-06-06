"use client";

// Import modules and components from Clerk, Next.js, and React
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// LoginPage component manages user authentication and role-based redirection
const LoginPage = () => {
    // Retrieve authentication state and user information from Clerk
    const { isLoaded, isSignedIn, user } = useUser();

    // Initialize Next.js router for navigation
    const router = useRouter();

    // Redirect authenticated users to their role-specific dashboard
    useEffect(() => {
        const role = user?.publicMetadata.role;
        if (role) {
            router.push(`/${role}`);
        }
    }, [user, router]);

    return (
        // Main container for the sign-in form, centered with background styling
        <div className="h-screen flex items-center justify-center bg-laserPurpleLight">
            <SignIn.Root>
                {/* Sign-in form step */}
                <SignIn.Step
                    name="start"
                    className="bg-black-200 p-12 rounded-md shadow-2xl flex flex-col gap-2 w-[400px] h-[400px] items-center justify-center"
                >
                    {/* Application logo and title */}
                    <h1 className="text-xl font-bold flex items-center gap-2 ">
                        <Image src="/logo.jpg" alt="" width={24} height={24} />
                        LASER LEARNING HUB
                    </h1>
                    {/* Sign-in subtitle */}
                    <h2 className="text-black-400">Sign in to your account</h2>
                    {/* Display global authentication errors */}
                    <Clerk.GlobalError className="text-sm text-red-400 " />
                    {/* Username input field */}
                    <Clerk.Field name="identifier" className="flex flex-col gap-2 mb-2">
                        <Clerk.Label className="text-xs text-black-500 font-semibold">
                            Username
                        </Clerk.Label>
                        <Clerk.Input
                            type="text"
                            required
                            className="p-2 rounded-md ring-1 ring-black-300"
                        />
                        <Clerk.FieldError className="text-xs text-red-400" />
                    </Clerk.Field>
                    {/* Password input field */}
                    <Clerk.Field name="password" className="flex flex-col gap-2 mb-2">
                        <Clerk.Label className="text-xs text-black-500 font-semibold">
                            Password
                        </Clerk.Label>
                        <Clerk.Input
                            type="password"
                            required
                            className="p-2 rounded-md ring-1 ring-black-300"
                        />
                        <Clerk.FieldError className="text-xs text-red-400" />
                    </Clerk.Field>
                    {/* Submit button for sign-in */}
                    <SignIn.Action
                        submit
                        className="bg-blue-500 text-white my-1 rounded-md text-sm p-[10px]"
                    >
                        Sign In
                    </SignIn.Action>
                </SignIn.Step>
            </SignIn.Root>
        </div>
    );
};

export default LoginPage;
