export default defineEventHandler(async (event) => {
  // code only in the backend (maybe api call with private key)
  // this function gets fired when request /api/test

  // handle get query
  const { name } = getQuery(event)
  // handle post data
  // const { name } = await readBody(event)

  const { testKey } = useRuntimeConfig()
  console.log('test api key:', testKey)

  return {
    message: `hello, ${name}`
  }
})
