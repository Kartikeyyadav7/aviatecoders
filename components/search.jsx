import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
//import styles from './search.module.css'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
          
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className="bg-white flex items-center rounded-full shadow-xl"
      ref={searchRef}
    >
      <input
       className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search posts'
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <ul className="`w-23 mt-4 text-right" >
          {results.map(({ id, title }) => (
            <li  key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}