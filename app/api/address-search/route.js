export async function GET(req) {

  try {

    const { searchParams } = new URL(req.url)

    const query = searchParams.get("q")

    if (!query) {
      return Response.json([])
    }

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query},Italy&format=json&addressdetails=1&limit=5`,
      {
        headers: {
          "User-Agent": "DroneGuard"
        }
      }
    )

    const data = await response.json()

    return Response.json(data)

  } catch (err) {

    console.log(err)

    return Response.json([])

  }

}