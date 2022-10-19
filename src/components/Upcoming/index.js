import { useEffect, useState } from "react"
import { ThreeCircles } from "react-loader-spinner"

import { spacexRepository } from "../../repositories/spacexRepository"
import LaunchCard from "../LaunchCard"

import { Main } from "../Next/style"

export default function UpcomingLaunches() {
  const [launchData, setLaunch] = useState({})

  useEffect(() => {
    spacexRepository
      .getAllNextLaunches()
      .then(({ data }) => setLaunch(data))
      .catch(({ response }) => console.log(response))
  }, [])

  return (
    <Main>
      {launchData.launches ? (
        launchData.launches.map((launch, i) => {
          return <LaunchCard key={i} launch={launch} />
        })
      ) : (
        <ThreeCircles color="#326cde" />
      )}
    </Main>
  )
}
