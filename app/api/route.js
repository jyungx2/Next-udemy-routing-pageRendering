// Route Handler: GET/POST/PUT/PATCH/DELETE

export function GET(request) {
  console.log(request);

  // return Response.json();
  return new Response("Hello!");
}

// export function POST(request) {}
