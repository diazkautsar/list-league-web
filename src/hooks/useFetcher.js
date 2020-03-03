import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetcher(url) {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'get',
            url: url
        })
            .then(({ data }) => {
                setData(data)
            })
            .catch(err => {
                setError('Invalid Server Error')
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return [error, loading, data]
}