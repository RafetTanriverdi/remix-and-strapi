// app/routes/_auth/register/index.tsx
import { Form, useActionData } from "@remix-run/react";
import { handleSignUp } from "~/utils/auth.server";
import {
  Stack,
  Field,
  Input,
  Button,
  Alert,
  Text,
  Box,
} from "@chakra-ui/react";

export const action = async ({ request }: { request: Request }) => {
  return handleSignUp(request);
};

type ActionData = {
  errors?: {
    email?: string;
    password?: string;
  };
};

export default function Register() {
  const actionData = useActionData<ActionData>();

  return (
    <Box maxW="sm" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Register
      </Text>

      {actionData?.errors && (
        <Alert.Root status="error" mb={4}>
            <Alert.Content>

          {actionData.errors.email || actionData.errors.password}
            </Alert.Content>
        </Alert.Root>
      )}

      <Form method="post">
        <Stack gap="6" maxW="sm" css={{ "--field-label-width": "96px" }}>
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

          <Button type="submit" colorScheme="blue" width="full">
            Register
          </Button>
        </Stack>
      </Form>
    </Box>
  );
}
