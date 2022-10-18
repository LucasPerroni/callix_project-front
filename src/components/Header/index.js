import { useLocation, useNavigate } from "react-router-dom"
import { HeaderComponent, Title, Navigate } from "./styles"

export default function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <HeaderComponent>
      <Title onClick={() => navigate("/")}>SpaceX Launches</Title>

      <Navigate>
        <h1 onClick={() => navigate("/next")} className={pathname === "/next" ? "selected" : ""}>
          Next
        </h1>
        <h1 onClick={() => navigate("/latest")} className={pathname === "/latest" ? "selected" : ""}>
          Latest
        </h1>
        <h1 onClick={() => navigate("/upcoming")} className={pathname === "/upcoming" ? "selected" : ""}>
          Upcoming
        </h1>
        <h1 onClick={() => navigate("/past")} className={pathname === "/past" ? "selected" : ""}>
          Past
        </h1>
      </Navigate>
    </HeaderComponent>
  )
}
