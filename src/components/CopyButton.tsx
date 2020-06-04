import React from "react"
import copy from "copy-to-clipboard"
import toast from "cogo-toast"
import clipboard from "../assets/images/clipboard.svg"
import "../assets/styles/components/CopyButton.scss"

type Props = {
  toCopy: string
  className?: string
}

const CopyButton: React.FC<Props> = ({ toCopy, className }) => {
  /**
   * Copy text to clipboard
   */
  const handleCopy = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    /* Prevent default */
    e.preventDefault()

    /* Copy to clipboard */
    copy(toCopy)

    /* Show toast */
    toast.success("Copied to clipboard", {
      position: "top-right",
      hideAfter: 2,
    })
  }

  return (
    <button
      className={`copy-button ${className ?? ""}`}
      data-copy="markdown"
      title="Copy to clipboard"
      onClick={handleCopy}
      type="button"
    >
      <img src={clipboard} alt="copy-markdown" />
    </button>
  )
}

export default CopyButton
