export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  // Read prediction
  const response = await fetch(
    `https://api.replicate.com/v1/predictions/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + 'r8_RsJlp6Oq544TKxf5b0RiBuSI5Mr1SrB1GWytR'
        // Authorization: 'Token ' + useRuntimeConfig().replicateApiToken
        
      }
    }
  )
  const json = await response.json()

  // Parse prediction
  const status = json.status
  const output = json.output

  return { id, status, output }
})
