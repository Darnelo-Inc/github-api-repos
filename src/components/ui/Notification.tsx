import { useEffect, useState, FC } from "react"
import { NotificationProps } from "../../models/models"

const Notification: FC<NotificationProps> = ({ message }) => {
  const [showNotification, setShowNotification] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowNotification(false)
    }, 2000)
  }, [])

  return (
    <>
      {showNotification && (
        <div className="text-center fixed w-[250px] bottom-2 right-0 mb-4 mr-4 p-4 bg-red-500 text-white rounded-lg shadow-lg">
          <p className="text-sm">{message}</p>
        </div>
      )}
    </>
  )
}

export default Notification
