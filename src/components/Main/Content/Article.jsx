function Article({ title, children }) {
  return (
    <article>
      {title && <h2>{title}</h2>}
      {children}
    </article>
  )
}

export default Article
