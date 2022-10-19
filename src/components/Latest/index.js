import { useEffect } from "react"
import { useState } from "react"

import { spacexRepository } from "../../repositories/spacexRepository"

export default function LatestLaunch() {
  const [launchData, setLaunch] = useState({})

  useEffect(() => {
    spacexRepository
      .getLatestLaunch()
      .then(({ data }) => setLaunch(data))
      .catch(({ response }) => console.log(response))
  }, [])

  console.log(launchData)

  return <></>
}
