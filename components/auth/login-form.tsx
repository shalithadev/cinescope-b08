"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { cn } from "cn";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/actions/auth";

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const initialState = {
    message: null,
    errors: {},
    success: false,
  };

  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState,
  );

  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const handleChange =
    (field: keyof LoginFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // User input value from the event
      const value = event.currentTarget.value;
      // Update the state with the new value for the specific field
      setValues((currentValues) => ({
        ...currentValues, // Spread the current values to maintain other fields
        [field]: value, // Update the specific field with the new value
      }));
    };

  useEffect(() => {
    // If success = true, navigate to the dashboard page
    if (state.success) {
      router.push("/dashboard");
    } else {
      console.log("Registration state:", state);
    }
  }, [state, router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="px-8 py-12">
        <CardHeader>
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email" // Set the input type to email for validation
                  autoComplete="email" // Enable browser autocomplete for email
                  autoFocus // Automatically focus on this input when the form loads
                  value={values.email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email address"
                  // required
                />
                <FieldError className="text-red-500 text-xs ml-1">
                  {state.errors?.email?.[0]}
                </FieldError>
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange("password")}
                  // required
                />
                <FieldError className="text-red-500 text-xs ml-1">
                  {state.errors?.password?.[0]}
                </FieldError>
              </Field>
              <Field className="grid gap-2">
                <FieldError className="text-xs text-center text-red-500">
                  {state.errors?.general?.[0]}
                </FieldError>
                <Button size="lg" type="submit" disabled={isPending}>
                  <Loader2Icon
                    className={cn(
                      "animate-spin",
                      isPending ? "block" : "hidden",
                    )}
                  />
                  Login
                </Button>
                <Button size="lg" variant="outline" type="button" disabled>
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/register">Register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
