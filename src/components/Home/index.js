import Gif from "../../assets/gif/rocket-launch.gif"

import { Rocket } from "./styles"

export default function Home() {
  return (
    <Rocket>
      <img src={Gif} alt="rocket" />
    </Rocket>
  )
}
