import { useState } from 'react';
import Head from 'next/head';

import { PageWithLayout } from '~/assets/ts/types';
import Container from '~/components/common/Container';
import EmailForm from '~/components/page-reset-password/EmailForm';
import PasswordForm from '~/components/page-reset-password/PasswordForm';

const ResetPasswordPage: PageWithLayout = () => {
  const [activeForm, setActiveForm] = useState<'email' | 'password'>(
    'password',
  );

  function handleEmailFormSubmitted() {
    setActiveForm('password');
  }

  function handleSubmittedPasswords() {}

  return (
    <>
      <Head>
        <title>Reset Password | TaskSheet</title>
      </Head>

      <main>
        <Container>
          {activeForm === 'email' ? (
            <EmailForm
              handleEmailFormSubmitted={() => handleEmailFormSubmitted()}
            />
          ) : (
            <PasswordForm
              handleSubmittedPasswords={() => handleSubmittedPasswords()}
            />
          )}
        </Container>
      </main>
    </>
  );
};

ResetPasswordPage.layout = 'auth';

export default ResetPasswordPage;
