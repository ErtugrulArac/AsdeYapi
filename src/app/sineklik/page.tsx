import React from 'react'
import Hangisiuygun from "@/app/sineklik/hangisiuygun"
import Main from "@/app/sineklik/main"
import Karsılama from "@/app/sineklik/karsılama"

const page = () => {
    return (
        <div>
            <Karsılama />
            <Hangisiuygun />
            <Main />
        </div>
    )
}

export default page