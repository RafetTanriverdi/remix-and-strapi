import { redirect } from "@remix-run/node";
import { fetchAuthSession, signIn, signUp } from "aws-amplify/auth";
import { sessionStorage } from "./session.server";


export async function handleSignUp(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors: { email?: string; password?: string } = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.length < 4) {
    errors.password = "Password should be at least 4 characters";
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
        },
        autoSignIn: true,
      },
    });

    if (userId) {
      return redirect("/login");
    }
    if (nextStep?.signUpStep === "CONFIRM_SIGN_UP") {
      return redirect("/confirm-signup");
    }
    return Response.json({ isSignUpComplete, userId, nextStep });
  } catch (error) {
    console.log(error);
    return Response.json({ errors: { error } }, { status: 400 });
  }
}

export async function handleSignIn(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors: { email?: string; password?: string } = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.length < 4) {
    errors.password = "Password should be at least 4 characters";
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  try {
  await signIn({ username: email, password });
    const { accessToken } = (await fetchAuthSession()).tokens ?? {};

    const session = await sessionStorage.getSession();
    session.set("cognitoAccessToken", accessToken?.toString());

    return redirect("/dashboard", {
      headers: { "Set-Cookie": await sessionStorage.commitSession(session) },
    });
  } catch (error) {
    return Response.json({ errors: { email: "Invalid email or password." } }, { status: 401 });
  }
}
