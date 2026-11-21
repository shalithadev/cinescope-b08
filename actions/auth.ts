"use server";

import { auth } from "@/lib/auth";

export interface AuthFormState {
  message: string | null;
  success?: boolean;
  errors?: Record<string, string[]>;
}

export async function loginUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Basic validation for email and password
    if (!email || email === "") {
      return {
        message: null,
        errors: {
          email: ["Email is required."],
        },
      };
    }

    if (!password || password === "") {
      return {
        message: null,
        errors: {
          password: ["Password is required."],
        },
      };
    }

    // Use try catch to handle any potential errors during the login process
    try {
      const response = await auth.api.signInEmail({
        body: {
          email,
          password,
          rememberMe: true, // Set to true to remember the user session
        },
      });

      // For debugging purposes, log the response from the login attempt
      console.log("Login response:", response);

      return {
        message: "User login successful!",
        success: true,
        errors: {},
      };
    } catch (error) {
      // console.log("Login failed:", error);

      if (error instanceof Error) {
        return {
          message: "User login failed",
          success: false,
          errors: {
            general: [error.message],
          },
        };
      }

      return {
        message: "User login failed",
        success: false,
        errors: {
          general: ["An error occurred during login. Please try again."],
        },
      };
    }
  }

  return {
    message: "",
    success: true,
    errors: {},
  };
}

export async function registerUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    // Simulate registration logic (e.g., save to database)
    // console.log("Registering user:", { name, email, password });

    if (!name || name === "") {
      return {
        message: null,
        errors: {
          name: ["Name is required."],
        },
      };
    }

    if (!email || email === "") {
      return {
        message: null,
        errors: {
          email: ["Email is required."],
        },
      };
    }

    if (!password || password === "") {
      return {
        message: null,
        errors: {
          password: ["Password is required."],
        },
      };
    }

    if (password.length < 8) {
      return {
        message: null,
        errors: {
          password: ["Password must be at least 8 characters long."],
        },
      };
    }

    // Continue with further validation like password strength, email format, etc.

    if (password !== confirmPassword) {
      return {
        message: "Passwords do not match",
        success: false,
        errors: {
          confirmPassword: ["Passwords do not match"],
        },
      };
    }

    // console.log("user :::: ", name, email, password, confirmPassword);

    try {
      const response = await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
        },
      });

      console.log("response :::: ", response);

      // Simulate an error for registration failure
      // throw new Error("Registration failed");

      return {
        message: "User registration successful",
        success: true,
        errors: {},
      };
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error);
      return {
        message: "Registration failed",
        success: false,
        errors: {
          general: ["An error occurred during registration."],
        },
      };
    }
  }

  return {
    message: "",
    success: true,
    errors: {},
  };
  try {
    //
  } catch {
    //
  }
}
