'use client';
import * as React from 'react'
import Image from "next/image";

import * as Styled from "./styles";
import Link from "next/link";
import LogoLarge from "../assets/images/logo-devlinks-large.svg";
import { Button, Input } from "../components";

import { z } from 'zod';
import { useFormValidator } from '../hooks';
import { AppProvider } from '../lib/styles/theme-provider';

const formValidator = z.object({
  email: z.string().email().default(''),
  password: z.string().min(8).max(20).default(''),
})

export type LoginResult = z.infer<typeof formValidator>;
export type LoginSchema = z.input<typeof formValidator>


export default function Index() {
  const [{ errors }, { handleSubmit }] = useFormValidator<LoginResult,LoginSchema>(formValidator);

  return (
    <AppProvider>
      <Styled.PageContainer>
        <h1>
          <Link href="/">
            <Image src={LogoLarge} alt="dev links logo" />
          </Link>
        </h1>
        <Styled.FormContainer onSubmit={handleSubmit}>
          <Styled.Title>Login</Styled.Title>
          <Styled.SubTitle>
            Add your details below to get back into the app
          </Styled.SubTitle>
          <Styled.FormRoot>
            <Input
              label="Email address"
              name="email"
              placeholder="e.g. alex@email.com"
              type="email"
              errorMessage={errors?.email}
            />
            <Input
              label="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
              errorMessage={errors?.password}
            />
            <Styled.ButtonWrapper>
              <Button $isFullWidth type='submit'>Login</Button>
            </Styled.ButtonWrapper>
          </Styled.FormRoot>
          <Styled.Footer>
            <Styled.Message>Don&apos;t have an account?</Styled.Message>{" "}
            <Styled.Url href="create-account">Create account</Styled.Url>
          </Styled.Footer>
        </Styled.FormContainer>
      </Styled.PageContainer>
    </AppProvider>
    );
}
