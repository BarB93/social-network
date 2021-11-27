import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { resetUsers, setSearch } from '../../../../redux/slices/userSlice'
import { FaSearch } from 'react-icons/fa'
import { debounce } from '../../../../utils/debounce'

import styles from './UserSearch.module.scss'

const UserSearch = () => {
	const dispatch = useDispatch()
	const { search } = useSelector((state) => state.user)
	const [searchValue, setSearchValue] = useState(search)

	const searchDebounce = useCallback(
		debounce((value) => {
			dispatch(resetUsers())
			dispatch(setSearch(value))
		}, 700),
		[],
	)

	let handleChange = (e) => {
		const { value } = e.target
		setSearchValue(value)
		searchDebounce(value)
	}

	return (
		<label className={styles.search}>
			<FaSearch className={styles.search__icon} />
			<input
				value={searchValue}
				onChange={handleChange}
				className={styles.search__input}
				type='text'
				placeholder='Поиск друзей'
			/>
		</label>
	)
}

export default UserSearch
