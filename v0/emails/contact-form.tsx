import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio website</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-5 px-5">
            <Heading className="text-2xl font-bold text-gray-900">
              New Contact Form Message
            </Heading>
            <Text className="text-gray-700">
              You received a new message from your portfolio website:
            </Text>
            <Section className="mt-6 border rounded-lg p-6 bg-gray-50">
              <Text className="font-medium text-gray-900">
                From: {name} ({email})
              </Text>
              <Hr className="my-4" />
              <Text className="text-gray-700 whitespace-pre-wrap">{message}</Text>
            </Section>
            <Text className="text-sm text-gray-500 mt-6">
              This email was sent from your portfolio website's contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
} 
