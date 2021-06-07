import React from "react"
import "./CollectionPreview.scss"
import CollectionItem from "../collection-item/CollectionItem"

// Display only 4 items on the shop collection page with .filter

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
