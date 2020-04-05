import React, { useEffect } from "react"


const NotFoundPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }
  }, []);
  return (
    <div>
      <p>PAGE NOT FOUND!</p>
    </div>

  )
}

export default NotFoundPage
