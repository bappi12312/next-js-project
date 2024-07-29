import { Html, Head, Font, Preview, Heading, Row, Section, Text, Button } from '@react-email/components';
import * as React from 'react';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Preview>here&apos;s your verification code {otp} </Preview>
      <Preview>Verify your email</Preview>
      <Section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Row>
          <Heading style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>Email Verification</Heading>
        </Row>
        <Row>
          <Text style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>
            Hello {username},
          </Text>
        </Row>
        <Row>
          <Text style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>
            Please use the following OTP to verify your email:
          </Text>
        </Row>
        <Row>
          <Text style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#333' }}>
            {otp}
          </Text>
        </Row>
        <Row>
          <Button
            href="https://yourwebsite.com/verify"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            Verify Email
          </Button>
        </Row>
        <Row>
          <Text style={{ fontFamily: 'Roboto, sans-serif', color: '#333', marginTop: '20px' }}>
            If you did not request this, please ignore this email.
          </Text>
        </Row>
        <Row>
          <Text style={{ fontFamily: 'Roboto, sans-serif', color: '#333', marginTop: '20px' }}>
            {otp}
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
