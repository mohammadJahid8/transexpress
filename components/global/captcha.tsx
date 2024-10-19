'use client';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = ({
  onChange,
}: {
  onChange: (value: string | null) => void;
}) => {
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string}
      onChange={onChange}
    />
  );
};

export default Captcha;
