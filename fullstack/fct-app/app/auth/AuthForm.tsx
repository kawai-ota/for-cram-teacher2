"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../chatpage/components/inputs/Input";
import Button from "../chatpage/components/Button";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() =>
          toast.error("入力情報に誤りがあるかすでに登録されています。")
        )
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      signIn("credentials", { ...data, redirect: false })
        .then((callback) => {
          if (callback?.error) {
            toast.error("入力情報に誤りがあります");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("ログインに成功しました");
            router.push("/chatpage/users");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="講師名"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="メールアドレス"
            register={register}
            errors={errors}
            required
            disabled={isLoading}
          />
          <span style={{ color: "red" }}>
            {errors.email && "メールアドレスは必須です"}
          </span>
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password"
            label="講師ID"
            type="password"
          />
          <span style={{ color: "red" }}>
            {errors.password && "パスワードは必須です"}
          </span>
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "ログイン" : "新規登録"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-10 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "新規登録をしますか？"
              : "すでにアカウントが存在しています"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "アカウントを作成する" : "ログインする"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
