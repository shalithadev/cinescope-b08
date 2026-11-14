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

    console.log("email & password :::: ", email, password);

    return {
      message: "",
      success: true,
      errors: {},
    };
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
