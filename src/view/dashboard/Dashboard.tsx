import { useState } from "react"
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../../store/github/github.api"
import { useDebounce } from "../../hooks/debounce"
import RepoCard from "../../components/RepoCard"

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("")

  const debounce = useDebounce(searchValue)
  const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
    skip: !debounce.length,
  })

  const [fetchRepos, { data: reposData }] = useLazyGetUserReposQuery()

  const handleClick = (name: string) => fetchRepos(name)

  if (isLoading) return <p className="text-red-500">Loading...</p>

  if (isError) return <p className="text-red-500">Oops something error...</p>

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-xl mt-4">Search github repositories</h1>
      <div className="w-[360px] mt-6">
        <input
          type="text"
          className="py-2 px-4 w-full h-[42] mb-2"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="mt-5 ">
        {data?.map((item) => (
          <p
            className="text-white cursor-pointer mt-2"
            onClick={() => handleClick(item.login)}
            key={item.id}
          >
            {item.login}
          </p>
        ))}
      </div>

      <div className="mt-5 ">
        {reposData?.map((item) => (
          <RepoCard repo={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
