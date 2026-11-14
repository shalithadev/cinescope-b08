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
import { registerUser } from "@/actions/auth";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // Use the useRouter hook to navigate after successful registration
  const router = useRouter();
  const initialState = {
    message: null,
    errors: {},
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );
  const [values, setValues] = useState<RegisterFormValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange =
    (field: keyof RegisterFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;
      setValues((currentValues) => ({
        ...currentValues,
        [field]: value,
      }));
    };

  useEffect(() => {
    if (state.success) {
      router.push("/login");
    } else {
      console.log("Registration state:", state);
    }
  }, [state, router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="px-8 py-12">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">
                  Name<span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  placeholder="Enter your name"
                  className={cn(state.errors?.name && "border-red-500")}
                />
                <FieldError className="text-red-500 text-xs ml-1">
                  {state.errors?.name?.[0]}
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email address"
                  className={cn(state.errors?.email && "border-red-500")}
                />
                <FieldError className="text-red-500 text-xs ml-1">
                  {state.errors?.email?.[0]}
                </FieldError>
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    Password<span className="text-red-500">*</span>
                  </FieldLabel>
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
                  value={values.password}
                  onChange={handleChange("password")}
                  placeholder="Enter a new password"
                  className={cn(state.errors?.password && "border-red-500")}
                />
                <FieldError className="text-red-500 text-xs ml-1">
                  {state.errors?.password?.[0]}
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password<span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  placeholder="Confirm your password"
                  className={cn(
                    state.errors?.confirmPassword && "border-red-500",
                  )}
                />
                <FieldError className="text-red-500 text-xs ml-1">
                  {state.errors?.confirmPassword?.[0]}
                </FieldError>
              </Field>
              <Field className="grid gap-2">
                <FieldError className="text-xs text-center text-red-500">
                  {state.errors?.general?.[0]}
                </FieldError>
                <Button
                  size="lg"
                  type="submit"
                  disabled={isPending}
                  className="w-full cursor-pointer"
                >
                  <Loader2Icon
                    className={cn(
                      "animate-spin",
                      isPending ? "block" : "hidden",
                    )}
                  />
                  Register
                </Button>
                <Button size="lg" variant="outline" type="button" disabled>
                  Register with Google
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
