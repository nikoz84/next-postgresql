export async function GET(req: Request) {
  
  return new Response(
    JSON.stringify({
      name: 'Pagina teste api',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
