import React from 'react'
import Hangisiuygun from "@/app/anasineklik/hangisiuygun"
import Main from "@/app/anasineklik/main"
import Karsılama from "@/app/anasineklik/karsılama"

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