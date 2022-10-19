import { useEffect, useState } from "react"
import { ThreeCircles } from "react-loader-spinner"

import { spacexRepository } from "../../repositories/spacexRepository"
import LaunchCard from "../LaunchCard"

import { Main } from "./style"

export default function NextLaunch() {
  const [launchData, setLaunch] = useState({})

  useEffect(() => {
    spacexRepository
      .getNextLaunch()
      .then(({ data }) => setLaunch(data))
      .catch(({ response }) => console.log(response))
  }, [])

  return (
    <Main>
      {launchData.launch ? <LaunchCard launch={launchData.launch} /> : <ThreeCircles color="#326cde" />}
    </Main>
  )
}
