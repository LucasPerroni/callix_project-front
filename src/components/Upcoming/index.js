import { useEffect } from "react"
import { useState } from "react"

import { spacexRepository } from "../../repositories/spacexRepository"

export default function UpcomingLaunches() {
  const [launchData, setLaunch] = useState({})

  useEffect(() => {
    spacexRepository
      .getAllNextLaunches()
      .then(({ data }) => setLaunch(data))
      .catch(({ response }) => console.log(response))
  }, [])

  console.log(launchData)

  return <></>
}
