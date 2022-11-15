import { Fragment, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Popover, Transition } from "@headlessui/react"
import { FlyOutMenu } from "./FlyOutMenu"

export const FlyOutButtonToggle = () => {
    const buttonRef = useRef(null)
    const [openState, setOpenState] = useState(false)
  
    const toggleMenu = (open) => {
      setOpenState((openState) => !openState)
      buttonRef?.current?.click()
    }
  
    const onHover = (open, action) => ((!open && !openState && action === "onMouseEnter") ||(open && openState && action === "onMouseLeave")) &&toggleMenu(open)
    const handleClick = (open) => setOpenState(!open) 

    return (
      <div>
        <Popover className=" justify-self-start ">
          {({ open }) => (
            <div
              onMouseEnter={() => onHover(open, "onMouseEnter")}
              onMouseLeave={() => onHover(open, "onMouseLeave")}
            >
              <Popover.Button className=" focus:outline-none" ref={buttonRef}>
                <a onClick={() => handleClick(open)} className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600">
                <FontAwesomeIcon className="text-white" icon={ faEllipsisVertical }/>
                </a>
                <p className='bg-gradient-to-l from-teal-700 via-blue-700 to-cyan-800 h-1'></p>                
              </Popover.Button>
  
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel  className="absolute z-40 left-0 w-full  h-auto my-2 ">
                  <FlyOutMenu/>
                </Popover.Panel>
              </Transition>
            </div>
          )}
        </Popover>
      </div>
    )
}