import { useEffect, useState } from "react"
import { ThreeCircles } from "react-loader-spinner"

import { spacexRepository } from "../../repositories/spacexRepository"
import LaunchCard from "../LaunchCard"

import { Main } from "../Next/style"

export default function LatestLaunch() {
  const [launchData, setLaunch] = useState({})

  useEffect(() => {
    spacexRepository
      .getLatestLaunch()
      .then(({ data }) => setLaunch(data))
      .catch(({ response }) => console.log(response))
  }, [])

  return <Main>{launchData.launch ? <LaunchCard launch={launchData.launch} /> : <ThreeCircles color="#326cde" />}</Main>
}
