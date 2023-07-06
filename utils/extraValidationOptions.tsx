import * as Yup from 'yup';

export const companyEmailSchema: Yup.StringSchema<string|undefined> = Yup.string()
  .email('Invalid email address')
  .test(
    'is-company-email',
    'Only company emails are allowed',
    (value: string | undefined) => {
      // Regex pattern to match company email domains
      const companyEmailRegex: RegExp = /^[A-Za-z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      // Check if the email matches the company email domain pattern
      return companyEmailRegex.test(value ?? '');
    }
  );
