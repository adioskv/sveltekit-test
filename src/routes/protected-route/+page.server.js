export async function load({ request, resolve }) {
  const { VITE_VALUE } = import.meta.env.VITE_VALUE;

  if (VITE_VALUE === "DEVELOPMENT") {
    return {
      status: 302,
      headers: {
        location: '/'
      }
    };
  }

  return {
    status: 200,
    body: 'Page content'
  };
}
