import React from 'react'
import styles from './Searchbar.module.css'
import SearchIcon from '../../assets/search-icon.png'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'

function Searchbar() {

    const [searchInput, setSearchInput] = useState('')
    const { response: top } = useFetch('/albums/top')
    const { response: latest } = useFetch('/albums/new')

    const [resultAlbums, setResultAlbums] = useState([])
    const [notFound, setNotFound] = useState(false)

    //HANDLE FORM SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    //HANDLE INPUT CHANGE
    const handleInputChange = (e) => {
        searchSongs(e.target.value)
    }

    const searchSongs = (query) => {

        if (top.data.length > 0 && query != "") {

            setResultAlbums(top.data.filter(item => {

                const title = item.title.toLowerCase()
                const desc = item.description.toLowerCase()
                const q = query.toLowerCase()
                return title.includes(q) || desc.includes(q)

            }))
        }

        if (latest.data.length > 0 && query != "") {
            setResultAlbums(prev => [...prev, ...latest.data.filter(item => {

                const title = item.title.toLowerCase()
                const desc = item.description.toLowerCase()
                const q = query.toLowerCase()
                return title.includes(q) || desc.includes(q)

            })])
        }
    }


    useEffect(() => {

        if (resultAlbums.length == 0) {
            setNotFound(true)
        }
        else {
            setNotFound(false)
        }

    }, [resultAlbums])


    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.searchbar}>
                <input value={searchInput} onChange={((e) => {
                    setSearchInput(e.target.value)
                    handleInputChange(e)
                })} placeholder='Search a album of your choice' required />
                <button>
                    <img src={SearchIcon} height={20} width={20} />
                </button>
            </form>

            {resultAlbums.length > 0 && searchInput != "" && (
                <div className={styles.searchResults}>
                    {resultAlbums.map(item => (
                        <div className={styles.albumCard} key={item.id}>
                            <img src={item.image} />
                            <div>
                                <h3>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                            <p className={styles.follows}>{`${item.follows} Follows`}</p>
                        </div>
                    ))}
                </div>
            )}

            {notFound && searchInput != "" && (
                <div className={styles.searchResults}>
                    <p>No results found!</p>
                </div>
            )}

        </div>
    )
}

export default Searchbar