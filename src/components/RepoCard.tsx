import React from "react";
import { IRepo } from "../models/models.js"
import {useActions} from "../hooks/actions.ts";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removeFavorite } = useActions()

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(repo.html_url)
  }

  const deleteToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavorite(repo.html_url)
  }

  return (
    <div className="p-4 cursor-pointer rounded bg-gray-700 hover:shadow-md hover:bg-gray-100 transition-all mt-2">
      <h2>{repo.full_name}</h2>
      <p>
        Forks: <span className="font-bold">{repo.fork}</span>
        Watchers: <span className="font-bold">{repo.watchers}</span>
      </p>

      <button className="py-2 px-4 bg-yellow-400" onClick={addToFavorite}>
        Add
      </button>
      <button className="py-2 px-4 bg-red" onClick={deleteToFavorite}>
        Remove
      </button>
    </div>
  )
}

export default RepoCard
