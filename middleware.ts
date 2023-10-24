export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/issues/new',
    '/issues/edit/:id+', // this is a dynamic route so we need to add the + sign at the end
  ],
};
