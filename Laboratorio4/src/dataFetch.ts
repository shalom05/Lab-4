export const requestData = async (url: string) => {
    const data = await fetch(url)
    const dataJson = await data.json()
    const res = dataJson.results
    return res
}