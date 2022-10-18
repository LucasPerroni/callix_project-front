import api from "../services/api"

function getNextLaunch() {
  const promise = api.get("/spacex/next")
  return promise
}

function getLatestLaunch() {
  const promise = api.get("/spacex/latest")
  return promise
}

function getAllNextLaunches() {
  const promise = api.get("/spacex/upcoming")
  return promise
}

function getAllPastLaunches() {
  const promise = api.get("/spacex/past")
  return promise
}

export const spacexRepository = {
  getNextLaunch,
  getLatestLaunch,
  getAllNextLaunches,
  getAllPastLaunches,
}
