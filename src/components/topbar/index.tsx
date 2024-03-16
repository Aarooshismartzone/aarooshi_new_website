import React, { useState } from 'react'
import { GiSundial } from "react-icons/gi";
import { GiMoonClaws } from "react-icons/gi";
import './style.scss'
import { Switch } from '@nextui-org/react';

export default function Topbar() {

    const [mode, newMode] = useState<boolean>(false)

    function togglemode() {
        newMode(!mode);
    }

    return (
        <>
            <div className='top-class'>
                <div className='flex justify-between text-white'>
                    <img src="images/logo.png" className="w-36 p-0" />
                    <p className='text-xl font-bold'>ECOMMERCE WEBSITE</p>
                    <div>
                        {mode ? (<>Enable Night Mode</>) : (<>Enable Daylight Mode</>)}

                        <Switch
                            defaultSelected
                            size="lg"
                            color="success"
                            startContent={<GiSundial />}
                            endContent={<GiMoonClaws />}
                            onClick={togglemode}
                            className='ml-3'
                        >
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}
