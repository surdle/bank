/**
 * A hook to get the current page
 * @param {string} pageName
 * @returns component
 */

export default function userActualPage ({ currentPage, pages, children }) {
  const page = pages.indexOf(currentPage.value)
  return (
    <div>
      {children[page]}
    </div>
  )
}
