// app/routes/login.tsx
import { Field, Input, Stack } from "@chakra-ui/react";
import { Form, useActionData } from "@remix-run/react";
import { handleSignIn } from "../../../utils/auth.server";


type ActionData = {
  errors?: {
    email?: string;
    password?: string;
  };
};


export const action = async ({ request }: { request: Request }) => {
  return handleSignIn(request);
};


export default function Login() {
  const actionData = useActionData<ActionData>();

  return (
    <Form method="post"> 
      <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }}>
        <Field.Root orientation="horizontal">
          <Field.Label>Email</Field.Label>
          <Input name="email" placeholder="me@example.com" flex="1" required />
          {actionData?.errors?.email && <em>{actionData.errors.email}</em>}
        </Field.Root>

        <Field.Root orientation="horizontal">
          <Field.Label>Password</Field.Label>
          <Input name="password" type="password" placeholder="Enter password" flex="1" required />
          {actionData?.errors?.password && <em>{actionData.errors.password}</em>}
        </Field.Root>

        <button type="submit">Login</button>
      </Stack>
    </Form>
  );
}
