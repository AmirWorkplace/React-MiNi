import { useQuery } from "react-query"

export default function BlynkSwitch() {
  const {
    // data,
    error,
    // failureCount,
    // isError,
    // isFetchedAfterMount,
    // isFetching,
    // isIdle,
    isLoading,
    // isPreviousData,
    // isStale,
    // isSuccess,
    // refetch,
    // remove,
    // status,
  } = useQuery("Blynk", function () {
    fetch(
      "https://blynk.cloud/external/api/get?token=Gq2xJ7uj2RbCqHurMycIC_UOpc1YE3by&v0"
    )
      .then(function (response) {
        return response.body
      })
      .then((r) => console.log(r))
  })

  if (isLoading) return "Wait a little bit!"
  if (error) return console.log(error)
  /*   function log() {
    console.log(data)
    console.log(error)
    console.log(failureCount)
    console.log(isError)
    console.log(isFetchedAfterMount)
    console.log(isFetching)
    console.log(isIdle)
    console.log(isLoading)
    console.log(isPreviousData)
    console.log(isStale)
    console.log(isSuccess)
    console.log(refetch)
    console.log(remove)
    console.log(status)
  } */
  return "000000"
  /* console.log(
    data,
    error,
    failureCount,
    isError,
    isFetchedAfterMount,
    isFetching,
    isIdle,
    isLoading,
    isPreviousData,
    isStale,
    isSuccess,
    refetch,
    remove,
    status
  ) */
}
