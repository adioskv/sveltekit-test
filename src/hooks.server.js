const public_paths = [
  "/env-test",
  "/"
]

function isPathAllowed(path) {
  return public_paths.some(allowedPath =>
    path === allowedPath || path.startsWith(allowedPath + '/')
  );
}

export async function handle({event, resolve}) {
  const url = new URL(event.request.url);

  if (!isPathAllowed(url.pathname) && import.meta.env.VITE_VALUE !== "PRODUCTION") {
    return new Response('Not authorized', {
      status: 303,
      headers: { location: '/' }
    });
  }

  return await resolve(event)
}