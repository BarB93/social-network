import {useEffect, useRef} from 'react'
import {isAllOf} from '@reduxjs/toolkit'

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()

    useEffect(() => {
        if(isLoading) return
        if(observer.current) observer.current.disconnect()

        const options = {
            root: document,
            rootMargin: '0px',
            threshold: 0
        }

        const cb = (entries, observer) => {
            console.log('in Observer')
            if(entries[0].isIntersecting && canLoad) {
                callback()
            }
        }

        observer.current = new IntersectionObserver(cb, options)
        observer.current.observe(ref.current)

    },[isLoading])

}